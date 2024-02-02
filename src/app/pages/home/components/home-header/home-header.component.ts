import {
  CommonModule,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { BreakpointService } from '@app/common/services/breakpoint.service';
import { ChangeThemeButtonComponent } from '@common/components/change-theme-button/change-theme-button.component';
import { ButtonComponent } from '@components/button/button.component';
import { ImgComponent } from '@components/img/img.component';
import { LinkComponent } from '@components/link/link.component';
import { LogoComponent } from '@components/logo/logo.component';

import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LogoComponent,
    LinkComponent,
    SidebarModule,
    ImgComponent,
    CommonModule,
    NgComponentOutlet,
    NgTemplateOutlet,
    ChangeThemeButtonComponent,
  ],
  templateUrl: './home-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderComponent implements OnInit {
  @ViewChildren(LinkComponent)
  private readonly _links!: QueryList<LinkComponent>;
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;
  protected sidebarVisible = false;

  protected readonly linkData = signal<LinkDataInterface[]>([
    {
      title: 'Pessoa Física',
      children: [
        { label: 'Como enviar' },
        { label: 'Como receber' },
        { label: 'App' },
      ],
    },
    {
      title: 'Pessoa Jurídica',
      children: [
        { label: 'Conheça a solução PJ' },
        { label: 'Gerador de Invoice' },
        { label: 'Soluções para Startups' },
        { label: 'Serviços Paralegais' },
        { label: 'Remessa Pay' },
        { label: 'Importação e exportação' },
      ],
    },
    {
      title: 'Cotações',
      children: [
        {
          src: 'countries-currency/usd.svg',
          label: 'USD Dólar americano',
        },
        {
          src: 'countries-currency/brl.svg',
          label: 'BRL Real brasileiro',
        },
        {
          src: 'countries-currency/ars.svg',
          label: 'ARS Peso argentino',
        },
        {
          src: 'countries-currency/aud.svg',
          label: 'AUD Dólar australiano',
        },
        {
          src: 'countries-currency/cad.svg',
          label: 'CAD Dólar canadense',
        },
      ],
    },
    {
      title: 'Ajuda',
      children: [{ label: 'Central de ajuda' }, { label: 'Códigos SWIFT/BIC' }],
    },
    {
      title: 'Parcerias e APIs',
      children: [{ label: 'Seja um parceiro' }, { label: 'Use nossas APIs' }],
    },
    { title: 'Blog', children: [] },
  ]);

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }

  openOverlay(link: LinkComponent) {
    this.closeOpennedOverlays();
    () => link.op.show.call;
  }

  closeOpennedOverlays() {
    this._links.forEach((link) => link.op.hide());
  }
}

interface LinkDataInterface {
  title: string;
  children: { label: string; src?: string }[];
}
