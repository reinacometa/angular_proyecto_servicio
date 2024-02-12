import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ContactoService } from "./contacto.service"

// @ts-ignore
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  formularioContacto: FormGroup;
  contatos:any

  // Aquí puedes inicializar tu formulario
  constructor(
      private contactoServices: ContactoService,
    private formBuilder: FormBuilder,
  ) {
    this.formularioContacto = this.formBuilder.group({
      name:"",
      addres:"",
      telefono:"",
    })
  }

  ngOnInit() {
    this.misContactos();
    console.log(this.contatos)
  }

  // Esta función se ejecutará cuando el formulario se envíe
  formSubmit() {
    console.log(this.formularioContacto.value)
  }
  misContactos(): void{
    this.contatos = this.contactoServices.obternerContacto();
  }
}

