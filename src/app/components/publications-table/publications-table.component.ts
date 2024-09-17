import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications-table',
  templateUrl: './publications-table.component.html',
  styleUrls: ['./publications-table.component.css']
})
export class PublicationsTableComponent implements OnInit {
  title : string = "Publications Clients"
  publications : any={};

  constructor(private publicationsService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.publicationsService.getPublications().subscribe(
      (data)=>{
        this.publications = data.publicite;
        console.log("Here publications clients",this.publications);
        
      }
    )
  }

  //// Delete Publications Clients
  deletePublications(id:any){
    this.publicationsService.deletePublications(id).subscribe(
      (data)=>{
        console.log("Here data publications after delete",data);
        this.publicationsService.getPublications().subscribe(
          (data=>{
            this.publications = data.publicite;
          })
        )
        
        
      }
    )
  }
}
