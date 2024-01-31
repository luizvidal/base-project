import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainTitleAndImageComponent } from './components/main-title-and-image/main-title-and-image.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainTitleAndImageComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
  ],
  template: `<app-header />
    <div class="container">
      <app-main-title-and-image />
      <app-section-3 />
      <app-section-2 />
      <app-section-4 />
      <app-footer />
    </div> `,
  styles: `
    .container {
      height: calc(100vh - 80px);
      overflow: scroll;
      overflow-x: hidden;
    }
  `,
})
export default class HomeComponent {}
