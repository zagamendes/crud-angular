import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.css']
})
export class MensagemErroComponent implements OnInit {
  @Input() mensagemErro: String;
  @Input() mostraErro: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
