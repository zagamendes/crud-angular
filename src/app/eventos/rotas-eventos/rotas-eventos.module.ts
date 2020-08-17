import { EventoDetalheComponent } from './../evento-detalhe/evento-detalhe.component';
import { EventosComponent } from './../eventos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const rotas:Routes =
[
  {path:"eventos",component:EventosComponent, 
    children:
    [
      {path:":id",component:EventoDetalheComponent},

    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports:[RouterModule]

  
})
export class RotasEventosModule { }
