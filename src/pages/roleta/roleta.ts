import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'roleta.html'
})
export class Roleta {
  aleatorio:number;
  telaSorteio:boolean = true;
  botao:boolean = true;
  resultado1:string;
  resultado2:string;
  resultado3:string;
  lista:Array<string> = new Array<string>();
  pizza:boolean;
  pizza2:boolean;
  pizza3:boolean;
  projeto:boolean;
  projeto2:boolean;
  projeto3:boolean;
  galaticos:boolean;
  galaticos2:boolean;
  galaticos3:boolean;
  pentakill:boolean;
  pentakill2:boolean;
  pentakill3:boolean;
  sonadj:boolean;
  sonadj2:boolean;
  sonadj3:boolean;
  fliperama:boolean;
  fliperama2:boolean;
  fliperama3:boolean;
  guardia:boolean;
  guardia2:boolean;
  guardia3:boolean;

  constructor(private alertCtrl: AlertController) {
   
  }

	public girarRoleta(): number {
		this.botao = false;
		this.telaSorteio = false;
		setTimeout(() => this.roleta1(), 0);
		setTimeout(() => this.roleta2(), 0);
		setTimeout(() => this.roleta3(), 0);
		setTimeout(() => this.result(), 1000);
		setTimeout(() => this.result2(),2000);
		setTimeout(() => this.result3(), 3000);
		setTimeout(() => this.recompensa(), 3100);
		return this.aleatorio;
	}

	public recompensa(){
		if(this.resultado1 === this.resultado2 && this.resultado1 === this.resultado3){
			let alert = this.alertCtrl.create({
				subTitle: "Ganhou melhor premio.",
				buttons: ['BlƵ']
			});
			alert.present();
			setTimeout(() => this.resetar(),3000);
		}
		if(this.resultado1 === this.resultado2 || this.resultado1 === this.resultado3 || this.resultado2 === this.resultado3){
			let alert = this.alertCtrl.create({
				subTitle: "Ganhou premio mediano.",
				buttons: ['BlƵ']
			});
			alert.present();
			setTimeout(() => this.resetar(),3000);
		} else{
			let alert = this.alertCtrl.create({
				subTitle: "Não foi dessa vez. =/",
				buttons: ['BlƵ']
			});
			alert.present();
			setTimeout(() => this.resetar(),3000);
		}
	}

	public resetar(){
		this.botao = true;
		this.resultado1 = "";
		this.resultado2 = "";
		this.resultado3 = "";
		this.pizza = false;
	    this.pizza2 = false;
	    this.pizza3 = false;
	    this.projeto = false;
	    this.projeto2 = false;
	    this.projeto3 = false;
	    this.galaticos = false;
	    this.galaticos2 = false;
	    this.galaticos3 = false;
	    this.pentakill = false;
	    this.pentakill2 = false;
	    this.pentakill3 = false;
	    this.sonadj = false;
	    this.sonadj2 = false;
	    this.sonadj3 = false;
	    this.fliperama = false;
	    this.fliperama2 = false;
	    this.fliperama3 = false;
	    this.guardia = false;
	    this.guardia2 = false;
	    this.guardia3 = false;
		this.telaSorteio = true;
	}

	public result(){
		switch (this.resultado1) {
			case "Pizza":
				this.pizza = true;
				break;
			case "Projeto":
				this.projeto = true;
				break;
			case "Galáticos":
				this.galaticos = true;
				break;
			case "Pentakill":
				this.pentakill = true;
				break;
			case "SonaDj":
				this.sonadj = true;
				break;
			case "Fliperama":
				this.fliperama = true;
				break;
			case "Guardiã Estelar":
				this.guardia = true;
				break;
		}
	}

	public result2(){
		switch (this.resultado2) {
			case "Pizza":
				this.pizza2 = true;
				break;
			case "Projeto":
				this.projeto2 = true;
				break;
			case "Galáticos":
				this.galaticos2 = true;
				break;
			case "Pentakill":
				this.pentakill2 = true;
				break;
			case "SonaDj":
				this.sonadj2 = true;
				break;
			case "Fliperama":
				this.fliperama2 = true;
				break;
			case "Guardiã Estelar":
				this.guardia2 = true;
				break;
		}
	}

	public result3(){
		switch (this.resultado3) {
			case "Pizza":
				this.pizza3 = true;
				break;
			case "Projeto":
				this.projeto3 = true;
				break;
			case "Galáticos":
				this.galaticos3 = true;
				break;
			case "Pentakill":
				this.pentakill3 = true;
				break;
			case "SonaDj":
				this.sonadj3 = true;
				break;
			case "Fliperama":
				this.fliperama3 = true;
				break;
			case "Guardiã Estelar":
				this.guardia3 = true;
				break;
		}
		console.log("r1: "+ this.resultado1);
		console.log("r2: "+ this.resultado2);
		console.log("r3: "+ this.resultado3);
	}

