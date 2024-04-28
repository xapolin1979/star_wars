import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private baseDatosService: BaseDatosService, private router: Router) {}

  canActivate(): boolean {
    if (this.baseDatosService.estaLogueado()) {
      return true; 
    } else {
      this.router.navigate(['/acceso']); 
      return false;
    }
  }
}
