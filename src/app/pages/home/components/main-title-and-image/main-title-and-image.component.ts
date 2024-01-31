import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { BreakpointService } from '@common/services/breakpoint.service';

@Component({
  selector: 'app-main-title-and-image',
  standalone: true,
  imports: [NgClass],
  template: `<div
    class="w-full flex"
    [ngClass]="{ 'flex-column': currentBreakpoint() != 'DESKTOP' }"
  >
    <div class="w-full" style="z-index: -1">
      <div
        class="h-30rem flex flex-column justify-content-center align-items-start"
        [ngClass]="{
          'h-20rem px-3 gap-5 pl-5-percent': currentBreakpoint() != 'DESKTOP',
          'gap-7 pl-30-percent': currentBreakpoint() == 'DESKTOP'
        }"
      >
        <h1
          class="font-bold"
          [class]="
            currentBreakpoint() == 'DESKTOP'
              ? 'text-4xl'
              : 'text-2xl text-center'
          "
        >
          Transferência internacional com o
          <span class="text-primary">menor preço</span> e
          <span class="text-primary">envio rápido</span>
        </h1>

        <div class="flex flex-column gap-2">
          @for(item of data(); track $index) {
          <p
            class="text-base flex align-items-center gap-2 font-semibold text-color-secondary"
          >
            <i class="pi pi-check text-primary font-semibold"></i>
            {{ item }}
          </p>
          }
        </div>
      </div>
    </div>
    <div
      class="w-full bg-no-repeat bg-center bg-cover"
      style="
      background-image: url('assets/images/common/woman-laptop.jpg');
      z-index: -1;
    "
      [ngClass]="{
        'h-20rem px-3 gap-5': currentBreakpoint() != 'DESKTOP',
        'h-30rem gap-7': currentBreakpoint() == 'DESKTOP'
      }"
    ></div>
  </div> `,
  styles: `
    .pl-30-percent {
      padding-left: 30% !important;
    }

    .pl-5-percent {
      padding-left: 5%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTitleAndImageComponent implements OnInit {
  private readonly _breakpointService = inject(BreakpointService);
  protected readonly currentBreakpoint =
    this._breakpointService.currentBreakpoint;

  protected readonly data = signal([
    'Pagamento com Pix',
    'Envio de Euro e Libra em minutos',
    'Empresa brasileira com atendimento em português',
  ]);

  ngOnInit(): void {
    this._breakpointService.setCurrentBreakpoint();
  }
}
