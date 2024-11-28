import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}
}
