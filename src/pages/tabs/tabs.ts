import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { StoreMapPage } from "../store-map/store-map";
import { NotificationPage } from "../notification/notification";
import { ShoppingCartPage } from "../shopping-cart/shopping-cart";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = StoreMapPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = ShoppingCartPage;
  tab5Root: any = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
  }
}
