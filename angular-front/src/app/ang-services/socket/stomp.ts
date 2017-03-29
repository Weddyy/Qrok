import {Injectable} from "@angular/core";
import { StompService } from 'ng2-stomp-service';
import {Alert} from "../../and-models/Alert";
import {Information} from "../../and-models/Information";

@Injectable()
export class SocketService {
  stomp: StompService;
  mainChanel: any;
  alertHandler :any;
  informationHandler : any;
  alerts : Alert[] = [];
  informations : Information[] = [];

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
    let a : Alert= new Alert();
    a.text = "testText";
    a.severity = 10;
    this.alerts.push(a);

    stomp.configure(this.wsConf);
    stomp.startConnect().then(() => {
      this.connectToChanel()
    });

    this.stomp = stomp;
  }

  /**
   * Connect to main socket chanel
   */
  private connectToChanel(){
    this.mainChanel = this.stomp.subscribe("/socket/main",this.response);
    this.mainChanel = this.stomp.subscribe("/user/socket/main",this.response);
  };

  /**
   * Disconnect from main socket chanel
   */
  private disconnectFromChanel(){
    this.stomp.unsubscribe(this.mainChanel);
  };

  /**
   * Send new alert to server
   * @param alert
   */
  sendAlert(alert : Alert) : void
  {
    this.stomp.send("/socket/sendAlert",alert);
  }

  /**
   * Send new information to server
   * @param information
   */
  sendInformation(information : Information) : void
  {
    this.stomp.send("/socket/sendInformation",information);
  }

  /**
   * Call callback function when get alert message.
   * @param callback
   */
  setAlertHandler(callback: any)
  {
    this.alertHandler = callback;
    this.refreshAlerts();
  }

  /**
   * Call callback function when get information message
   * @param callback
   */
  setInformationHandler(callback : any)
  {
    this.informationHandler = callback;
    this.refreshInformations();
  }

  /**
   * Call when get response from server!
   * @param data
   */
  private response = (data) => {
    this.callHandlers(data);
  };


  private callHandlers (msg : any) {
    //If get array - this is first package from server ( load all information list)
    if(msg instanceof Array) {
      this.informations = msg;
      this.refreshInformations();
    }else
      this.msgParser(msg);
  }

  private msgParser(msg : any) : void
  {
    //if key exist - it's information package
    if(msg.key != null)
    {
      // if information key exist, change it value
      let info : Information = this.informations.find(i => i.key == msg.key);
      if(info!=null)
        info.value = msg.value;
      else
        this.informations.push(msg);
      this.refreshInformations();
    }else
    {
      this.alerts.push(msg);
      this.refreshAlerts();
    }
  }

  private refreshAlerts() : void
  {
    if(this.alertHandler != null)
      this.alertHandler.call(this.alertHandler,this.alerts);
  }

  private refreshInformations() : void
  {
    if(this.informationHandler != null)
      this.informationHandler.call(this.informationHandler,this.informations);
  }

  /**
   * Remove element from aler array ( by index )
   * @param index Element index.
   */
  removeAlert(index : number) : void{
    this.alerts.splice(index, 1);
    this.refreshAlerts();
  }
}
