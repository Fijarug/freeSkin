import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'teemo.html'
})

export class Teemo {
	public health:number;
	public vidaAtual:number;
	public vidaRes:number;
	public vidaRestante:string;
	public golpe:boolean;
	public itens:boolean;
	public chanceDropar:number;
	public porcentagemDrop:number;

	public vidaMax:number = 300;

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

	public baterNoMonstro(): void{
		this.golpe = true;
       	if (this.vidaAtual > 0) {
     		this.vidaAtual -= 100;
 		}
 		if (this.vidaAtual <= 0 ){
     		this.vidaAtual = 0;
     		this.resetar();
     	}
     	setTimeout(() => this.aparecerGolpe(), 200);
		setTimeout(() => this.regra3(this.vidaAtual, this.vidaMax), 200);
  	}

  	public botao(): void{
		this.itens = true;
	}

  	public aparecerGolpe(): void{
		this.golpe = false;
	}

	public regra3(vidaAtual:number, vidaMax:number):void{
		this.vidaRes = (this.vidaAtual*100)/this.vidaMax;
		this.vidaRestante = this.vidaRes.toFixed(2);
	}
	
	public numeroRandom(min, max): number {  
	  return this.chanceDropar = Math.random() * (max - min) + min;
	}

	public resetar(){
		setTimeout(() => this.vidaAtual = this.vidaMax, 500);
		setTimeout(() => this.vidaRestante = "100", 500);
	}

  	ionViewDidLoad() {
		this.vidaAtual = this.vidaMax;
		this.vidaRestante = "100";
  	}

}