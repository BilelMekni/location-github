import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-clents',
  templateUrl: './espace-clents.component.html',
  styleUrls: ['./espace-clents.component.css']
})
export class EspaceClentsComponent implements OnInit {
  title: string = "Customer Area"

  constructor(private router : Router) { }

  ngOnInit() {
  }

  //// Button Publication /////
  publications(){
    this.router.navigate(["publications"]);

  }
  

}
