import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  title: string = "Add Car Automobile";
  carForm: FormGroup;
  imagePreview: any;
  id : any;
  auto : any;

  constructor(private formBuilder: FormBuilder , private carService : CarService , private router : Router) { }

  ngOnInit() {
    this.carForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      matricule: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      color: ["", [Validators.required]],
      pays: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ["", [Validators.required]],
      guarantee: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      date: ["", [Validators.required]]


    })
   
  }

//// button add car ////
addCar(){
  this.carService.adCar(this.carForm.value,this.carForm.value.img).subscribe(
    (response)=>{
      console.log("here after add car",response);
      
    }
  )
  this.router.navigate(["espaceAdmin"]);
}


  //***conf image *///*/
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.carForm.patchValue({ img: file });
    this.carForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);

  }

}
