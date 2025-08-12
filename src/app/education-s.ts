import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddEducation, Ieducation } from './ieducation';
import { IuserProfile } from './iuser-profile';

@Injectable({
  providedIn: 'root'
})
export class EducationS {
  BASE_URL = 'http://localhost:3000/api/profile';
  GET_API_URL = 'http://localhost:3000/api/profile/education'

  constructor(private _http:HttpClient){ }

  getAllData(){
    return this._http.get<IuserProfile[]>(this.BASE_URL)
  }

  getEducations(){
    return this._http.get<Ieducation[]>(this.GET_API_URL)
  }

  getEducationById(userId:number){
    return this._http.get(`${userId}/${this.GET_API_URL}`)
  }

  addEducation(userId:string , educationData:IAddEducation){
    return this._http.post<IAddEducation>(`${this.BASE_URL}/${userId}/education`,educationData)
  }

  updateEducation(userId:string , eduId:string , newEducation:IAddEducation){
          return this._http.put<IAddEducation>(`${this.BASE_URL}/${userId}/education/${eduId}` , newEducation)
      }
}
