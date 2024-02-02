import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ResponsiveComponent } from '@common/components/responsive/responsive.component';

@Component({
  selector: 'app-home-info-cards',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home-info-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoCardsComponent extends ResponsiveComponent {
  cards = signal<CardInterface[]>([
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
  ]);
}

interface CardInterface {
  icon: string;
  title: string;
  content: string;
}
