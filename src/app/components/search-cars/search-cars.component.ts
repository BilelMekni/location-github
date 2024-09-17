import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  title : string = "search cars"
  searchForm : FormGroup;
  searche : any=[];

  constructor(private formBuilder : FormBuilder , private router : Router ,
    private carService : CarService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        pays :["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
        price : ["",[Validators.required]],

      }
    )
  }
  //// BUTTON SEARCH CARS ////
  searchCars(){
    this.carService.searchCars(this.searchForm.value).subscribe(
      (data)=>{
        this.searche = data.searchTab;
        console.log("here search cars",this.searche);
        
      }
    )
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your search cars has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
