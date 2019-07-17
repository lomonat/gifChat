import { Component } from '@angular/core';
import {MessageServiceService} from "../message-service.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent  {
  public chatMsgs: any = [];

  constructor(private data: MessageServiceService, private gifData: MessageServiceService) {
    data.data.subscribe((val) => {
      if(val) {
        this.addMessageToList('userInput', val);
      }
    });
    data.gifData.subscribe((val) => {
      if(val) {
        this.addMessageToList('apiAnswer', this.extractImgUrl(val));
      }
    });
  }

  addMessageToList(type, msg) {
    if (msg) {
      type === 'apiAnswer' ? this.chatMsgs.push({'apiAnswer': msg}) : this.chatMsgs.push(msg);
    }
  }

  extractImgUrl(data) {
    if (data.data) {
      return data.data[this.getRandomIndex()].images.preview_gif.url;
    }
  }

  isObject(msg) {
    return typeof msg === 'object';
  }
  isString(msg) {
    return typeof msg === 'string';
  }
  getRandomIndex() {
    return Math.floor(Math.random() * 10);
  }
}
