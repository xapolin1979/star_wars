import { Component } from '@angular/core';
import { NavesService } from '../servicios/naves.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.css'
})
export class NavesComponent {
  data:any;
 posicion:number=0;

 constructor(private NavesService:NavesService,public route:Router){}


obtenerDatos(){
this.NavesService.getData().subscribe(data=>{
  this.data=data.results;
  console.log(this.data)
})
} 

idNave(id:number){
   this.posicion=id;
   this.route.navigate(["explorarnaves"],{queryParams:{id:this.posicion}})
  
}

verMas(){

  this.NavesService.pagina();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  this.obtenerDatos();

}
ngOnInit():void{

  this.obtenerDatos();
  
}

}
