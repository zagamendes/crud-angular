import { RotasEventosModule } from './rotas-eventos/rotas-eventos.module';
import { EventosComponent } from './eventos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [EventosComponent, EventoDetalheComponent],
  imports: [
    CommonModule,
    RotasEventosModule,
    NgxPaginationModule

  ]
})
export class EventosModule { }
