import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-car',
  templateUrl: './profile-car.component.html',
  styleUrls: ['./profile-car.component.css']
})
export class ProfileCarComponent implements OnInit {
  title : string = "Profile car serv";

profile : any =[
  {name :"Bilel Mekni", description:"Manager" , experience:"20 years" , adresse:"La Soukra" , tel:"56279491" , images:"assets/img/team-1.jpg"},
  {name :"Hafdh Bouazizi", description:"Assistant Director" , experience:"10 years" , adresse:"Ariana" , tel:"20100200" , images:"assets/img/team-2.jpg"},
  {name :"Mohamed Ali", description:"An accountant" , experience:"6 years" , adresse:"Ben Arous" , tel:"52478563" , images:"assets/img/team-3.jpg"},
  {name :"Karim Jaffeli", description:"IT department" , experience:"3 years" , adresse:"La Manouba" , tel:"41589630" , images:"assets/img/team-4.jpg"},
  {name :"Wiem Zammali", description:"HR Recruitment" , experience:"4 years" , adresse:"Beb Elkhadhra" , tel:"53177586" , images:"assets/img/p4.png"},
  {name :"Nihed Mekni", description:"Finance" , experience:"3 years" , adresse:"ElMourouj" , tel:"96532100" , images:"assets/img/p6.jpg"},
  {name :"Hela Hamdi", description:"Purchase Service" , experience:"3 years" , adresse:"Borj Louzir" , tel:"41500030" , images:"assets/img/p5.webp"},
  {name :"Naima Heni", description:"Welcome service" , experience:"3 years" , adresse:"Ariana" , tel:"23561330" , images:"assets/img/p7.jpg"},
  {name :"Karima Mosaab", description:"After sales service" , experience:"3 years" , adresse:"Ariana" , tel:"23561330" , images:"assets/img/p8.jpg"},
  {name :"Amine Kasmi", description:"Technician" , experience:"3 years" , adresse:"Ariana" , tel:"23561000" , images:"assets/img/p12.webp"},
  {name :"Naziha Haji", description:"Security Department" , experience:"1 years" , adresse:"Megrine" , tel:"56230147" , images:"assets/img/p9.jpg"},
  {name :"Mohamed Salah", description:"Security Department" , experience:"2 years" , adresse:"Rades" , tel:"50363636" , images:"assets/img/p11.jpg"}




]
  constructor() { }

  ngOnInit() {
  }

}
