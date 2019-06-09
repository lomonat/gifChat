import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

import { ChatService } from './chat.service';
import { FormsModule } from "@angular/forms";
import { ChatInputComponent} from "../chat-input/chat-input.component";
import { ChatListComponent } from '../chat-list/chat-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ChatDialogComponent, ChatInputComponent, ChatListComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
