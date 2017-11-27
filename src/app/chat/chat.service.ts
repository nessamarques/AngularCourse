import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable()
export class ChatService {

  private usuario: string = '';
  private logTime: Date = new Date();
  private serverURL: string = 'http://172.24.30.24:3000';
  public server: any;

  get nomeUsuario(): string {
    return this.usuario;
  }

  get getLogTime(): Date{
    return this.logTime;
  }

  constructor() { 

    if(!localStorage.getItem('nome')){
      this.usuario = prompt("Qual é o seu nome?");
      this.logTime = new Date();
    }
    else{
      this.usuario = localStorage.getItem('nome');
      //this.logTime = new Date(); //sessionStorage.getItem('logTime'));
    }

    localStorage.setItem('nome', this.usuario);
    //sessionStorage.setItem('logTime', this.logTime);

    this.server = io(this.serverURL);

  }

}
