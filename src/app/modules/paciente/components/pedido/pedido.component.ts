import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  sidebarVisible: boolean = true;

  ngOnInit(): void {
    this.sidebarVisible = true;
  }
}
