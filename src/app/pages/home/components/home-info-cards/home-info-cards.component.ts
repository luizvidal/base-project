import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';

@Component({
  selector: 'app-home-info-cards',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home-info-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoCardsComponent {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  cards = [
    {
      icon: 'pi pi-percentage',
      title: 'Taxas até 8 vezes menores que os bancos',
      content:
        'Além dos custos baixos, você não precisa falar com gerentes nem lidar com a burocracia bancária.',
    },
    {
      icon: 'pi pi-lock',
      title: 'Segurança que o seu dinheiro vai chegar',
      content:
        'Seguimos protocolos rígidos para garantir que sua transferência chegue de forma segura e rápida.',
    },
    {
      icon: 'pi pi-thumbs-up-fill',
      title: 'Plataforma intuitiva e fácil de usar',
      content:
        'Qualquer pessoa pode fazer sua transferência sozinha e 100% online.',
    },
  ];

  ngOnInit() {
    this._breakpointService.setCurrentBreakpoint();
  }

  get isDesktop() {
    return this.currentBreakpoint() == 'DESKTOP';
  }

  get isTablet() {
    return this.currentBreakpoint() == 'TABLET';
  }

  get isMobile() {
    return this.currentBreakpoint() == 'MOBILE';
  }
}
