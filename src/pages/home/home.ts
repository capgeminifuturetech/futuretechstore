import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireAuth } from "angularfire2/auth";
import { FCM } from "@ionic-native/fcm";
import * as firebase from "firebase/app";

import { ItemPage } from "../item/item";
import { FirebaseProvider } from "./../../providers/firebase/firebase";
import { UserServiceProvider } from "../../providers/user-service/user-service";
declare var google;

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  lat: any;
  lng: any;
  raghuleelaFutureTechStore = { lat: 19.0636, lng: 72.9971 };
  nerulFutureTechStore = { lat: 19.033, lng: 73.0297 };
  rcityFutureTechStore = { lat: 19.01441, lng: 72.84794 };
  nashikFutureTechStore = { lat: 19.9975, lng: 73.7898 };

  products: Array<any>;
  loggedIn: any;
  checkOut: any;
  newItem = "";
  distance: any;
  distancekm: any;

  constructor(
    public navCtrl: NavController,
    public geo: Geolocation,
    public plateform: Platform,
    public firebaseProvider: FirebaseProvider,
    public afAuth: AngularFireAuth
  ) {
    this.geo
      .getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;

        this.distance = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(this.lat, this.lng),
          new google.maps.LatLng(
            this.raghuleelaFutureTechStore.lat,
            this.raghuleelaFutureTechStore.lng
          )
        );

        let watch = this.geo.watchPosition();
        watch.subscribe(data => {
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
          console.log(resp.coords.longitude + " " + resp.coords.latitude);
        });

        //Mile to KM : distance/ 0.62137
        //Neter to KM : distance/ 1000
        this.distancekm =
          Math.round(this.distance / 1000 * Math.pow(10, 2)) / Math.pow(10, 2);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });

    this.products = [
      {
        name: "Polo Shirt",
        price_discount: 5,
        price: 10,
        images: ["../../assets/img/T-Shirt.png"]
      },
      {
        name: "Germany Shirt",
        price_discount: 10,
        price: 10,
        images: ["../../assets/img/T-Shirt1.png"]
      },
      {
        name: "Germany Shoes",
        price_discount: 10,
        price: 20,
        images: ["../../assets/img/Shoes.png"]
      }
    ];

    this.loggedIn = "shivmuk@gmail.com";
  }

  viewItemDetails(product) {
    this.navCtrl.push(ItemPage, {
      product: product
    });
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  ngOnInit() {}

  shareProduct(product) {
    alert(product.name);
    return;
  }
}
