import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message = '';

  constructor() {}

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear()
    }, 4000)

    console.log('message service here!');
  }

  clear() {
    this.message = '';
  }
}
