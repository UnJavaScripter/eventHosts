//console.log()
//console.log
//console.
//console
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Map} from './components/map/map'

@Component({
    selector: 'event-hosts-app',
    providers: [],
    templateUrl: 'app/event-hosts.html',
    directives: [ROUTER_DIRECTIVES, Map],
    pipes: [],
    styleUrls: ['app/event-hosts.css'],
})
@RouteConfig([

])
export class EventHostsApp {
    hostsArray: Array<any> = [];
    selectedHost: Object;
    hostToShowOnMap: Object = {};
    clearSelectedHost: boolean;

    constructor() {
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

            
        ]
    }

    selected_from_map(host: Object) {
        this._host_selected(host);
    }

    selected_from_list(host: Object){
        this.hostToShowOnMap = host;

        this._host_selected(host);
    }

    _host_selected(host: Object) {
        // To help with the marker toggling
        this.clearSelectedHost = false
        this.selectedHost = host;
    }


    //To toggle the markers
    clearCurrent(){
        this.selectedHost = {};
        this.clearSelectedHost = true;
        this.hostToShowOnMap = {};
    }
}