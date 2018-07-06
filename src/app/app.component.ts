import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Loja } from '../pages/loja/loja';
import { ChanceDiaria } from '../pages/chanceDiaria/chanceDiaria';
import { Roleta } from '../pages/roleta/roleta';
import { ListaSorteio } from '../pages/listaSorteio/listaSorteio';
import { Teemo } from '../pages/teemo/teemo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Mensagens', component: ChanceDiaria},
      { title: 'Loja', component: Loja },
      { title: 'Chance Diária', component: ChanceDiaria },
      { title: 'Roleta', component: Roleta },
      { title: 'Sorteio', component: ListaSorteio },
      { title: 'Caçada', component: Teemo },
      { title: 'Sair', component: ChanceDiaria }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
