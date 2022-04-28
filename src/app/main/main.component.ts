import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  _cmp: String = "AgriExport";

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  // Show company summary
  showSummary(cmp: String){

    this._cmp = cmp;
    console.log(this._cmp);
  }
}
