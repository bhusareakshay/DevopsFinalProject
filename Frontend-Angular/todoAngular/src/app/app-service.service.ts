import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AppServiceService {

  constructor(private http: HttpClient) { }

  constructUrl(path: string, param: any[]) {

    let url = environment.todoApi_url + path;

    if (param) {
      param.forEach(x => {
        url = url + "/" + x;
      });
    }
    return url;
  }

  get<T>(url: string, param?: any[]) {

    let requiredParameter = this.constructUrl(url, param);

    return this.http.get<T>(requiredParameter);
  }

  post<T>(url: string, body: any){
    
    let requiredParameter = this.constructUrl(url, null);

    return this.http.post<T>(requiredParameter,body);
  }

  put<T>(url: string,body:any, param?:any[]){
  
    let requiredParameter = this.constructUrl(url, param);

    return this.http.put<T>(requiredParameter,body);
  }

  delete<T>(url: string, param: any[]) {

    let requiredParameter = this.constructUrl(url, param);

    return this.http.delete<T>(requiredParameter);
  }
}