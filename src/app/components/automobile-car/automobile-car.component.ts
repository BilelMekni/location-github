import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile-car',
  templateUrl: './automobile-car.component.html',
  styleUrls: ['./automobile-car.component.css']
})
export class AutomobileCarComponent implements OnInit {
  title : string = "Automobile";
  articls :any = [
    {name : "BMW 7 Series: a luxury car grille - Challenges" , description: "NEW. BMW Retouches its 7 Series limousine. The new version adopts an enlarged grille, creating a family resemblance with the Bavarian brand's other high-end model, the large SUV X7." , price1:"350.000.000 DT" ,price2:"400.000.000 DT", images:"assets/img/v1.jpg"},
    {name : "Used car KIA Sorento Hybrid Casablanca KIA USED" , description: "This used KIA Sorento vehicle is located in Casablanca. It was put into circulation for the first time in October 2022 This KIA Sorento is “White” in color, has 11,312 KM on the odometer, and has a power of 9 horsepower tax" , price1:"450.000.000 DT" ,price2:"500.000.000", images:"assets/img/v3.jpg"},
    {name : " Ford Kuga (2023) – a facelift chasing the Escape? " , description:"In the United States, the Ford Escape, the model we know in Europe as the Ford Kuga, has received a facelift, so it's only a matter of time before these cosmetic and technical improvements do not cross the Atlantic." , price1:"500.000.000 DT" ,price2:"600.000.000 dt",images:"assets/img/v5.jpg"},
    {name : "  New Renault Clio 2023 " , description:"Sacrificing to popular trends on the market, the Renault Espace, in circulation since 1983, will swap its minivan character to become a crossover SUV. The brand is announcing a new sixth generation model which will debut in spring 2023" , price1:"450.000.000.000 DT" ,price2:"500.000.000 dt",images:"assets/img/v6.jpg"},
    {name : " Renault Scénic E-Tech IAA 2023 1X7A0344 " , description: "Renault Scénic E-Tech at IAA 2023 September 4, 2023 Personal work Alexander-93" , price1:"400.000.000 DT" ,price2:"500.000.000 dt",images:"assets/img/v7.jpg"},
    {name : " New 2023 BMW 7 Series 740i " , description: "NAV, Sunroof, Heated Seats, Rear Air, Panoramic Roof, Alloy Wheels, PARKING ASSISTANCE PACKAGE, M SPORT PROFESSIONAL PACKAGE. FUEL EFFICIENT 31 MPG Hwy/25 MPG City! Mineral White Metallic exterior and Cognac Veganza interior, 740i trim" , price1:"700.000.000 DT" ,price2:"750.000.000.000 dt",images:"assets/img/v8.jpg"},
    {name : " Pre-Owned 2023 BMW 7 Series 740i " , description: "ONLY 173 Miles! 740i trim, Black Sapphire Metallic exterior and Tartufo Full Merino Leather interior. FUEL EFFICIENT 31 MPG Hwy/25 MPG City! DVDs, ..." , price1:"900.000.000 DT" ,price2:"950.000.000 dt",images:"assets/img/v9.jpg"},
    {name : "2023 BMW G05 in Stuttgart-Vaihingen " , description: "2023 BMW G05 IMG 7715.jpg, 2023 BMW G05 in Stuttgart-Vaihingen. Date, June 16, 2023. Source, Personal work. Author, Alexander-93." , price1:"700.000.000 DT" ,price2:"800.000.000 dt",images:"assets/img/v10.jpg"}


    
  ]

  constructor() { }


  ngOnInit() {
  }

}
