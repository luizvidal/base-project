import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section1Component {}
