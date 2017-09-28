import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Request, RequestMethod, Response } from "@angular/http"
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../base';

@Injectable()
export class ProductoService  extends  BaseService {

  constructor(public http: Http, public router: Router) {
    super(router, http, 'producto');
  }

}
