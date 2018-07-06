import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sorteio } from '../sorteio/sorteio';

@Component({
  selector: 'page-list',
  templateUrl: 'listaSorteio.html'
})
export class ListaSorteio {

  constructor(public navCtrl: NavController) {}

	  mudarPagina() {
	    this.navCtrl.push(Sorteio);
	  }
   
  }	