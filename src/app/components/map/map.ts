import {Component, Input, Output, EventEmitter, NgZone, OnChanges, SimpleChange} from 'angular2/core';


@Component({
    selector: 'map',
    templateUrl: 'app/components/map/map.html',
    styleUrls: ['app/components/map/map.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Map {
    @Input() hosts: Array<any>;
    @Output() aHostWasSelected = new EventEmitter<Object>();
    map: Object;
    markersArr: Array<any> = [];
    zone: NgZone;
    @Input() clearSelected: boolean;
    @Input() selectThis: Object = {};
    public a;
    

    // only called if there is an @input variable set by parent.
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes["clearSelected"] && (changes["clearSelected"].currentValue && !changes["clearSelected"].previousValue)) {
            this.setMarkersVisibility(undefined);
        }
        if (changes["selectThis"] && changes["selectThis"].currentValue.name) {
            this.setMarkersVisibility(changes["selectThis"].currentValue);
            this.selectThis = {};
        }
        if (changes["hosts"]) {
            this.paintMarkers(this.window, this.map);
        }

    }

    constructor(private window: Window, zone: NgZone) {
        let that = this;
        this.zone = zone;
        interface Window {
            google?: any;
        }
        this.map = {};

        setTimeout(() => {

            this.map = new this.window["google"].maps.Map(document.getElementById('map'), {
                center: { lat: 4.651602, lng: -74.057372 },
                zoom: 11
            });
            this.map["addListener"]('click', function(e) {
                that.setMarkersVisibility(undefined);
                that.emitClick({});
            });

        }, 0);
    }


    emitClick(hostObject: Object) {
        // http://blog.thoughtram.io/angular/2016/01/22/understanding-zones.html && http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html
        this.zone.run(() => {
            this.aHostWasSelected.next(hostObject);
        })
    }
    paintMarkers(window, map) {
        let that = this;
        let aMarker;

        this.hosts.map(function(host) {
            aMarker = new window.google.maps.Marker({
                position: host.location.coordinates,
                map: map,
                title: host.name
            });
            aMarker.addListener('click', function(e) {
                that.emitClick(host);
                that.setMarkersVisibility(host);
            });

            that.markersArr.push(aMarker);
        })

    }

    setMarkersVisibility(currentHost) {
        let that = this;

        that.markersArr.map(function(marker) {
            if (currentHost) {
                if (marker.title !== currentHost.name) {
                    marker.setVisible(false);
                }
            } else {
                marker.setVisible(true);
            }
        })
    }


 
}
