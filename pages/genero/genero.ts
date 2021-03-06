import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/model_filme';
import { Destino1Page } from '../destino1/destino1';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 *  Nome: Paula Akemi RA: 817126817
 * 
 */

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
  providers: [
    MovieProvider
  ]
})
export class GeneroPage {

  public generos = new Array<any>();

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider) {

  }

  ionViewDidLoad() {
    this.movieProvider.getGenres().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.generos = objeto_retorno.genres;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
