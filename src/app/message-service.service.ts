import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { ApiCallService} from "./api-call.service";


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  private dataSource = new BehaviorSubject('');
  private gifSource = new BehaviorSubject<any>([]);
  data = this.dataSource.asObservable();
  gifData = this.gifSource.asObservable();

  constructor(private api: ApiCallService) { }

  updateMessage(message: string) {
    this.dataSource.next(message);
    console.log('i am updates msg', message);
    this.getGIF(message);
  }

  getGIF(request) {
    this.api.searchGIF(request)
      .subscribe(res => this.gifSource.next(res));
     // .subscribe(res => console.log(res));
  //  console.log(this.gif)
  }
}
