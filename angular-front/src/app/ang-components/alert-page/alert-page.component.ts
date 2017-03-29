import { Component } from '@angular/core';
import {SocketService} from "../../ang-services/socket/stomp";
import {Alert} from "../../and-models/Alert";

@Component({
  selector: 'alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: [ './alert-page.component.css' ]
})
export class AlertPageComponent {
  socketService : SocketService;
  newAlert : Alert;
  public alertList : Alert[] = [];

  constructor(socketService : SocketService)
  {
    this.socketService = socketService;
    this.newAlert = new Alert();

    socketService.setAlertHandler((alerts) => {
      this.alertList = alerts;
    });
  }

  /**
   * Send new alert to server!
   */
  sendAlert() : void{
    this.socketService.sendAlert(this.newAlert);
    this.newAlert = new Alert();
  }

  /**
   * On click close on alert box
   * @param index Alert index
   */
  closeAlert(index : number) : void {
    this.socketService.removeAlert(index);
  }

}
