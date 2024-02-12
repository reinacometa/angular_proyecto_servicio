import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  obternerContacto(){
    return [{nombre:"InnovaEstudio",correo:"InnovaEstudio@demo.com",telefono:"123456789"}]
  }
}
