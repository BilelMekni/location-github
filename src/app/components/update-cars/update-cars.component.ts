import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-cars',
  templateUrl: './update-cars.component.html',
  styleUrls: ['./update-cars.component.css']
})
export class UpdateCarsComponent implements OnInit {
  title : string = "update cars by admin";
  updateForm : FormGroup;
  id :any;
  auto : any;

  constructor(private formBuilder : FormBuilder , private carService : CarService , private router : Router ,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      matricule: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      color: ["", [Validators.required]],
      pays: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ["", [Validators.required]],
      guarantee: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      date: ["", [Validators.required]]


    })
    this.carService.getCarsById(this.id).subscribe(
      (data)=>{
        console.log("here data by id",data);
        this.auto = data.info;
        this.updateForm.patchValue(this.auto);
        
      }
    )
  }
  /// BUTTON UPDATE CARS ///
  updateCar(){
    this.updateForm.value._id = this.id;
    console.log("here update from response",this.updateForm.value);
    this.carService.updateCars(this.updateForm.value).subscribe(
      (data)=>{
        console.log("here data after update",data);
        this.router.navigate(["carTable"]);
        
      }
    )
    Swal.fire({
      title: "Update Successfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    
  }

}
