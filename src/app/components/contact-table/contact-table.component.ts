import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  title : string = "contact table";
 contact : any = [];
 pageOfItems: Array<any>;
  constructor(private  contactService : ContactService ) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(
      (response)=>{
        this.contact = response.contact;
        console.log("hre response contact",this.contact);
        
      }
    )
  }
  //// DELETE CONTACT BY ADMIN ////
  deleteContact(id : any){
    this.contactService.deleteContact(id).subscribe(
      (response)=>{
        console.log("Here contact after delete",response);
        this.contactService.getContact().subscribe(
          (data)=>{
            this.contact = data.contact;
          }
        )
        
      }
    )
    Swal.fire({
      title: 'Delete Conatct By ADMIN!',
      text: 'Delete With Success.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  //// Pagination ////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
