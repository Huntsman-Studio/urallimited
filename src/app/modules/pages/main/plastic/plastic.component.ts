import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plastic',
  templateUrl: './plastic.component.html',
  styleUrls: ['./plastic.component.scss']
})
export class PlasticComponent implements OnInit {

  plastic: string = 'namli';

  constructor() { }

  ngOnInit(): void {
  }

  setPlastic(): void {
    this.plastic = (this.plastic == 'namli') ? 'nurpet' : 'namli';
  }

}
