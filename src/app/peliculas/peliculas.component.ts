import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { NavesService } from '../servicios/naves.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {


  constructor(public parametro:ActivatedRoute,private NavesService:NavesService,public route:Router){}
  numeroId:number=0
  data:any;
  urlPeliculas:any;
   numeroImg:string[]=[];
   namePelicula:string[]=[]
  listaPilotos: boolean = false;
  ngOnInit(){

    this.parametro.queryParams.subscribe(params => {
      this.numeroId=params['id'];
    });
    console.log(this.numeroId)
  
    this.obtenerDatos()

  }


  obtenerDatos(){
    this.NavesService.getData().subscribe(data=>{
      this.data=data.results;
       this.urlPeliculas = this.data[this.numeroId]?.films;
        for(let i=0;i<this.urlPeliculas.length;i++){
          this.numeroImg.push(this.urlPeliculas[i].match(/\/(\d+)\/$/)[1])
          console.log(this.urlPeliculas[i]);

          this.NavesService.getPeliculas(this.urlPeliculas[i]).subscribe(data=>{
           this.namePelicula.push(data.title)
                   console.log(this.namePelicula)

       })
        
   }

  if(this.urlPeliculas.length > 0){
    this.listaPilotos = true;

  }
  else{
    this.listaPilotos = false;
  }


    console.log( this.numeroImg)
    }) 

  } 


 
  





}
