import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  nombre ?: string;

  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPeque('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoPeque();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande());
  }
}
