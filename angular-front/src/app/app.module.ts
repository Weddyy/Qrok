import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoPageComponent,AlertPageComponent } from "./ang-components/ang-components";
import { StompService } from 'ng2-stomp-service';
import { SocketService } from "./ang-services/ang-services";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    AlertPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path : "alert", component:AlertPageComponent},
      {path : "info", component:InfoPageComponent},
      {path : "", redirectTo: "alert", pathMatch: "full"}])
  ],
  providers: [StompService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
