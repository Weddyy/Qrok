import { Component } from '@angular/core';
import {SocketService} from "../../ang-services/socket/stomp";
import {User} from "../../and-models/User";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  socketService : SocketService;
  public users : User[] = [];

  constructor(socketService : SocketService)
  {
    this.socketService = socketService;
  }

  public getUsers(): void{
    //this.httpService.getUsers().subscribe((data: Response) => this.users=data.json());
  }
}
