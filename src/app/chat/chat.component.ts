import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChatService } from './chat.service';
import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

    public mensagens: Object[] = [];
    public mensagemInserir: string;

    @ViewChild('scrollMe') private scrollContainer: ElementRef;


    constructor(private _chatService: ChatService){
      this._chatService.server.on('messages', m => this.mensagens.push(m));
    }

    ngAfterViewInit(){
      this.scrollToBotton();
    }

    ngAfterViewChecked(){
      this.scrollToBotton();
    }

    private scrollToBotton(): void{
      try{
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
      catch(err){}
    }

    public enviaMensagem(): void {

      let obj = {
        message: this.mensagemInserir,
        author: this._chatService.nomeUsuario
      }

      this._chatService.server.emit("messages", obj);
      this.mensagemInserir = '';
    }

}
