import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PublicationsService } from './../../services/publications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  title: string = "Publication Clients";
  publicationsForm: FormGroup;
  id: any;
  publications: any = {};
  pub: any;

  constructor(private publicationsService: PublicationsService, private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedLocation")
    this.publicationsService.getPublicationsById(this.id).subscribe(
      (response) => {
        this.pub = response.produit;
      }
    )


  }

  /// Button Add Publications Clients ///
  addPublications() {
    if (this.id) {
      this.publications.clientsId = this.id;
      this.publications.status = "Not Confirmed";
      this.publicationsService.addPublications(this.publications).subscribe(
        (data) => {
          console.log("here data", data);

        }
      )

      // this.router.navigate([""]);
    }
  }

}
