import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import {PedidoComponent} from "./components/pedido/pedido.component";
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
    MenubarModule
  ]
})
export class PacienteModule { }
