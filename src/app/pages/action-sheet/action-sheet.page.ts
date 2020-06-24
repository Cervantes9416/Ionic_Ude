import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    public actionSheet:ActionSheetController
  ) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      backdropDismiss:false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass:'rojo',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
     ,
    ]
    });
    await actionSheet.present();
  }

}
