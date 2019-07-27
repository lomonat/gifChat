import { Component } from '@angular/core';
import {MessageServiceService} from "../message-service.service";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  message: string;

  constructor(private data: MessageServiceService) { }

  newMessage(msg) {
    this.data.updateMessage(msg);
    this.message = '';
  }

}
