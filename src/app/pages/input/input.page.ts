import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre:string;
  usuario:Usuario = {
    email:'',
    password:'',
  };

  constructor() {
  }

  ngOnInit() {
  }

  OnSubmit(formulario:NgForm){
    console.log(formulario.value);
    console.log(this.usuario);
  }
}

interface Usuario{
  email:string,
  password:string,
}
