import { Component } from '@angular/core';
import {SocketService} from "../../ang-services/socket/stomp";
import {Information} from "../../and-models/Information";

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: [ './info-page.component.css' ]
})
export class InfoPageComponent {
  informationArray : Information[] = [new Information()];
  socketService : SocketService;
  newInformation : Information;

  constructor(socketService : SocketService)
  {
    this.newInformation = new Information();
    this.socketService = socketService;
    socketService.setInformationHandler((information) => {
      this.informationArray = information;
    });
  }

  /**
   * Send new information on server.
   */
  addInformation():void
  {
    this.socketService.sendInformation(this.newInformation);
    this.newInformation = new Information();
  }
}
