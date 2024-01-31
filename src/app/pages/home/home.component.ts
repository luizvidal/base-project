import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
