import { Observable, Subscription } from 'rxjs';
import { EventosService } from './../eventos/eventos.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evento } from '../eventos/evento';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formularioSubmetido:boolean = false;
  
  observableEvento:Observable<any>;
  @ViewChild('form') form:NgForm;
  
  evento:Evento = new Evento();
  

  
  constructor(private rotaAtual:ActivatedRoute,private  servicoEvento:EventosService, private redirecionador:Router) {
    rotaAtual.params.subscribe(paramentros=>{
      if(paramentros["id"]){
        this.observableEvento = servicoEvento.getEventoById(paramentros["id"]);
        this.observableEvento
        .pipe(take(1))
        .subscribe(auxEvento=>{
          this.evento = auxEvento;
          
        })
      }

    })    


  }
  ngOnInit(): void {
    
  }

  buscaCep(cep,form){
    console.log(cep);
    
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta=>resposta.json())
    .then(dados=>{
      form.form.patchValue({
        "endereco": { 
          "rua": dados.logradouro, 
          "bairro": dados.bairro, 
          "cidade": dados.localidade, 
          "estado": dados.uf 
        } 

      })
      
    });
    
  }

  onSubmit(form){
    if(form.value.id==""){

      this.servicoEvento.salvarEvento(this.evento)
      .then(_=>{
        this.limpaCampo(form)
        console.log("salvo");
      })
      .catch(error=>console.log(error));
      

    }else{
      

      this.servicoEvento.atualizaEvento(this.evento)
      

    }

    

  }

  isCampoValido(campo){
    return campo.invalid && campo.touched;
  }

  limpaCampo(form){
    
    
    form.form.controls.titulo.touched=false;
    form.form.controls.tags.touched= false;

    this.evento = new Evento();

    
  }


}
