import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})
export class Bind1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name= "Евгений";

}
