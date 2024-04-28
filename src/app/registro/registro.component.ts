import { Component } from '@angular/core';
import { BaseDatosService } from '../servicios/base-datos.service';
import { FormsModule ,ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private baseDatosService: BaseDatosService) {}

  username: string="";
  email: string="";
  password: string="";
  existeEmail: boolean = false;
  registrado:boolean=false;


  formulario=new FormGroup({

    'name':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required]),
  })



  registrar(): void {

    this.baseDatosService.verificarEmail(this.email).subscribe({
  
      next: response => {
        console.log('Respuesta del servidor:', response); 
        if (response.length > 0) {
          this.existeEmail = true;
         
        }
         else {
        this.existeEmail = false;
          const newUser = {
            username: this.username,
            email: this.email,
            password: this.password
          };
          this.baseDatosService.registroUsuario(newUser).subscribe({
            next: response => {
              console.log('Registro exitoso:', response);
              this.registrado=true;
              this.formulario.reset();
            },
            error: error => {
              console.log('Registro fatal:', error);
            }
          });
        }
       
      },
      error: error => {
        console.log('Error al verificar el correo electrónico:', error);
      }
    });
    
  }






}





