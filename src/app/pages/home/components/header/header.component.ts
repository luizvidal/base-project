import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { BreakpointService } from '@app/common/services/breakpoint.service';
import { ButtonComponent } from '@components/button/button.component';
import { LinkComponent } from '@components/link/link.component';
import { LogoComponent } from '@components/logo/logo.component';

import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LogoComponent, LinkComponent, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @ViewChildren(LinkComponent)
  private readonly _links!: QueryList<LinkComponent>;
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;
  protected sidebarVisible = false;

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }

  openOverlay(link: LinkComponent) {
    this.closeOpennedOverlays();
    () => link.op.show.call;
  }

  closeOpennedOverlays() {
    this._links.forEach((link) => link.op.hide());
  }
}
