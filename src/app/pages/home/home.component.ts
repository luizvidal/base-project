import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Section1Component } from '../../shared/components/section-1/section-1.component';
import { Section2Component } from '../../shared/components/section-2/section-2.component';
import { Section3Component } from '../../shared/components/section-3/section-3.component';
import { Section4Component } from '../../shared/components/section-4/section-4.component';
import { Section5Component } from '../../shared/components/section-5/section-5.component';
import { Section6Component } from '../../shared/components/section-6/section-6.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
