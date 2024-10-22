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
    {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
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



}