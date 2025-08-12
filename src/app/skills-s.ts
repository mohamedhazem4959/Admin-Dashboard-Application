import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuserProfile } from './iuser-profile';
import { IAddSkills, Iskills } from './iskills';

@Injectable({
  providedIn: 'root'
})
export class SkillsS {
  BASE_URL = 'http://localhost:3000/api/profile'
  GET_API_URL = 'http://localhost:3000/api/profile/about'

  constructor(private _http:HttpClient){ }

  getAllData(){
      return this._http.get<IuserProfile[]>(this.BASE_URL)
  }

  getSkills(){
    return this._http.get<Iskills[]>(this.GET_API_URL)
  }

  addSkill(userId:string , skillData:IAddSkills){
    return this._http.post<IAddSkills>(`${this.BASE_URL}/${userId}/about`,skillData)
  }

    updateSkill(userId:string , skillId:string , newSkill:IAddSkills){
        return this._http.put<IAddSkills>(`${this.BASE_URL}/${userId}/about/skills/${skillId}` , newSkill)
    }


}
