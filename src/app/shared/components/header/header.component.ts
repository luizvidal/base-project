import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LogoComponent, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ViewChildren(LinkComponent) links!: QueryList<LinkComponent>;

  openOverlay(link: LinkComponent) {
    this.closeOpennedOverlays();
    () => link.op.show.call;
  }

  closeOpennedOverlays() {
    this.links.forEach((link) => link.op.hide());
  }

  ngAfterViewInit() {}
}
