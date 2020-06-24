import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personaje:string[] = ['Aquaman','Superman','Flash','Batman','Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    console.log(event);

    const itemMover = this.personaje.splice(event.detail.from,1)[0];
    this.personaje.splice(event.detail.to,0,itemMover);

    event.detail.complete();
    console.log(this.personaje);
  }
}
