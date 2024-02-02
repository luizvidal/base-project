import { inject } from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';

export abstract class ResponsiveComponent {
  private readonly _breakpointService = inject(BreakpointService);
  public readonly currentBreakpoint = this._breakpointService.currentBreakpoint;

  constructor() {
    this._breakpointService.setCurrentBreakpoint();
  }

  public get isDesktop() {
    return this.currentBreakpoint() == 'DESKTOP';
  }

  public get isTablet() {
    return this.currentBreakpoint() == 'TABLET';
  }

  public get isMobile() {
    return this.currentBreakpoint() == 'MOBILE';
  }
}
