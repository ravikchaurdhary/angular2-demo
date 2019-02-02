import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  @Input('childData')
  myMessage : string;	
  @Input('childData1')
  myMessage1 : string;	


  constructor() { }

  ngOnInit() {
    console.log("Hero component called");
  }

}
