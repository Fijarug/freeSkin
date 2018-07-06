import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'chanceDiaria.html'
})
export class ChanceDiaria {
  aleatorio:number;
  telaSorteio:boolean = true;
  botao:boolean = true;
  essenciaAzul:boolean;
  essenciaLaranja:boolean;
  resultado:string;

	public numeroRandom(){
		this.botao = false;
		this.aleatorio = Math.random() * (100 - 0) + 0;
		this.telaSorteio = false;
		setTimeout(() => this.sorteio(), 2100);
		setTimeout(() => this.result(), 2100);
		setTimeout(() => this.resetar(), 5000);
	}

	public resetar(){
		this.botao = true;
		this.telaSorteio = true;
		this.essenciaAzul = true;
		this.essenciaLaranja = true;
	}

	public result(){
		if (this.resultado == "Ganhou 4 pontos." ||
			this.resultado == "Ganhou 5 pontos." ||
			this.resultado == "Ganhou 6 pontos." ||
			this.resultado == "Ganhou 7 pontos." ||
			this.resultado == "Ganhou 8 pontos." ||
			this.resultado == "Ganhou 9 pontos."){
			this.essenciaAzul = false;
		} else{
			this.essenciaLaranja = false;
		}
		let alert = this.alertCtrl.create({
			subTitle: this.resultado,
			buttons: ['BlƵ']
		});
		alert.present();
	}

    public sorteio(): void {
		if(this.aleatorio < 18) {
		    this.resultado = "Ganhou 4 pontos.";
		}
	    if (18.01 < this.aleatorio && this.aleatorio < 36) {
	    	this.resultado = "Ganhou 5 pontos.";
	    } 
	    if (36.01 < this.aleatorio && this.aleatorio < 53) {
	    	this.resultado = "Ganhou 6 pontos.";
	    }
	    if (53.01 < this.aleatorio && this.aleatorio < 69) {
	    	this.resultado = "Ganhou 7 pontos.";
	    } 
	    if (69.1 < this.aleatorio && this.aleatorio < 84.3) {
			this.resultado = "Ganhou 8 pontos.";
	    } 
	    if (84.4 < this.aleatorio && this.aleatorio < 99.4) {
	    	this.resultado = "Ganhou 9 pontos.";
	    } 
	    if (99.41 < this.aleatorio && this.aleatorio < 99.8) {
	    	this.resultado = "Essência laranja baixa.";
	    } 
	    if (99.81 < this.aleatorio && this.aleatorio < 99.99) {
	    	this.resultado = "Essência laranja média.";
	    } 
	    if (100 == this.aleatorio) {
	      this.resultado = "Essência laranja alta.";
	    }
	}

  constructor(private alertCtrl: AlertController) {
   
  }

}