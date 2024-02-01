import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';
import { ButtonComponent } from '@components/button/button.component';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';


@Component({
  selector: 'app-home-tab-panel',
  standalone: true,
  imports: [TabViewModule, DividerModule, ButtonComponent, NgClass],
  templateUrl: './home-tab-panel.component.html',
  styleUrl: './home-tab-panel.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTabPanelComponent {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  ngOnInit() {
    this._breakpointService.setCurrentBreakpoint();
  }
}
