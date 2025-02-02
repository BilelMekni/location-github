import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title : string = "contact cars";
  contactForm : FormGroup;

  constructor(private formBuilder : FormBuilder , private contactService : ContactService ,
    private router : Router
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group(
      {
        name : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
        email : ["",[Validators.required , Validators.email]],
        phone : ["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
        message : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(1000)]]
      }
    )
  }
  contact(){
    this.contactService.addContact(this.contactForm.value).subscribe(
      (response)=>{
        console.log("Here contact by clients",response);
        
      }
    )
    this.router.navigate([""]);
  }
}
