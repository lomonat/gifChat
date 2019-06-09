import { Component, OnInit } from '@angular/core';
import {MessageServiceService} from "../message-service.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  allMessages: string [] = [];
  private userMessage: any;

  constructor(private data: MessageServiceService) { }

  ngOnInit() {
    this.userMessage = this.data.data.subscribe((data) => {
      console.log('Subscriber B:', data);
      this.addMessageToList(data);
    });
  }
  addMessageToList(msg) {
    this.allMessages.push(msg);
  }
}
