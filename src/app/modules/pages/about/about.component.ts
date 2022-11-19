import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    // Tags
    this.meta.addTags([
      { name: 'description', content: 'Ural Limited Company is a leading company that represends many companies in Italy, Turkiye, Greece and Albania' },
      { name: 'keywords', content: 'urallimited, about' },
      { name: 'robots', content: 'about, follow' }
    ]);

    // title
    this.title.setTitle('Contact');
  }

  ngOnInit(): void {
  }

}
