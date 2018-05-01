import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
declare var google;

@IonicPage()
@Component({
  selector: "page-store-map",
  templateUrl: "store-map.html"
})
export class StoreMapPage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StoreMapPage");
    this.loadMap();
  }

  loadMap() {
    var raghuleelaMall = { lat: 19.0636, lng: 72.9971 };
    let latLng = new google.maps.LatLng(raghuleelaMall);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content =
      "<h4>Future Tech Store</h4><p>Online Future Store, Vashi, Navi Mumbai</p>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });
  }
}
