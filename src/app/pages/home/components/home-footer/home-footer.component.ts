import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './home-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterComponent implements OnInit {
  protected readonly currentYear = signal(new Date().getFullYear());
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }
}
