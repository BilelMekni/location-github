import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carUrl: string = "http://localhost:3008/cars"

  constructor(private http: HttpClient) { }
  /////// ADD CAR //////
  adCar(obj: any, img: File) {
    let formData = new FormData();
    formData.append("name", obj.name);
    formData.append("matricule", obj.matricule);
    formData.append("color", obj.color);
    formData.append("pays", obj.pays);
    formData.append("guarantee", obj.guarantee);
    formData.append("date", obj.date);
    formData.append("img", obj.img);


    return this.http.post<{ message: string }>(this.carUrl, obj);
  }
  /////// GET ALL CARS //////
  getAllCar() {
    return this.http.get<{ principale: any }>(this.carUrl);
  }
  /////// DELETE CARS //////
  deleteCars(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.carUrl}/${id}`);
  }
  /////// GET CARS BY ID //////
  getCarsById(id: any) {
    return this.http.get<{ info: string, message: any }>(`${this.carUrl}/${id}`);
  }
  /////// UPDATE CARS B ADMIN //////
  updateCars(obj: any) {
    return this.http.put<{ message: string }>(this.carUrl, obj);
  }
  searchCars(obj: any) {
    return this.http.post<{ searchTab: string }>(`${this.carUrl}/search`, obj);
  }
}
