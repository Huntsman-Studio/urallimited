import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cat: string = 'agriculture';

  constructor(private meta: Meta, private title: Title) {
    // Tags
    this.meta.addTags([
      { name: 'description', content: 'Ural Limited Company is a leading company that represends many companies in Italy, Turkiye, Greece and Albania' },
      { name: 'keywords', content: 'agriculture, plastic, technology' },
      { name: 'robots', content: 'index, follow' }
    ]);

    // Title
    this.title.setTitle('Home');
  }

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
