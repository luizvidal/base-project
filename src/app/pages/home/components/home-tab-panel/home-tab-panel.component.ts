import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';
import { ButtonComponent } from '@components/button/button.component';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-home-tab-panel',
  standalone: true,
  imports: [TabViewModule, DividerModule, ButtonComponent, NgClass],
  templateUrl: './home-tab-panel.component.html',
  styleUrl: './home-tab-panel.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTabPanelComponent {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  protected howSendData = signal([
    {
      id: 1,
      title: 'Informe os dados da conta no exterior',
      content: 'Pode ser no seu nome, de outra pessoa ou de uma empresa.',
    },
    {
      id: 2,
      title: 'Faça um PIX ou uma TED',
      content:
        'Transfira o valor em reais para a gente, nós convertemos e enviamos para o exterior. Identificamos o seu pagamento em até 15 minutos',
    },
    {
      id: 3,
      title: 'O dinheiro chega no destino em até 1 dia útil',
      content:
        ' Para operações de Euro ou Libra, o prazo é de apenas 15 minutos, na maioria dos casos',
    },
  ]);

  protected howRecieveData = signal([
    {
      id: 1,
      title: 'Selecione a moeda e motivo do recebimento',
      content:
        'Reduzimos a burocracia, pedindo o mínimo de informações e documentos necessários para a sua segurança.',
    },
    {
      id: 2,
      title: 'Compartilhe com seu pagador os dados bancários que vamos gerar',
      content:
        'Assim, qualquer pessoa ou empresa no mundo poderá enviar dinheiro para você.',
    },
    {
      id: 3,
      title: 'O dinheiro chega ao Brasil, em 90% dos casos, em até 1 dia útil',
      content:
        'Daí é só pedir o resgate dos valores para a sua conta bancária. O dinheiro deve cair na sua conta em até 15 minutos.',
    },
  ]);

  ngOnInit() {
    this._breakpointService.setCurrentBreakpoint();
  }
}
