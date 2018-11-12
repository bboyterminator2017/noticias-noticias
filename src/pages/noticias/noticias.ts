import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiasService } from '../../service/noticias.service';
import { Noticias } from '../../model/noticias';



@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  noticias : Noticias[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service : NoticiasService) {
  }

  ionViewDidLoad() {
    this.getNoticias();
  }
  
  irParaNoticiaCompleta(n : Noticias){
    this.navCtrl.setRoot('NoticiaCompletaPage',{'noticias' : 'n'});
  }

  getNoticias(){
    this.service.getNoticias()
      .subscribe( response => {
        this.noticias = response;

    
    });


    
   
  }
}
