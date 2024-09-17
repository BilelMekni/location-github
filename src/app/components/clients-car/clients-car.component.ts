import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-car',
  templateUrl: './clients-car.component.html',
  styleUrls: ['./clients-car.component.css']
})
export class ClientsCarComponent implements OnInit {
  title : string = "Clients"
  personnes : any =[
    {fname : "Slim", lname:"Mesfar",age:"38 ans", adresse:"Sfax",namevoiture:"BMW SERIE 10",dateachat:"11/12/2023" , images:"assets/img/bm1.jpg"},
    {fname : "Hayet", lname:"Achouri",age:"35 ans", adresse:"La Manouba",namevoiture:"KIA 2024",dateachat:"10/02/2024" , images:"assets/img/kia.jpg"},
    {fname : "Omar", lname:"Hani",age:"26 ans", adresse:"Beja",namevoiture:"Polo6",dateachat:"11/05/2022" , images:"assets/img/polo.jpg"},
    {fname : "Salma", lname:"Sallemi",age:"29 ans", adresse:"La Soukra",namevoiture:"BMW SERIE 12",dateachat:"01/04/2024" , images:"assets/img/bm2.jpg"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
