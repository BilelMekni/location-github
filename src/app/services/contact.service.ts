import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl: string = "http://localhost:3008/contact";

  constructor(private http: HttpClient) { }
  //// ADD CONTACT ////
  addContact(obj: any) {
    return this.http.post<{ message: string, isadded: boolean }>(this.contactUrl, obj);
  }
  //// GET CONTACT ////
  getContact() {
    return this.http.get<{ contact: any }>(`${this.contactUrl}/contact/all/all`);
  }
  //// DELETE CONTACT BY ADMIN ////
  deleteContact(id :any) {
    return this.http.delete<{ isDeleted: boolean}>(`${this.contactUrl}/${id}`);

  }


}
