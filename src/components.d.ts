/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppCommands {}
  interface AppCommandsAttributes extends StencilHTMLAttributes {
    'onUserUpdated'?: (event: CustomEvent) => void;
  }

  interface AppEditEvent {
    'eventId': any;
    'userid': any;
  }
  interface AppEditEventAttributes extends StencilHTMLAttributes {
    'eventId'?: any;
    'onLoadEventFromIdRequested'?: (event: CustomEvent) => void;
    'onUpdateEventRequested'?: (event: CustomEvent) => void;
    'userid'?: any;
  }

  interface AppHome {
    'userid': string;
  }
  interface AppHomeAttributes extends StencilHTMLAttributes {
    'onLoadEventsRequested'?: (event: CustomEvent) => void;
    'userid'?: string;
  }

  interface AppItems {
    'eventId': string;
    'userid': string;
  }
  interface AppItemsAttributes extends StencilHTMLAttributes {
    'eventId'?: string;
    'onLoadItemsRequested'?: (event: CustomEvent) => void;
    'userid'?: string;
  }

  interface AppLogin {}
  interface AppLoginAttributes extends StencilHTMLAttributes {
    'onLoginCompleted'?: (event: CustomEvent) => void;
    'onLoginRequested'?: (event: CustomEvent) => void;
  }

  interface AppMainmenu {
    'close': () => void;
  }
  interface AppMainmenuAttributes extends StencilHTMLAttributes {
    'onLogoutCompleted'?: (event: CustomEvent) => void;
    'onLogoutRequested'?: (event: CustomEvent) => void;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {
    'onLoginCompleted'?: (event: CustomEvent) => void;
  }

  interface AppSubpageHeader {
    'button': string;
    'titleText': string;
  }
  interface AppSubpageHeaderAttributes extends StencilHTMLAttributes {
    'button'?: string;
    'titleText'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppCommands': Components.AppCommands;
    'AppEditEvent': Components.AppEditEvent;
    'AppHome': Components.AppHome;
    'AppItems': Components.AppItems;
    'AppLogin': Components.AppLogin;
    'AppMainmenu': Components.AppMainmenu;
    'AppRoot': Components.AppRoot;
    'AppSubpageHeader': Components.AppSubpageHeader;
  }

  interface StencilIntrinsicElements {
    'app-commands': Components.AppCommandsAttributes;
    'app-edit-event': Components.AppEditEventAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-items': Components.AppItemsAttributes;
    'app-login': Components.AppLoginAttributes;
    'app-mainmenu': Components.AppMainmenuAttributes;
    'app-root': Components.AppRootAttributes;
    'app-subpage-header': Components.AppSubpageHeaderAttributes;
  }


  interface HTMLAppCommandsElement extends Components.AppCommands, HTMLStencilElement {}
  var HTMLAppCommandsElement: {
    prototype: HTMLAppCommandsElement;
    new (): HTMLAppCommandsElement;
  };

  interface HTMLAppEditEventElement extends Components.AppEditEvent, HTMLStencilElement {}
  var HTMLAppEditEventElement: {
    prototype: HTMLAppEditEventElement;
    new (): HTMLAppEditEventElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppItemsElement extends Components.AppItems, HTMLStencilElement {}
  var HTMLAppItemsElement: {
    prototype: HTMLAppItemsElement;
    new (): HTMLAppItemsElement;
  };

  interface HTMLAppLoginElement extends Components.AppLogin, HTMLStencilElement {}
  var HTMLAppLoginElement: {
    prototype: HTMLAppLoginElement;
    new (): HTMLAppLoginElement;
  };

  interface HTMLAppMainmenuElement extends Components.AppMainmenu, HTMLStencilElement {}
  var HTMLAppMainmenuElement: {
    prototype: HTMLAppMainmenuElement;
    new (): HTMLAppMainmenuElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSubpageHeaderElement extends Components.AppSubpageHeader, HTMLStencilElement {}
  var HTMLAppSubpageHeaderElement: {
    prototype: HTMLAppSubpageHeaderElement;
    new (): HTMLAppSubpageHeaderElement;
  };

  interface HTMLElementTagNameMap {
    'app-commands': HTMLAppCommandsElement
    'app-edit-event': HTMLAppEditEventElement
    'app-home': HTMLAppHomeElement
    'app-items': HTMLAppItemsElement
    'app-login': HTMLAppLoginElement
    'app-mainmenu': HTMLAppMainmenuElement
    'app-root': HTMLAppRootElement
    'app-subpage-header': HTMLAppSubpageHeaderElement
  }

  interface ElementTagNameMap {
    'app-commands': HTMLAppCommandsElement;
    'app-edit-event': HTMLAppEditEventElement;
    'app-home': HTMLAppHomeElement;
    'app-items': HTMLAppItemsElement;
    'app-login': HTMLAppLoginElement;
    'app-mainmenu': HTMLAppMainmenuElement;
    'app-root': HTMLAppRootElement;
    'app-subpage-header': HTMLAppSubpageHeaderElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
