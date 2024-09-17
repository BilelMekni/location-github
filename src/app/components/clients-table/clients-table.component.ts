import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {
  title :string ="client table";
  client : any = {};
  pageOfItems: Array<any>;


  constructor(private clientService: ClientService , private router : Router) { }

  ngOnInit() {
    this.clientService.getAllClient().subscribe(
      (response)=>{
        this.client = response.client;
      }
    )
  }
  /// Button Delete /////
  deleteClients(id : any){
    this.clientService.deleteClients(id).subscribe(
      (data) =>{
        console.log("here clients after delete",data);
        this.clientService.getAllClient().subscribe(
          (response) =>{
           this.client = response.client;
          }
        )
        
      }
    )
      Swal.fire({
        title: 'Delete Clients!',
        text: 'Delete With Success.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    

  }
  //// Pagination /////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
