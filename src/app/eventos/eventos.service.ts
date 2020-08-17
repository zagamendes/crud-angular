import { Injectable} from '@angular/core';
import { Evento } from './evento';
import { rejects } from 'assert';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EventosService {
  

  constructor(private db:AngularFireDatabase) { }

  getEventoById(id){
    return this.db.object(`eventos/${id}`)
    .valueChanges()
    
     
    
    
    
  }

  async salvarEvento(evento:Evento){
    try{
      
      let resultado = this.db.list("eventos").push(evento)
      
      this.db.object(`eventos/${resultado.key}`).update({id:resultado.key});
      
      return "Sucesso";
    }catch(erro){
      return erro;
    }
    

  }

  atualizaEvento(evento:Evento){
    this.db.object(`eventos/${evento.id}`)
    .update(evento);
  }


  getAll(){
    return this.db.list("eventos")
    .valueChanges()
    
    
    

  }

  async remove(id:string){
    try{
      this.db.object(`eventos/${id}`).remove();
      return "Exclu[ido com sucesso!";
    }catch(error){
      return error;
    }
  }
}
