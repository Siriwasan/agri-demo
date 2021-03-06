import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
 
import { IonicStorageModule } from '@ionic/storage';
//import {IonicStorageModule} from '@ionic/storage'
//import { ScreenOrientation } from '@ionic-native/screen-orientation';

import * as firebase from 'firebase';
import { from } from 'rxjs';

// const config = {
//   apiKey: 'AIzaSyB6aJEBL2Es1Mw5YZalnDFbwrd5Ra_a7jA',
//   authDomain: 'irp-demo.firebaseapp.com',
//   databaseURL: 'https://irp-demo.firebaseio.com',
//   projectId: 'irp-demo',
//   storageBucket: 'irp-demo.appspot.com',
//   messagingSenderId: '748809737188'
// };
const config = {
  apiKey: 'AIzaSyB8MGm1zIp0x7DHz2EjVSTI-MEB1OmpBuY',
  authDomain: 'agri-demo.firebaseapp.com',
  databaseURL: 'https://agri-demo.firebaseio.com',
  projectId: 'agri-demo',
  storageBucket: 'agri-demo.appspot.com',
  messagingSenderId: '34286050703'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    WebView,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
