import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section4Component {
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
}
