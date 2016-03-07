System.register(['angular2/platform/browser', './app/event-hosts', 'angular2/router', 'angular2/core'], function(exports_1) {
    var browser_1, event_hosts_1, router_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (event_hosts_1_1) {
                event_hosts_1 = event_hosts_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(event_hosts_1.EventHostsApp, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(Window, { useValue: window })
            ]);
        }
    }
});
//# sourceMappingURL=../../app.js.map