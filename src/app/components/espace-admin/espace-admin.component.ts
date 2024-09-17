import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {
  title: string = "Admin area";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  //// Button Espace Clients ////
  espaceClients() {
    this.router.navigate(["espaceClients"]);
  }
  //// Button Signup Admin ////
  signupAdmin() {
    this.router.navigate(["signupAdmin"]);
  }
  //// Button Admin Table ////
  adminTable() {
    this.router.navigate(["adminTable"]);
  }
    //// Button Add Car ////
publications(){
  this.router.navigate(["publications"]);
}
  //// Button Publications Table ////
  publicationsTable() {
    this.router.navigate(["publicationsTable"]);

  }
  //// Button Add Car ////
  addCar() {
    this.router.navigate(["addCar"]);
  }
  //// Car Table ////
  car() {
    this.router.navigate(["carTable"]);
  }
    //// Contact Table ////
  contactTable(){
    this.router.navigate(["contactTable"]);
  }





}
