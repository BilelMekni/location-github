import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-car',
  templateUrl: './services-car.component.html',
  styleUrls: ['./services-car.component.css']
})
export class ServicesCarComponent implements OnInit {
  title : string = "Services"
jobs : any= [
  {nameservice:"Administrative Department" , taille:"20 People" , horaire:"5 days/7 days", enligne:"No"},
  {nameservice:"Informatic service" , taille:"12 People" , horaire:"5 days/7 days",enligne:"Yes"},
  {nameservice:"Customer service" , taille:"4 People" , horaire:"24 hours/24 hours",enligne:"No"},
  {nameservice:"After sales service" , taille:"10 People" , horaire:"7 days/7 days",enligne:"No"}



]
  constructor() { }

  ngOnInit() {
  }

}
