import { Component } from '@angular/core';
import { BaseDatosService } from '../servicios/base-datos.service';
import { FormsModule ,ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';


@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent {

  constructor(private baseDatosService: BaseDatosService,public router:Router) {}

  formulario=new FormGroup({

    'email':new FormControl('',Validators.required),
    'password':new FormControl('',[Validators.required]),
  })

  login() {
    const email = this.formulario.get('email')?.value || ""; 
    const password = this.formulario.get('password')?.value || "";

     console.log(email,password)
    this.baseDatosService.login(email, password)
    
   
  }
  

  ngOnInit(): void {
    
    if (this.baseDatosService.estaLogueado()) {
      this.router.navigate(['/naves']); 
    }
  }
  





}





