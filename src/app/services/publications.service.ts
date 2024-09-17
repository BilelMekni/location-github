import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  publUrl: string = "http://localhost:3008/publications"

  constructor(private http: HttpClient) { }
  /// Add Publications ///
  addPublications(obj: any) {
    return this.http.post<{ message: string, isAdded: boolean }>(this.publUrl, obj);
  }
  /// Get Publications By Agregate ///
  getPublications() {
    return this.http.get<{ publicite: any }>(`${this.publUrl}/all`);
  }
  /// Get Publications By ID Clients ///
  getPublicationsById(id:any){
    return this.http.get<{produit: string}>(`${this.publUrl}/${id}`);
  }
    /// Delete Publications Clients ///
    deletePublications(id : any){
      return this.http.delete<{ isDeleted : boolean}>(`${this.publUrl}/${id}`);
    }




}
