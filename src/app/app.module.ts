import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ElementsClassesPageModule } from '../pages/elementsClasses/elementsClasses.module';
import { FirebasePageModule } from '../pages/firebase/firebase.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProdutoService } from './services/produto.service';
import { ManterProdutoPageModule } from '../pages/manter-produto/manter-produto.module';

// const firebaseAppConfig: FirebaseAppConfig = {
//   apiKey: "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
//   authDomain: "elements-arton.firebaseapp.com",
//   databaseURL: "https://elements-arton.firebaseio.com",
//   projectId: "elements-arton",
//   storageBucket: "elements-arton.appspot.com",
//   messagingSenderId: "715361864172"
// }
@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    //Saints
    // AngularFireModule.initializeApp(firebaseAppConfig),
    // AngularFireDatabaseModule, AngularFireAuthModule, AngularFirestoreModule, ElementsClassesPageModule,
    //David
    FirebasePageModule,
    ManterProdutoPageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDNCB7UknnvSD2xIeg1iF5he4Q5YX0PfYA",
      authDomain: "samtech-controle-de-vendas.firebaseapp.com",
      databaseURL: "https://samtech-controle-de-vendas.firebaseio.com",
      projectId: "samtech-controle-de-vendas",
      storageBucket: "samtech-controle-de-vendas.appspot.com",
      messagingSenderId: "997655845700"  
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    BarcodeScanner, StatusBar, SplashScreen,
    ToastService, LoadingService, GoogleAnalytics, ProdutoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {
}
