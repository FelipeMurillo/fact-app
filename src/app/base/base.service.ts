import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Request, RequestMethod, Response } from "@angular/http"
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from "rxjs"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { contentHeaders } from '../common/headers';
import { environment } from '../../environments/environment';

 
@Injectable()
export class BaseService {
  public baseUrl = environment.baseApi;
  public options: RequestOptions = new RequestOptions({
      url: this.baseUrl,
      method: RequestMethod.Get,
      headers: contentHeaders,
  });
  constructor (public  _router: Router, public _http: Http, public modulo: string) {
    contentHeaders.delete('token');
    contentHeaders.append('token', localStorage.getItem('token'));
    this.options.headers =contentHeaders;
    this.options.url = this.baseUrl + modulo;
  }

  getId(id:number): Observable<any> {
    this.options.url = this.baseUrl + this.modulo + '/'+id;
    this.options.method = RequestMethod.Get;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  get(): Observable<any> {
    this.options.url = this.baseUrl + this.modulo; 
    this.options.method = RequestMethod.Get;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  getGenerico(url: string): Observable<any> {
    this.options.url = this.baseUrl + url; 
    this.options.method = RequestMethod.Get;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }


  guardar(Data, action): Observable<any> {
    const _data = JSON.stringify(Data);
    if (Data.Id) {
      return this.actualizar(_data, action);
    }else {
      return this.agregar(_data, action);
    }
  }

  protected agregar(_data, action) {
    this.options.url = this.baseUrl +this.modulo + action;
    this.options.body = _data;
    this.options.method = RequestMethod.Post;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  agregarAccion(rolId, moduloId, acciones) {   
    let data = JSON.stringify( acciones.filter( a => a.check));
    let url =  this.baseUrl + this.modulo + '/' + rolId + '/' + moduloId ;
    this.options.url = url;
    this.options.body= data;
    this.options.method = RequestMethod.Put;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  agregarModulo(rolId, moduloId) {   
    let url =  this.baseUrl + this.modulo + '/' + rolId + '/modulo/' + moduloId ;
    this.options.url = url;
    this.options.body= '';
    this.options.method = RequestMethod.Post;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  eliminarModulo(rolId, moduloId) {   
    let url =  this.baseUrl + this.modulo + '/' + rolId + '/modulo/' + moduloId ;
    this.options.url = url;
    this.options.method = RequestMethod.Delete;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }


  eliminar(_data) {
    this.options.body= _data;
    this.options.method = RequestMethod.Put;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  protected actualizar(_data, action) {
    this.options.url = this.baseUrl + this.modulo + action;
    this.options.body = _data;
    this.options.method = RequestMethod.Put;
    const request = new Request(this.options);
    return this.makeRequest(request);
  }

  sinPermisos(): Observable<any> {
    this._router.navigate(['/sinpermisos']);
    return Observable.empty();
  }

  forbidden(): Observable<any> {
    this._router.navigate(['/']);
    return Observable.empty();
  }

  makeRequest(request: Request) {
    // console.log(request );
    return this.intercept(this._http.request(request).map(res => res.json()));
  }

  intercept(observable: Observable<any>) {
    return observable.catch(err =>
    {
      if (err.status === 401)
        return this.sinPermisos();
      else if (err.status === 403)
        return this.forbidden();
      else
        return Observable.throw(err);
    });
  }

}
