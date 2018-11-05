import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/model_filme';

/**
 * Generated class for the DestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * Nome: Paula Akemi RA: 817126817
 * 
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {

  filme: Filme;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filme = this.navParams.get("filmeSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
