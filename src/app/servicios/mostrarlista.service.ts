//SERVICIO-CLASE HIJA  QUE HEREDA LAS CARACTERISTICAS DEL MODELO Y LAS IMPLEMENTA
//(la informacion que provee/muestra se define en archivo JSON)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { catchError, Observable, throwError } from 'rxjs';
import { Desclistaautos } from "../modelos/desclistaautos";

@Injectable({
  providedIn: 'root'
})
export class MostrarlistaService {

  private jsonUrl= "data/lista.json"
  public listaDeAutos:Desclistaautos[] = []

  constructor(private http:HttpClient) {
    this.getLista();
   }

   getLista():Observable<Desclistaautos[]>{
    return this.http.get<Desclistaautos[]>(this.jsonUrl).pipe(
      catchError(error=>{
        console.error("Error al cargar el archivo JSON",error);    
  return throwError(()=> new Error ("No se pudo cargar el archivo JSON de actividades"));
  })
  );
  }

}
