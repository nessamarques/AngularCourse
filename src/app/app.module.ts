import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './chat/sobre/connection.service';
import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { SobreComponent } from './chat/sobre/sobre.component';
import { routing } from "./chat/app.routes";


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    ChatService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }