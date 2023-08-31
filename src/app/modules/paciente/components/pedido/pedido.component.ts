import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  sidebarVisible: boolean = true;
  items: MenuItem[] = []; // Definindo a array de items do menu

  ngOnInit(): void {
    // Definindo os itens do menu
    this.items = [
      {
        label: 'Café da Manhã',
        icon: 'pi pi-fw pi-file',
        items: [
          // ... Resto do código do menu ...
        ]
      },
      {
        label: 'Almoço',
        icon: 'pi pi-fw pi-pencil',
        items: [
          // ... Resto do código do menu ...
        ]
      },
      {
        label: 'Janta',
        icon: 'pi pi-fw pi-user',
        items: [
          // ... Resto do código do menu ...
        ]
      }
    ];
  }
}
