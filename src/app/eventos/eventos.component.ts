import { EventosService } from './eventos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from './evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos$:Observable<any[]> ;
  
  constructor(private servicoEvento:EventosService) {

    this.eventos$ = servicoEvento.getAll();
    
   }

   

  ngOnInit(): void {
  }
  

}
