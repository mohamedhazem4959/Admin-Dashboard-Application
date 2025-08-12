import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuserProfile } from './iuser-profile';

@Injectable({
  providedIn: 'root'
})
export class BioS {
 
  BASE_URL = 'http://localhost:3000/api/profile'

  constructor(private _http:HttpClient){ }

  getAllData(){
    return this._http.get<IuserProfile[]>(this.BASE_URL)
  }

  updateBio(userId:string , bio:string){
    return this._http.put(`${this.BASE_URL}/about/bio/${userId}` , {bio})
  }
}

