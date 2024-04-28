import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavesComponent } from './naves/naves.component';
import { ExplorarNavesComponent } from './explorar-naves/explorar-naves.component';
import { RegistroComponent } from './registro/registro.component';
import { AccesoComponent } from './acceso/acceso.component';
import { AuthGuard } from './guardias/auth.guard';
export const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"naves",component:NavesComponent,canActivate: [AuthGuard]},
   {path:"explorarnaves",component:ExplorarNavesComponent},
   {path:"registro",component:RegistroComponent},
   {path:"acceso",component:AccesoComponent}
];
