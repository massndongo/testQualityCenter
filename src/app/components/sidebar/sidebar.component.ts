import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  showImage = true;
  url!: string
  apercueGris = "../../../assets/aperçu-gris-menu-icon.png"
  apercueBlue = "../../../assets/aperçu-bleu-menu-icon.png"
  venteGris = "../../../assets/ventes-gris-menu-icon.png"
  venteBleu = "../../../assets/ventes-blue-menu-icon.png"
  constructor(private messageService: MessageService, private router: Router) {}

  show() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Cette partie est en cours...' });
  }
    // Méthode pour vérifier si le lien est actif
  get isActiveLinkOverview() {
    return this.router.isActive('/overview', true);
  }

  get isActiveLinkVente(){
    return this.router.isActive('/ventes', true)
  }
}
