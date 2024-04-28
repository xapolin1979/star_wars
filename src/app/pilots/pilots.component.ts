import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { NavesService } from '../servicios/naves.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.css'
})
export class PilotsComponent {

  constructor(public parametro:ActivatedRoute,private NavesService:NavesService,public route:Router){}
  numeroId:number=0
  data:any;
  urlPilots:any;
 numeroImg:string[]=[];
namePilot:string[]=[]
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
       this.urlPilots = this.data[this.numeroId]?.pilots;
        for(let i=0;i<this.urlPilots.length;i++){
          this.numeroImg.push(this.urlPilots[i].match(/\/(\d+)\/$/)[1])
          console.log(this.urlPilots[i]);

          this.NavesService.getPiloto(this.urlPilots[i]).subscribe(data=>{
           this.namePilot.push(data.name)
                   console.log(this.namePilot)

       })
        
   }

  if(this.urlPilots.length > 0){
    this.listaPilotos = true;

  }
  else{
    this.listaPilotos = false;
  }


    console.log( this.numeroImg)
    }) 

  } 


 
  



}
