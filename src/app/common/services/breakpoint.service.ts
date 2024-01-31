import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject, signal } from '@angular/core';
import { BreakpointType } from '@common/types/breakpoint.type';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly _breakpointObserver = inject(BreakpointObserver);

  private _currentBreakpoint = signal<BreakpointType>('DESKTOP');

  public currentBreakpoint = this._currentBreakpoint.asReadonly();

  private _setCurrentBreakpoint() {
    if (this._breakpointObserver.isMatched(['(min-width: 1200px)'])) {
      this._currentBreakpoint.set('DESKTOP');
    }

    if (this._breakpointObserver.isMatched(['(max-width: 1199px)'])) {
      this._currentBreakpoint.set('TABLET');
    }

    if (this._breakpointObserver.isMatched(['(max-width: 600px)'])) {
      this._currentBreakpoint.set('MOBILE');
    }
  }

  public setCurrentBreakpoint() {
    this._setCurrentBreakpoint();
  }
}
