import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  title : string = "car table by admin";
  car : any = {};

  constructor(private carService : CarService , private router : Router) { }

  ngOnInit() {
    this.carService.getAllCar().subscribe(
      (data)=>{
        this.car = data.principale;
      }
    )
  }
  /// Button Delete Cars ///
  deleteCars(id :any){
    this.carService.deleteCars(id).subscribe(
      (data)=>{
        console.log("here delete cars admin",data);
        this.carService.getAllCar().subscribe(
          (data)=>{
            this.car = data.principale;
          }
        )
      }
    )
  }

  /// Button Update Cars ///
  updateCars(id :any){
   this.router.navigate([`updateCars/${id}`]);
  }
}
