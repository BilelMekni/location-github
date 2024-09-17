import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  id : any;
  connectedLocation : any = {};
  constructor(private adminService : AdminService , private clientService : ClientService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedLocation");
    this.adminService.getAdminById(this.id).subscribe(
      (data)=>{
        this.connectedLocation = data.admin;
        console.log("here admin connected",this.connectedLocation);
        
      }
    )
    this.clientService.getClientById(this.id).subscribe(
      (response)=>{
        this.connectedLocation = response.owner;
        console.log("here clients connected",this.connectedLocation);
        
      }
    )

  }
  /// BUTTON LOGOUT ///
  logOut(){
    localStorage.removeItem("connectedLocation");
    this.router.navigate([""]);
  }

}
