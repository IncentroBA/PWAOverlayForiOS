## PWAOverlayForiOS

Overlay message to 'install' app as PWA. Only visible on Safari in iOS.

## Features

Specifically designed for Safari on iOS. Display an overlay message that the user can place the app on the homescreen as
PWA.

## Typical usage scenario

When the app is a PWA and you would want users on iOS to be aware of it.

## Configuration

Ideally place the widget on the first or most common page most users will see, so the overrlay will get enough views
without being visible everywhere.

Inside the widget, the texts can be adjusted. The widget comes with suggested text for ENG and NL.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
