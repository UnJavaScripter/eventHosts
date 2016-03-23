//console.log()
//console.log
//console.
//console
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Map} from './components/map/map';
import {DataService} from './services/data-service/data-service';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'event-hosts-app',
    providers: [DataService, HTTP_PROVIDERS],
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

    constructor(_dataService_: DataService) {

        _dataService_
            .getData()
            .subscribe(
                data => this.hostsArray = data,
                err => console.log(err),
                () => console.log('Completed!')
            )
        
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