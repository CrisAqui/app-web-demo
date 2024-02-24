import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AhorroComponent } from './components/ahorro/ahorro.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'registrar', component: RegistrarComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'ahorro', component: AhorroComponent },
  {path: 'transferencia', component: TransferenciaComponent },
  {path: 'movimiento', component: MovimientoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
