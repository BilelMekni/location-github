import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
 
  actualDate : any;
  constructor() { }

  ngOnInit() {
    this.actualDate = new Date();
    
  }

}