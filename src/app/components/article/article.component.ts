import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@Input() inputArticle:any;
  constructor() { }

  ngOnInit() {
  }
  priceStyle(price1 : any , price2: any){
    let result;
    if (price1 > price2) {
      result = 1;
    } else if (price1 < price2) {
      result = -1;
    }else {
      result = 0;
    }
    return result;
  }

}
