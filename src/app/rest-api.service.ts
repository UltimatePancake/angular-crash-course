import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RestApiService {
    URL = 'http://localhost:3000/posts';

    constructor(
        private http: Http
    ) { }

    getList() {
        return this.http.get(this.URL);
    }

}
