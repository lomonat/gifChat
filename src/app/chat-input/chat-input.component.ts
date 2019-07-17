import { Component, OnInit } from '@angular/core';
import {MessageServiceService} from "../message-service.service";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent implements OnInit {
  message: string;
  gif: any;

  constructor(private data: MessageServiceService, private gifData: MessageServiceService) { }

  ngOnInit() {
   // this.data.data.subscribe(message => this.message = message);
   // this.gifData.data.subscribe(message => this.gif = message);

  }
  newMessage(msg) {
    this.data.updateMessage(msg);
    this.message = '';
  }

}
