import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  private dataSource = new BehaviorSubject('');
  data = this.dataSource.asObservable();

  constructor() { }

  updateMessage(message: string) {
    this.dataSource.next(message);
    console.log('i am updates msg', message);
  }
}
