import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { BreakpointService } from '../../../common/services/breakpoint.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  protected readonly currentYear = signal(new Date().getFullYear());
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }
}
