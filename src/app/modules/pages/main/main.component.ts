import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cat: string = 'agriculture';

  constructor() { }

  ngOnInit(): void {
  }

  setCategory(val: string) : void {
    switch (val) {
      case 'agriculture':
        this.cat = val;
        break;
      case 'plastic':
        this.cat = val;
        break;
      case 'tech':
        this.cat = val;
        break;
      default:
        this.cat = 'agriculture';
        break;
    }
  }
}
