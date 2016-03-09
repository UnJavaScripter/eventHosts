import {Injectable} from 'angular2/core';
import {Http, Headers, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor(public http: Http) {
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw('Server error');
    }


    getData() {
        let that = this;
        //const URL = 'http://eventhosts-unjavascripter.rhcloud.com/api/hosts';
        const URL = '../../../hosts_data.json';

        // return an observable
        return this.http.get(URL)
            .map(res => res.json())
            .catch(that.handleError)



    }



}
