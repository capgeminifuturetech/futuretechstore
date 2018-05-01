import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Geolocation } from "@ionic-native/geolocation";
import { FCM } from "@ionic-native/fcm";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { StoreMapPage } from "../pages/store-map/store-map";
import { NotificationPage } from "../pages/notification/notification";
import { ShoppingCartPage } from "../pages/shopping-cart/shopping-cart";
import { ItemPage } from "../pages/item/item";
import { RegisterPage } from "../pages/register/register";

import { CartServiceProvider } from "../providers/cart-service/cart-service";
import { UserServiceProvider } from "../providers/user-service/user-service";
import { RewardServiceProvider } from "../providers/reward-service/reward-service";
import { MenuServiceProvider } from "../providers/menu-service/menu-service";
import { FirebaseProvider } from "../providers/firebase/firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyCD85dBDeEsUbhuwLZr5ZqMBjjgzTmBu2Q",
  authDomain: "futuretechstore-8951.firebaseapp.com",
  databaseURL: "https://futuretechstore-8951.firebaseio.com",
  projectId: "futuretechstore-8951",
  storageBucket: "futuretechstore-8951.appspot.com",
  messagingSenderId: "620176656965"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    StoreMapPage,
    NotificationPage,
    ShoppingCartPage,
    ItemPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    StoreMapPage,
    NotificationPage,
    ShoppingCartPage,
    ItemPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    UserServiceProvider,
    RewardServiceProvider,
    CartServiceProvider,
    MenuServiceProvider,
    FCM,
    FirebaseProvider
  ]
})
export class AppModule {}
