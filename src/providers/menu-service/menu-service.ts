import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import Promise from "promise-polyfill";

@Injectable()
export class MenuServiceProvider {
  cafe: any[] = [
    {
      id: "cof",
      name: "Coffee",
      description: "The classic standard, our exclusive select blend",
      img: "assets/img/coffee.jpg",
      small: 1.5,
      medium: 2.5,
      large: 3.25
    },

    {
      id: "lat",
      name: "Latte",
      description: "A blend of espresso, steam milk, and foam",
      img: "assets/img/latte.jpg",
      small: 2.0,
      medium: 3.0,
      large: 3.75
    },

    {
      id: "moc",
      name: "Mocha",
      description: "Espresso, melted chocolate, and steamed milk",
      img: "assets/img/mocha.jpg",
      small: 2.3,
      medium: 3.15,
      large: 4.0
    },

    {
      id: "esp",
      name: "Espresso",
      description: "The classic espresso",
      img: "assets/img/espresso.jpg",
      small: 1.75,
      medium: 2.5,
      large: 3.5
    },

    {
      id: "cap",
      name: "Cappuccino",
      description: "Espresso, steamed milk, and a layer of foam",
      img: "assets/img/cappuccino.jpg",
      small: 1.85,
      medium: 2.75,
      large: 3.65
    },

    {
      id: "ame",
      name: "Americano",
      description: "Espresso and hot water",
      img: "assets/img/americano.jpg",
      small: 1.6,
      medium: 2.5,
      large: 3.45
    },

    {
      id: "mac",
      name: "Macchiato",
      description: "Espresso topped with foamed milk",
      img: "assets/img/macchiato.jpg",
      small: 2.1,
      medium: 3.05,
      large: 3.9
    }
  ];
  constructor() {
    console.log("Hello MenuServiceProvider Provider");
  }
  getCafeDB() {
    return Promise.resolve(this.cafe);
  }
  getOne(search) {
    let tmp = this.cafe.map(x => x.id).indexOf(search);
    let single = this.cafe[tmp];
    return Promise.resolve(single);
  }
}
