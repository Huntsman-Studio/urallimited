import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {

  view: string = 'agriexport';

  constructor() { }

  ngOnInit(): void {
  }

  setView(val: string): void {
    switch (val) {
      case 'agriexport':
        this.view = 'agriexport';
        break;
      case 'gb':
        this.view = 'gb';
        break;
      case 'leonessa':
        this.view = 'leonessa';
          break;
      case 'omnigear':
        this.view = 'omnigear';
        break;
      default:
        this.view = 'agriexport';
        break;
    }
  }

}
