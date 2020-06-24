import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.page.html',
  styleUrls: ['./item-slider.page.scss'],
})
export class ItemSliderPage implements OnInit {
  @ViewChild('lista') lista:IonList;

  usuarios:Usuario[] = [
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario2@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },
    {
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    },{
      email:'usuario1@gmail',
      nombre:'usuario',
      phone:'664-8158565'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  favorite(user){
    console.log(user);
    this.lista.closeSlidingItems();
  }

  share(user){
    console.log(user);
    this.lista.closeSlidingItems();
  }

  destroy(index){
    console.log(index);
    let arreglo = this.usuarios.splice(index,1);
    console.log(arreglo);

    this.lista.closeSlidingItems();
  }
}

interface Usuario{
  nombre:string,
  email:string,
  phone:string,
}
