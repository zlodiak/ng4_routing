import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  products: string[] = [
    'apples',
    'oranges',
    'bananas'
  ];

 price = '100.45466';

  constructor (private router: Router) {}

  ngOnInit() {
  }



}
