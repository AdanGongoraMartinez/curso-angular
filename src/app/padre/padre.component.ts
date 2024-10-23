import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  nombre?: string;

  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPeque());
  }

  preguntar(){
    this._servicioFamiliar.preguntarPorHijo();
  }
  
  valorContador: number = 0;

  incrementar(){
    this.valorContador++;
  }
  
  decrementar(){
    this.valorContador--;
  }
  
  /* mensajePadre = 'Mensaje desde el padre'; */
  
  mensajeRecibido: string = '';
  
  recibirMensaje($event: string){
    this.mensajeRecibido = $event
  }
}
