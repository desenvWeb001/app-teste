import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Recebi um click!");
  }
 /*
  onKeyPress(event) {
    console.log((event.target.value.length));
  }*/

}
