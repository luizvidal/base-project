import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [TabViewModule, DividerModule, ButtonComponent],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section2Component {}
