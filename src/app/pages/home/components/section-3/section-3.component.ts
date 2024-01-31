import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section3Component {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint = this._breakpointService.currentBreakpoint;

  cards = [
    {
      icon: 'pi pi-comments',
      title: 'Enviar dinheiro para parentes ou uma conta sua no exterior',
      content:
        'Para famílias transferirem dinheiro para quem está fora do Brasil.',
    },
    {
      icon: 'pi pi-money-bill',
      title: 'Receber salários ou pagamentos do exterior',
      content:
        'Para pessoas que trabalham para empresas estrangeiras e buscam praticidade. ',
    },

    {
      icon: 'pi pi-google',
      title: 'Google AdSense e plataformas digitais',
      content:
        'Praticidade para criadores receberem do YouTube, Facebook e outros.',
    },
    {
      icon: 'pi pi-wallet',
      title: 'Investir no exterior e receber seus ganhos',
      content: 'Diversifique seus investimentos em mercados internacionais. ',
    },
    {
      icon: 'pi pi-truck',
      title: 'Importar e exportar produtos ou serviços',
      content: 'Pequenas cargas e contratação de serviços digitais.',
    },
    {
      icon: 'pi pi-heart-fill',
      title: 'Startups e grandes volumes de dinheiro',
      content:
        'Receba aportes, empréstimos e valores elevados com condições exclusivas.',
    },
  ];

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    this._breakpointService.setCurrentBreakpoint();
  }
}
