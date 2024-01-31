import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <p-button
      [id]="id"
      [severity]="severity"
      [rounded]="rounded"
      [outlined]="outlined"
      [label]="label"
      [styleClass]="styleClass"
    >
      <label [for]="id" class="p-button-label cursor-pointer"
        ><ng-content
      /></label>
    </p-button>
  `,
})
export class ButtonComponent {
  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'help'
    | 'danger' = 'primary';
  @Input() id = 'id';
  @Input() rounded = false;
  @Input() outlined = false;
  @Input() label = '';
  @Input() styleClass = '';
}
