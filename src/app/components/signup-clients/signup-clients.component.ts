import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './../../validators/mustMatch';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-clients',
  templateUrl: './signup-clients.component.html',
  styleUrls: ['./signup-clients.component.css']
})
export class SignupClientsComponent implements OnInit {
title : string = "Signup Clients"
signupForm : FormGroup;
imagePreview : any;
path : string;
pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";

  constructor(private formBuilder : FormBuilder, private router :Router ,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      lastName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      date:["",[Validators.required]],
      email:["",[Validators.required , Validators.email]],
      password:["",[Validators.required , Validators.pattern(this.pwdPattern)]],
      confPassword:[""],
      phone:["",[Validators.required , Validators.minLength(8), Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      gender:[""],
      img:[""],
    },{
      validators:MustMatch("password","confPassword")
    } 

    )
  }
  /// Button Signup ////
  signupClients(){
    let user = this.signupForm.value;
    user.role = "clients";
    console.log("here object",this.signupForm.value);
    let role = (this.path == "/signupClients")? "admin" : "clients";
    this.signupForm.value.role = role;
    this.clientService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response)=>{
        console.log("here after signup clients",response);
        
      }
    );
    Swal.fire({
      icon: 'error',
      title: 'Wellcome...',
      text: 'Registration with success',
      
    })

  }
  //// Button Login /////
  login(){
    this.router.navigate(["login"]);
    Swal.fire("Hellow Login!");
  }
   //***conf image *///*/
   onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  
  }


}
