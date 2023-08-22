import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/components/login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'paciente', loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
