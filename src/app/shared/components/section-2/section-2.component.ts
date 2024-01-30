import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { BreakpointService } from '../../../common/services/breakpoint.service';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [TabViewModule, DividerModule, ButtonComponent, NgClass],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section2Component {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  ngOnInit() {
    this._breakpointService.setCurrentBreakpoint();
  }
}
