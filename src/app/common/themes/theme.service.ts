import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<ThemeType>('lara-light-blue');

  public theme = this._theme.asReadonly();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: ThemeType) {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
      this._theme.set(theme);
      localStorage.setItem('theme', theme);
    }
  }

  loadTheme() {
    const theme = localStorage.getItem('theme') as ThemeType;
    if (theme) {
      this.switchTheme(theme);
    }
  }
}

type ThemeType = 'lara-dark-blue' | 'lara-light-blue';
