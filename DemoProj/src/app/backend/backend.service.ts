import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

// tslint:disable:one-line
  getItems()
  {
    return 'blah';
  }

  // tslint:enable:one-line
}
