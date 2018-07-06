import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loja } from '../pages/loja/loja';
import { ChanceDiaria } from '../pages/chanceDiaria/chanceDiaria';
import { Roleta } from '../pages/roleta/roleta';
import { ListaSorteio } from '../pages/listaSorteio/listaSorteio';
import { Sorteio } from '../pages/sorteio/sorteio';
import { Teemo } from '../pages/teemo/teemo';
import { Cadastro } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Loja,
    ChanceDiaria,
    Roleta,
    ListaSorteio,
    Sorteio,
    Teemo,
    Cadastro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Loja,
    ChanceDiaria,
    Roleta,
    ListaSorteio,
    Sorteio,
    Teemo,
    Cadastro
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
