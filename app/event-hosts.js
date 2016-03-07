System.register(['angular2/core', 'angular2/router', './components/map/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, map_1;
    var EventHostsApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
            EventHostsApp = (function () {
                function EventHostsApp() {
                    this.hostsArray = [];
                    this.hostToShowOnMap = {};
                    this.hostsArray = [
                        {
                            "name": "Atom House",
                            "location": {
                                "geographical": {
                                    "country": {
                                        "name": "colombia",
                                        "code": "co"
                                    },
                                    "city": "bogota",
                                    "state": "bogota"
                                },
                                "coordinates": {
                                    "lat": 4.651602,
                                    "lng": -74.057372
                                },
                                "address": "Carrera 7 # 69-17"
                            },
                            "capacity": 50,
                            "openingHours": {
                                "from": "7:00am",
                                "to": "9:00pm"
                            },
                            "features": [
                                "Projector",
                                "WiFi",
                                "Bathrooms"
                            ],
                            "contact": {
                                "email": "atomhouse@socialatomgroup.com"
                            },
                            "website": "http://atomhouse.com",
                            "pics": {
                                "header": "http://photos2.meetupstatic.com/photos/event/a/8/0/1/highres_434923009.jpeg"
                            }
                        },
                        {
                            "name": "HubBOG",
                            "location": {
                                "geographical": {
                                    "country": {
                                        "name": "colombia",
                                        "code": "co"
                                    },
                                    "city": "bogota",
                                    "state": "bogota"
                                },
                                "coordinates": {
                                    "lat": 4.684663,
                                    "lng": -74.052131
                                },
                                "address": "Calle 98 #18-71"
                            },
                            "capacity": 30,
                            "openingHours": {
                                "from": "6:00am",
                                "to": "9:00pm"
                            },
                            "features": [
                                "Projector",
                                "WiFi",
                                "Bathrooms"
                            ],
                            "contact": {
                                "email": "info@hubbog.com",
                                "phone": "+57 (1) 6014826"
                            },
                            "website": "http://hubbog.com",
                            "pics": {
                                "header": "http://welcu-assets.s3.amazonaws.com/uploads/other/wp/Hubbog.jpg"
                            }
                        },
                        {
                            "name": "Wayra",
                            "location": {
                                "geographical": {
                                    "country": {
                                        "name": "colombia",
                                        "code": "co"
                                    },
                                    "city": "bogota",
                                    "state": "bogota"
                                },
                                "coordinates": {
                                    "lat": 4.689833,
                                    "lng": -74.070925
                                },
                                "address": "Carrera 67 # 100-20"
                            },
                            "capacity": 30,
                            "openingHours": {
                                "from": "8:00am",
                                "to": "6:00pm"
                            },
                            "features": [
                                "Projector",
                                "WiFi",
                                "Bathrooms"
                            ],
                            "contact": {
                                "email": "presswayraco@wayra.org",
                            },
                            "website": "http://wayra.co/es/co",
                            "pics": {
                                "header": "http://www.tropicalgringo.com/web/wp-content/uploads/2014/02/IMG_0206.jpg"
                            }
                        },
                    ];
                }
                EventHostsApp.prototype.selected_from_map = function (host) {
                    this._host_selected(host);
                };
                EventHostsApp.prototype.selected_from_list = function (host) {
                    this.hostToShowOnMap = host;
                    this._host_selected(host);
                };
                EventHostsApp.prototype._host_selected = function (host) {
                    // To help with the marker toggling
                    this.clearSelectedHost = false;
                    this.selectedHost = host;
                };
                //To toggle the markers
                EventHostsApp.prototype.clearCurrent = function () {
                    this.selectedHost = {};
                    this.clearSelectedHost = true;
                    this.hostToShowOnMap = {};
                };
                EventHostsApp = __decorate([
                    core_1.Component({
                        selector: 'event-hosts-app',
                        providers: [],
                        templateUrl: 'app/event-hosts.html',
                        directives: [router_1.ROUTER_DIRECTIVES, map_1.Map],
                        pipes: [],
                        styleUrls: ['app/event-hosts.css'],
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [])
                ], EventHostsApp);
                return EventHostsApp;
            })();
            exports_1("EventHostsApp", EventHostsApp);
        }
    }
});
//# sourceMappingURL=../../../app/event-hosts.js.map