import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink, OverlayPanelModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() label = '';
  @Input() routerLink = '';
  @Input() overlay = false;
  @ViewChild('overlayPanel') op!: OverlayPanel;
}
