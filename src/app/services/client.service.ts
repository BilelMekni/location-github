import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl: string = "http://localhost:3008/clients";

  constructor(private http: HttpClient) { }
  signup(obj: any, img: File) {
    let formData = new FormData();
    formData.append("firstName", obj.firstName);
    formData.append("lastName", obj.lastName);
    formData.append("date", obj.date);
    formData.append("email", obj.email);
    formData.append("password", obj.password);
    formData.append("confPassword", obj.confPassword);
    formData.append("phone", obj.phone);
    formData.append("adresse", obj.adresse);
    formData.append("gender", obj.gender);
    formData.append("img", obj.img);
    formData.append("role", obj.role);


    return this.http.post<{ message: string }>(`${this.clientUrl}/signup`, formData);

  }
  ///// Get All Clients  //////
  getAllClient() {
    return this.http.get<{ client: any }>(this.clientUrl)
  }
  ///// Delete Clients /////
  deleteClients(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.clientUrl}/${id}`);
  }
  ///// Login /////
  login(user: any) {
    return this.http.post<{ msg: String, manager: any }>(`${this.clientUrl}/login`, user);
  }
  //// **** Get Admin By ID //**** */ /
  getClientById(id: any) {
    return this.http.get<{ owner: string, message: any }>(`${this.clientUrl}/${id}`);
  }


}
