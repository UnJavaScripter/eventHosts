System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Map;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Map = (function () {
                function Map(window, zone) {
                    this.window = window;
                    this.aHostWasSelected = new core_1.EventEmitter();
                    this.markersArr = [];
                    this.selectThis = {};
                    var that = this;
                    this.zone = zone;
                    this.map = {};
                    setTimeout(function () {
                        this.map = new this.window.google.maps.Map(document.getElementById('map'), {
                            center: { lat: 4.651602, lng: -74.057372 },
                            zoom: 11
                        });
                        this.map.addListener('click', function (e) {
                            that.setMarkersVisibility(undefined);
                            that.emitClick({});
                        });
                        that.paintMarkers(that.window, this.map);
                    }, 0);
                }
                // only called if there is an @input variable set by parent.
                Map.prototype.ngOnChanges = function (changes) {
                    if (changes["clearSelected"] && (changes["clearSelected"].currentValue && !changes["clearSelected"].previousValue)) {
                        this.setMarkersVisibility(undefined);
                    }
                    if (changes["selectThis"] && changes["selectThis"].currentValue.name) {
                        this.setMarkersVisibility(changes["selectThis"].currentValue);
                        this.selectThis = {};
                    }
                };
                Map.prototype.emitClick = function (hostObject) {
                    var _this = this;
                    this.zone.run(function () {
                        _this.aHostWasSelected.next(hostObject);
                    });
                };
                Map.prototype.paintMarkers = function (window, map) {
                    var that = this;
                    var aMarker;
                    this.hosts.map(function (host) {
                        aMarker = new window.google.maps.Marker({
                            position: host.location.coordinates,
                            map: map,
                            title: host.name
                        });
                        aMarker.addListener('click', function (e) {
                            that.emitClick(host);
                            that.setMarkersVisibility(host);
                        });
                        that.markersArr.push(aMarker);
                    });
                };
                Map.prototype.setMarkersVisibility = function (currentHost) {
                    var that = this;
                    that.markersArr.map(function (marker) {
                        if (currentHost) {
                            if (marker.title !== currentHost.name) {
                                marker.setVisible(false);
                            }
                        }
                        else {
                            marker.setVisible(true);
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Map.prototype, "hosts", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Map.prototype, "aHostWasSelected", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Map.prototype, "clearSelected", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Map.prototype, "selectThis", void 0);
                Map = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: 'app/components/map/map.html',
                        styleUrls: ['app/components/map/map.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [Window, core_1.NgZone])
                ], Map);
                return Map;
            })();
            exports_1("Map", Map);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/map/map.js.map