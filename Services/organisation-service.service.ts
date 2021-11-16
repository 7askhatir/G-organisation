import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResponseObject } from '../Models/response-object';
import { Disable } from '../Models/disable';

@Injectable({
  providedIn: 'root'
})
export class OrganisationServiceService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:8081/api/v1/superAdmin/organisations';
  findAll(){
     return this.http.get<ResponseObject>(this.url);
   }
   deletById(id:String){
     return this.http.delete(`${this.url}/${id}`);
   }
   addDisableInOrganisation(id:String,disable:Disable){
     return this.http.put<ResponseObject>(`${this.url}/disable/${id}`,disable)
   }
}
