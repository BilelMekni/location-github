import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-car',
  templateUrl: './technical-car.component.html',
  styleUrls: ['./technical-car.component.css']
})
export class TechnicalCarComponent implements OnInit {
  title: string = "Technical"
  technical : any =[
    {fname:"Ali" ,lname:"Hasni" ,description:"Tech Principale" , age:"30", mobile:"25100100" , experience:"12" , adresse:"Bizerte",images:"assets/img/testimonial-2.jpg"},
    {fname:"Basem" , lname:"Nasraoui",description:"Tech Senior" , age:"25", mobile:"23456789" , experience:"8" , adresse:"Tunis",images:"assets/img/testimonial-3.jpg"},
    {fname:"Amel" , lname:"Masouadi",description:"Tech Junior" , age:"22", mobile:"52145300" , experience:"6" , adresse:"Ezzahra ben arous",images:"assets/img/testimonial-1.jpg"},
    {fname:"Karima" , lname:"Alouani",description:"Tech Junior" , age:"20", mobile:"20888000" , experience:"3" , adresse:"Rades Ben arous",images:"assets/img/testimonial-4.jpg"}
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
