import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { NavesService } from '../servicios/naves.service';
import { CommonModule } from '@angular/common';
import { PilotsComponent } from '../pilots/pilots.component';
import { PeliculasComponent } from '../peliculas/peliculas.component';
@Component({
  selector: 'app-explorar-naves',
  standalone: true,
  imports: [CommonModule,PilotsComponent,PeliculasComponent],
  templateUrl: './explorar-naves.component.html',
  styleUrl: './explorar-naves.component.css'
})
export class ExplorarNavesComponent {

  constructor(public parametro:ActivatedRoute,private NavesService:NavesService,public route:Router){}

  numeroId:number=0
  data:any;
  url:any;
 numeroImg:string="";

 imagenCargada: boolean = false;

  ngOnInit(){
    window.scrollTo(0, 0);
    this.parametro.queryParams.subscribe(params => {
      this.numeroId=params['id'];
    });
    console.log(this.numeroId)
    this.obtenerDatos()
 

  }


  obtenerDatos(){
    this.NavesService.getData().subscribe(data=>{
      this.data=data.results;
      console.log(this.data)
      
         this.url = this.data[this.numeroId].url;
        this.numeroImg=this.url.match(/\/(\d+)\/$/)[1];
        this.verificarImagen();
    })  
  } 

  verificarImagen() {
    const img = new Image();
    img.onload = () => {
    
      this.imagenCargada = true;
    };
    img.onerror = () => {
    
      this.imagenCargada = false;
    };
    img.src = `https://starwars-visualguide.com/assets/img/starships/${this.numeroImg}.jpg`;
  }



}
