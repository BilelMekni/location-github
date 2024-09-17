import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  generale : any=[
    {title :"CarServ" , description:"In the automotive industry, a platform is a basic structure of a vehicle, consisting of a chassis and certain non-visible parts" , images:"assets/img/icone9.png"},
    {title :"Profile" , description:"In sculpture or painting, a lost profile is a representation of a person from behind, with the face slightly turned to the side, thus hiding their profile." , images:"assets/img/icone2.png"},
    {title :"Automobile" , description:"Light, motorized land vehicle, consisting of a chassis generally on four wheels and used mainly for transporting people." , images:"assets/img/icone3.png"},
    {title :"Technical" , description:"The meaning of TECHNICAL is having special and usually practical knowledge especially of a mechanical or scientific subjec" , images:"assets/img/icone4.png"},
    {title :"Clients" , description:"A customer is a person or entity that purchases a good or service offered by a business. Its meaning may differ depending on the domain" , images:"assets/img/icone6.png"},
    {title :"Services" , description:"A service activity is essentially characterized by the provision of a technical or intellectual service." , images:"assets/img/icone7.png"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
