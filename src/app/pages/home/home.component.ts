import { Component } from '@angular/core';
import { HomeCarouselCardsComponent } from './components/home-carousel-cards/home-carousel-cards.component';
import {
  HomeFooterComponent
} from './components/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeInfoCardsComponent } from './components/home-info-cards/home-info-cards.component';
import { HomeTabPanelComponent } from './components/home-tab-panel/home-tab-panel.component';
import { HomeTitleAndImageComponent } from './components/home-title-and-image/home-title-and-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeTitleAndImageComponent,
    HomeCarouselCardsComponent,
    HomeTabPanelComponent,
    HomeInfoCardsComponent,
    HomeFooterComponent,
  ],
  template: `<app-header />
    <div class="container">
      <app-home-title-and-image />
      <app-home-carousel-cards />
      <app-home-tab-panel />
      <app-home-info-cards />
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
