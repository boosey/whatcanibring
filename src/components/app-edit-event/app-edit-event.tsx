
import { Component, Event, EventEmitter, Prop, State, Watch, Listen } from '@stencil/core';
import { Subject, from } from "rxjs";
import { first } from 'rxjs/operators';
import { parse, format, setYear, setDate, setMonth, setHours, setMinutes } from 'date-fns';
import tointeger from 'lodash.tointeger'

@Component({
    tag: 'app-edit-event',
    styleUrl: 'app-edit-event.css'
})

export class AppEditEvent {

    @Prop() eventId = null;
    @Prop() userid = null;

    @State() currentEvent = {
      name: '',
      date: this.formatDate(new Date()), // from Date to string
      time: this.formatTime(new Date()),
    }

    private startDatePicker
    private startTimePicker
    private dateAsDate
    private timeAsDate

    @Event() loadEventFromIdRequested: EventEmitter
    @Event() updateEventRequested: EventEmitter

    formatDateTime(theDate): string {
      return format(theDate, "YYYY-MM-DDThh:mm")
    }

    formatDate(theDate): string {
      return format(theDate, "YYYY-MM-DD")
    }

    formatTime(theDate): string {
      return format(theDate, "hh:mm")
    }

    componentWillLoad() {
      if (this.eventId !== null) {
        var requestStatus = (new Subject())
        .pipe(first())
        .subscribe((loadedEvent) => {
          this.currentEvent = {...this.currentEvent, ...loadedEvent}
          // from string to date
          this.dateAsDate = parse(this.currentEvent.date)
          this.timeAsDate = parse("2000-01-01T" + this.currentEvent.time)
         })

        var request = { data: this.eventId, status: requestStatus}
        this.loadEventFromIdRequested.emit(request)
      }
    }

    componentDidLoad() {
      this.startDatePicker.addEventListener('ionChange', (ev) => {
          this.changeValue(ev)
        })

      this.startTimePicker.addEventListener('ionChange', (ev) => {
          this.changeValue(ev)
        })

    }

    changeValue(ev){
      let value = ev.target.value;
      switch(ev.target.name){

        case 'name': {
          this.currentEvent.name = value;
            break;
        }

        case 'event-time':

          this.timeAsDate =
            setHours(this.timeAsDate, tointeger(format(value, "hh")))
          this.timeAsDate =
            setMinutes(this.timeAsDate, tointeger(format(value, "mm")))
          break;

        case 'event-date':
          this.dateAsDate =
            setYear(this.dateAsDate, tointeger(format(value, "YYYY")))
          // Apparently the month is 0-based
          this.dateAsDate =
            setMonth(this.dateAsDate, tointeger(format(value, "MM"))-1)
          this.dateAsDate =
            setDate(this.dateAsDate, tointeger(format(value, "DD")))
            break;
      }
    }

    requestUpdateEvent() {
      var requestStatus = new Subject()
      var requestSubscription = requestStatus.subscribe(
        (eventRef) => (null),
        () => console.log("Error updating event"),
        () => {
            const nav: HTMLIonNavElement = document.querySelector('ion-nav')
            if (nav && nav.canGoBack()) {
                return nav.pop({ skipIfBusy: true });
            }
        }
      )
      this.currentEvent.date = this.formatDate(this.dateAsDate)
      this.currentEvent.time = this.formatTime(this.timeAsDate)
      var request = {
        eventId: this.eventId,
        creator: this.userid,
        data: this.currentEvent,
        status: requestStatus
      }
      this.updateEventRequested.emit(request)
    }

    render() {
        return [
          <ion-header>
            <app-subpage-header titleText="Edit Event"></app-subpage-header>
          </ion-header>,

          <ion-content padding>
          <ion-list>
              <ion-item lines="none">
                  <ion-label position="floating">Event Name</ion-label>
                  <ion-input name="name" onInput={(ev) => this.changeValue(ev)}
                    type="text"></ion-input>
              </ion-item>
              <ion-item lines="none">
                <ion-datetime
                  name="event-date"
                  ref={(el)=>this.startDatePicker = el}
                  display-format="MMM D, YYYY"
                  onChange={(ev) => this.changeValue(ev)}
                  value={this.currentEvent.date}>
                </ion-datetime>
              </ion-item>
              <ion-item lines="none">
                <ion-datetime
                  name="event-time"
                  ref={(el)=>this.startTimePicker = el}
                  display-format="h:mmA"
                  onChange={(ev) => this.changeValue(ev)}
                  value={this.currentEvent.time}>
                </ion-datetime>
              </ion-item>
          </ion-list>

          <ion-button onClick={() => this.requestUpdateEvent()}>Update</ion-button>
          </ion-content>
        ]
    }
}