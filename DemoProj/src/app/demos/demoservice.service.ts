import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Currdemo } from '../../currdemo';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoserviceService {

  constructor(private http: HttpClient) { }

  getCurrdemos(): Observable<any> {
    return this.http.get('http://localhost:3000/demos')
      .map(response => {
        return response;
      });
  }

}
