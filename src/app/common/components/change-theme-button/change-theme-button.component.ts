import {
  Component,
  OnInit,
  computed,
  inject
} from '@angular/core';
import { ThemeService } from '@common/themes/theme.service';
import { ButtonComponent } from '@components/button/button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-change-theme-button',
  standalone: true,
  imports: [ButtonComponent, ButtonModule],
  template: `<app-button
    (click)="changeTheme()"
    [rounded]="true"
    [icon]="icon()"
    [outlined]="true"
  /> `,
})
export class ChangeThemeButtonComponent implements OnInit {
  private readonly _themeService = inject(ThemeService);

  protected readonly theme = this._themeService.theme;

  icon = computed(() =>
    this.theme() == 'lara-light-blue' ? 'pi pi-moon' : 'pi pi-sun'
  );

  changeTheme() {
    if (this.theme() == 'lara-light-blue')
      this._themeService.switchTheme('lara-dark-blue');
    else this._themeService.switchTheme('lara-light-blue');
  }

  ngOnInit(): void {
    this._themeService.loadTheme();
  }
}
