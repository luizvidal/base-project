import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './home-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterComponent {
  protected readonly currentYear = signal(new Date().getFullYear());
}
