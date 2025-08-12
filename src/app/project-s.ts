import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IAddProject, Iproject} from './iprodject';
import { Observable } from 'rxjs';
import { IuserProfile } from './iuser-profile';

@Injectable({
  providedIn: 'root'
})
export class ProjectsS {
  BASE_URL = 'http://localhost:3000/api/profile'
  GET_API_URL = 'http://localhost:3000/api/profile/project'
  constructor(private _http:HttpClient){ }

  getAllData(){
    return this._http.get<IuserProfile[]>(this.BASE_URL)
  }

  getProjects(){
    return this._http.get<Iproject[]>(this.GET_API_URL)
  }

  addProject(userId:string, projectData:IAddProject): Observable<IAddProject>{
    return this._http.post<IAddProject>(`${this.BASE_URL}/${userId}/project`,projectData)
  }

  updateProject(userId:string , projectId:string , newProject:IAddProject){
      return this._http.put<IAddProject>(`${this.BASE_URL}/${userId}/project/${projectId}` , newProject)
  }

  deleteProject(userId:string , projectId:string){
    return this._http.delete(`${this.BASE_URL}/${userId}/project/${projectId}`)
  }

}
