import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  constructor(private http: HttpClient,private router:Router) { }

   public registroUsuario(nuevoUsuario:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>('http://localhost:3000/users', nuevoUsuario)
   
  }

  public verificarEmail(email: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users?email=' + email);
  }


  

  public login(email: string, password: string){
 
  this.http.post<any>('http://localhost:3000/login', { email, password }).subscribe({
   
    next: (response:any) => {
    localStorage.setItem('token',response.accesToken)
     
      this.router.navigate(['/naves']); 
      console.log(response);
    
    },
    error: (error:any)=> {
      this.router.navigate(['/acceso']);
      console.error('Error al iniciar sesión:', error);
      console.error('Mensaje de error:', error.error); 
    }
  });
      
  }

  public estaLogueado(): boolean {
    return !!localStorage.getItem('token');
  }
 
}
  
 

 

  



   
