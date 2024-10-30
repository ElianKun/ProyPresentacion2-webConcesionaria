import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  enVenta =[
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
  ] 
  agregadosRecientemente =[
    {marca:"Peugeot", modelo:"207 Xt",anio:2009},
    {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
    {marca:"Honda",modelo:"Acord Exrl",anio:1998},
    {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
    {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
    {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
  ]
  cantidadTotal =[
    {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
    {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
    {marca:"Peugeot",modelo:"Style D",anio:2000},
    {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
    {marca:"Ford",modelo:"Focus Plus",anio:2016},
    {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
    {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
    {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
    {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
    {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999},
    {marca:"Peugeot", modelo:"207 Xt",anio:2009},
    {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
    {marca:"Honda",modelo:"Acord Exrl",anio:1998},
    {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
    {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
    {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
  ]
  /* lista de imagenes de autos*/
imgA1:string="autos/a1.png";
imgA2:string="autos/a2.png";
imgA3:string="autos/a3.png";
imgA4:string="autos/a4.png";
imgA5:string="autos/a5.png";
imgA6:string="autos/a6.png";
imgA7:string="autos/a7.png";
imgA8:string="autos/a8.png";
imgA9:string="autos/a9.png";
imgA10:string="autos/a10.png";
imgA11:string="autos/a11.png";
imgA12:string="autos/a12.png";
imgA13:string="autos/a13.png";
imgA14:string="autos/a14.png";
imgA15:string="autos/a15.png";
imgA16:string="autos/a16.png";

}
