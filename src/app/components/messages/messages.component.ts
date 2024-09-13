import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { MessagesService } from '../../services/messageService/messages.service';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  faWindowClose = faWindowClose;

  constructor(public messageService: MessagesService){}
  
}
