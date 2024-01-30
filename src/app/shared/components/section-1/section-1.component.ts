import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { BreakpointService } from '../../../common/services/breakpoint.service';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section1Component implements OnInit {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint = this._breakpointService.currentBreakpoint;

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }
}
