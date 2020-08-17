import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  obsevableEvento:Observable<any>;
  inscricaoRota:Subscription;
  inscricaoEvento:Subscription;
  id:string;

  constructor(private servicoEvento:EventosService,private rotaAtual:ActivatedRoute,private redirecionador:Router) { 
    this.inscricaoRota = rotaAtual.params.subscribe(parametros=>{
      this.id = parametros["id"];
      
      this.obsevableEvento = servicoEvento.getEventoById(this.id);
      
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.inscricaoRota.unsubscribe();
  }

  excluir(id:string){
    this.servicoEvento.remove(id)
    .then(resultado=>{
      console.log(resultado)
      this.redirecionador.navigate(["eventos"])
    })
    .catch(error=>console.log(error))
  }

}
