import {bootstrap} from 'angular2/platform/browser';
import {EventHostsApp} from './app/event-hosts';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(EventHostsApp, [
    ROUTER_PROVIDERS,
    provide(Window, { useValue: window })
]);
