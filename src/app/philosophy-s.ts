import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IuserProfile } from './iuser-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhilosophyS {
  BASE_URL = 'http://localhost:3000/api/profile';

   constructor(private _http:HttpClient){ }

   getAllData(){
    return this._http.get<IuserProfile[]>(this.BASE_URL)
   }

   updatePhilosophy(userId: string, philosophy: string): Observable<any> {
     // Many backends expect the key to match the field name exactly (myPhilosophy)
     // Adjust the payload key if your API expects a different shape.
     const body = { myPhilosophy: philosophy  };
     return this._http.put(`${this.BASE_URL}/about/myPhilosophy/${userId}`, body);
   }
}
