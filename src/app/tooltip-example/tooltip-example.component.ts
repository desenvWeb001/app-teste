import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public visible = false;
  public mouse = { x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }

}
