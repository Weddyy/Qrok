import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from "./ang-components/ang-components";
import { StompService } from 'ng2-stomp-service';
import { SocketService } from "./ang-services/ang-services";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [StompService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
