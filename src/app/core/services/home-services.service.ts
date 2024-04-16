import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  private http = inject(HttpClient)


  ApiUrl = "https://backend.didarhasan.xyz";

  bannerSliderGet(): Observable<any> {
    return this.http.get(this.ApiUrl + "/bannerSlider/get")
  };
  categoryGet(): Observable<any> {
    return this.http.get(this.ApiUrl + "/category/get")
  };



}