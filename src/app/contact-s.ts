import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserContact } from './icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private API_URL = 'http://localhost:3000/api/profile'; 

  constructor(private http: HttpClient) {}

  getContactInfo(): Observable<IUserContact> {
    return this.http.get<IUserContact>(this.API_URL);
  }

  updateContactInfo(userId: string, contactId: string, data: { url: string }): Observable<any> {
    return this.http.put(`${this.API_URL}/${userId}/contact/${contactId}`, data);
  }
}
