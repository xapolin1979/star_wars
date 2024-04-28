import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(public baseDatosService: BaseDatosService,public router:Router) {}

  public borrarToken() {
    localStorage.removeItem('token');
    this.router.navigate(['']); 
  }



}
