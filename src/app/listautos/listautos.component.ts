import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MostrarlistaService } from '../servicios/mostrarlista.service';

@Component({
  selector: 'app-listautos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listautos.component.html',
  styleUrl: './listautos.component.css'
})
export class ListautosComponent implements OnInit{
  /*enVenta =[
    {marca:"Volkswagen", modelo:"Vento Advance",aio:2010},
    {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
    {marca:"Peugeot",modelo:"Style D",anio:2000},
    {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
    {marca:"Ford",modelo:"Focus Plus",anio:2016},
    {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
    {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
    {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
    {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
    {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999}
  ]*/ 
  agregadosRecientemente =[
    {marca:"Peugeot", modelo:"207 Xt",anio:2009},
    {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
    {marca:"Honda",modelo:"Acord Exrl",anio:1998},
    {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
    {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
    {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
  ]

  cargarLista: any;
  
  constructor (private servicioDesclistaautos:MostrarlistaService){
  }

  ngOnInit(): void {
    this.mostrarLista();
  }
  mostrarLista():void{
    this.servicioDesclistaautos.getLista().subscribe({
      next: (data) => {
    this.cargarLista=data;
    
      },error: (error)=>{
    console.error("Error al mostar lista de actividades")
      }
    });
    
    }


  





}
