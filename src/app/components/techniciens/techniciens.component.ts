import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techniciens',
  templateUrl: './techniciens.component.html',
  styleUrls: ['./techniciens.component.css']
})
export class TechniciensComponent implements OnInit {
  @Input() inputTech:any;

  constructor() { }

  ngOnInit() {
  }

}
