import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/model_filme';

/**
 * Generated class for the Destino1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 *  Nome: Paula Akemi RA: 817126817
 */

@IonicPage()
@Component({
  selector: 'page-destino1',
  templateUrl: 'destino1.html',
})
export class Destino1Page {

  genero: Genero;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genero = this.navParams.get("generoSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Destino1Page');
  }

}
