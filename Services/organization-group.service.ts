import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationGroup } from '../Models/organization-group';
import { ResponseObject } from '../Models/response-object';

@Injectable({
  providedIn: 'root'
})
export class OrganizationGroupService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:8081/api/v1/superAdmin/organizations';
  findOrganisationGrpByOrganisation(id:String){
    return this.http.get<ResponseObject>(`${this.url}/`+id);
  }

}
