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
  private answerGIF: any;

  constructor(private data: MessageServiceService, private gifData: MessageServiceService) { }

  ngOnInit() {
    this.userMessage = this.data.data.subscribe((data) => {
      console.log('Subscriber B:', data);
      this.addMessageToList(data);
    });

    this.answerGIF = this.data.gifData.subscribe((data) => {
      console.log('GIF:', data);
      this.addMessageToList(data);
    });
  }
  addMessageToList(msg) {
    this.allMessages.push(msg);
  }

  extractImgUrl(data) {
    if (data.data !== undefined) {
      console.log(data.data[0].url)
      console.log(data)
      return data.data[0].url;
    }
  }

  isObject(msg) {
    return typeof msg === 'object';
  }
  isString(msg) {
    return typeof msg === 'string';
  }
}
