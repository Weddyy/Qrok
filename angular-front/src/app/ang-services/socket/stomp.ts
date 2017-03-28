import {Injectable} from "@angular/core";
import { StompService } from 'ng2-stomp-service';

@Injectable()
export class SocketService {
  stomp: StompService;

  /**
   * Stomp configuration.
   * @param {object} config: a configuration object.
   *                 {host:string} websocket endpoint
   *                 {headers?:Object} headers (optional)
   *                 {heartbeatIn?: number} heartbeats out (optional)
   *                 {heartbeatOut?: number} heartbeat in (optional)
   *                 {debug?:boolean} debuging (optional)
   *                 {recTimeout?:number} reconnection time (ms) (optional)
   */

  private wsConf = {
    host:'http://localhost:8080/registration_socket',
    debug:true
  };

  constructor(stomp: StompService) {
    stomp.configure(this.wsConf);
    stomp.startConnect().then(() => {
      this.connectToChanel()
    });

    this.stomp = stomp;
  }

  private connectToChanel(){
    this.stomp.subscribe("/socket/getUsers",this.response);
  };

  public response = (data) => {
    console.log(data)
  }
}
