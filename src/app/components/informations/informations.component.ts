import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
 @Input() inputInfo:any;

  constructor() { }

  ngOnInit() {
  }

}