    public roleta1(): void {
    	this.aleatorio = Math.random() * (100 - 0) + 0;
	    if (0 < this.aleatorio && this.aleatorio < 14.28) {
	    	this.resultado1 = "Pizza";
	    } 
	    if (14.29 < this.aleatorio && this.aleatorio < 28.56) {
	    	this.resultado1 = "Projeto";
	    }
	    if (28.57 < this.aleatorio && this.aleatorio < 42.84) {
	    	this.resultado1 = "Galáticos";
	    } 
	    if (42.85 < this.aleatorio && this.aleatorio < 57.12) {
			this.resultado1 = "Pentakill";
	    } 
	    if (57.13 < this.aleatorio && this.aleatorio < 71.4) {
	    	this.resultado1 = "SonaDj";
	    } 
	    if (71.41 < this.aleatorio && this.aleatorio < 85.68) {
	    	this.resultado1 = "Fliperama";
	    } 
	    if (85.69 < this.aleatorio && this.aleatorio < 100.01) {
	    	this.resultado1 = "Guardiã Estelar";
	    }
	}

	public roleta2(): void {
		this.aleatorio = Math.random() * (100 - 0) + 0;
		if (this.resultado1 == "Pizza") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Pizza";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Projeto";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Galáticos";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Pentakill";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "Fliperama";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Projeto") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Projeto";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Galáticos";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Pentakill";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "Fliperama";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Galáticos") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Galáticos";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Pentakill";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "Fliperama";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Pentakill") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Pentakill";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Galáticos";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "Fliperama";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "SonaDj") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "SonaDj";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Galáticos";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "Pentakill";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "Fliperama";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Fliperama") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Fliperama";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Galáticos";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "Pentakill";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Fliperama") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Fliperama";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Galáticos";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "Pentakill";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Guardiã Estelar";
		    }
		}

		if (this.resultado1 == "Guardiã Estelar") {
			if (0 < this.aleatorio && this.aleatorio < 1.01) {
	    		this.resultado2 = "Guardiã Estelar";
		    } 
		    if (1.02 < this.aleatorio && this.aleatorio < 17.5) {
		    	this.resultado2 = "Pizza";
		    }
		    if (17.51 < this.aleatorio && this.aleatorio < 33.99) {
		    	this.resultado2 = "Projeto";
		    } 
		    if (34 < this.aleatorio && this.aleatorio < 50.48) {
				this.resultado2 = "Galáticos";
		    } 
		    if (50.49 < this.aleatorio && this.aleatorio < 66.97) {
		    	this.resultado2 = "Pentakill";
		    } 
		    if (66.98 < this.aleatorio && this.aleatorio < 83.46) {
		    	this.resultado2 = "SonaDj";
		    } 
		    if (83.47 < this.aleatorio && this.aleatorio < 100.01) {
		    	this.resultado2 = "Fliperama";
		    }
		}	
	}

	public roleta3(): void {
		this.lista[0] = "Pizza";
		this.lista[1] = "Projeto";
		this.lista[2] = "Galáticos";
		this.lista[3] = "Pentakill";
		this.lista[4] = "SonaDj";
		this.lista[5] = "Fliperama";
		this.lista[6] = "Guardiã Estelar";

		this.aleatorio = Math.random() * (100 - 0) + 0;
		
		for (var i = 0; i < 8; i++) {
			for (var x = 0; x < 8; x++) {
				if (this.resultado1 == this.lista[i] && this.resultado2 == this.lista[x]) {
					if (0 < this.aleatorio && this.aleatorio < 0.5) {
			    		this.resultado3 = this.lista[i];
				    } 
				    if (0.51 < this.aleatorio && this.aleatorio < 1) {
				    	this.resultado3 = this.lista[x];
				    }
			    } 
			    //------------------- se os 2 resultados forem iguais /\ ------
	    		if(this.resultado1 === "Guardiã Estelar" || this.resultado2 === "Guardiã Estelar"){
	    			if(this.resultado1 === "Fliperama" || this.resultado2 === "Fliperama"){
    					if(this.resultado1 === "Pizza" || this.resultado2 === "Pizza"){
    						this.resultado3 = "Pentakill";
    						i = 8;
    						x = 8;
    					}else{
    						console.log("estou no else do if");
    						this.resultado3 = "Pizza";
    						i = 8;
    						x = 8;
						}
					}
	    		}
	    		if(this.resultado1 !== "Guardiã Estelar" || this.resultado2 !== "Guardiã Estelar"){
	    			for (var z = 0; z < 20; z++) {
		    			this.aleatorio = Math.random() * (100 - 0) + 0;
		    			if (0 < this.aleatorio && this.aleatorio < 14.28) {
					    	this.resultado3 = "Pizza";
					    } 
					    if (14.29 < this.aleatorio && this.aleatorio < 28.56) {
					    	this.resultado3 = "Projeto";
					    }
					    if (28.57 < this.aleatorio && this.aleatorio < 42.84) {
					    	this.resultado3 = "Galáticos";
					    } 
					    if (42.85 < this.aleatorio && this.aleatorio < 57.12) {
							this.resultado3 = "Pentakill";
					    } 
					    if (57.13 < this.aleatorio && this.aleatorio < 71.4) {
					    	this.resultado3 = "SonaDj";
					    } 
					    if (71.41 < this.aleatorio && this.aleatorio < 85.68) {
					    	this.resultado3 = "Fliperama";
					    } 
					    if (85.69 < this.aleatorio && this.aleatorio < 100.01) {
					    	this.resultado3 = "Guardiã Estelar";
					    }
		    			if (this.resultado3 !== this.resultado1 && this.resultado3 !== this.resultado2) {
		    				i = 8;
		    				x = 8;
		    				z = 19;
		    			}
		    		}
	    		}
			}
		}
	}

}

