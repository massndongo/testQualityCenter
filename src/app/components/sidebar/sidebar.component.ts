import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private messageService: MessageService) {}

  show() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Cette partie est en cours...' });
  }
}
