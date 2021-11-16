import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disable } from '../Models/disable';
import { ResponseObject } from '../Models/response-object';

@Injectable({
  providedIn: 'root'
})
export class DisableServiseService {

constructor(private http:HttpClient) { }
// url:string="http://localhost:8080/api/v1/superAdmin/organisations/disable"
// addDisableById(id:String,disble:Disable){
//    return this.http.put<ResponseObject>(this.url+`/`+id,disble);
// }

}
