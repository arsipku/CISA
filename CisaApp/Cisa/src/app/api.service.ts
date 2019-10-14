import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class APIService {
    private records: string;
    private api: string = 'http://127.0.0.1:8991/cisa';
    constructor(private http: HttpClient) { }

    creditRating(body: Object) {
        this.http.post(this.api, body).subscribe();
    }
}
