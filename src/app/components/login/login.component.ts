import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title : string = "login";
  loginForm:FormGroup;
  path :string;
  errorMsg : any;
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";


  constructor(private formBuilder : FormBuilder , private router : Router , private clientService : ClientService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required , Validators.email]],
      password:["",[Validators.required , Validators.pattern(this.pwdPattern)]],
    })
  }


  //// Button Creat Account ////
  creatAccount(){
    this.router.navigate(["signupClients"]);
  }
    //// Login ////
    login(){
      this.clientService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log("Here response after login ", response);
          if (response.msg != "2") {
            // message error
            this.errorMsg = "Please check Email/Pwd";
          } else {
            // localStorage.setItem("connectedId")
            localStorage.setItem("connectedLocation",response.manager.id);
            if (response.manager.role == "clients") {
              this.router.navigate(["espaceClients"]);
            } else {
              this.router.navigate(["espaceAdmin"]);
            }
          }
  
        }
      );
    }
  
    }



