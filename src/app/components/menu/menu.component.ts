import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componentes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes:Observable<Componente[]>;

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit() {
    this.componentes = this._dataService.getMenuOpts();
  }

}
