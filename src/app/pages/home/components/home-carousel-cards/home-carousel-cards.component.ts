import { Component } from '@angular/core';
import { ResponsiveComponent } from '@common/components/responsive/responsive.component';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-home-carousel-cards',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home-carousel-cards.component.html',
  styles: `
    :host ::ng-deep {
      button.p-ripple.p-element.p-carousel-prev.p-link,
      button.p-ripple.p-element.p-carousel-next.p-link {
        color: var(--primary-color);
      }
    }
  `,
})
export class HomeCarouselCardsComponent extends ResponsiveComponent {
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
      breakpoint: '1980px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1200px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
