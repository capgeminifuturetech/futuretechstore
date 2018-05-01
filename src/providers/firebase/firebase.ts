import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FirebaseProvider {
  constructor(public http: HttpClient, public afd: AngularFireDatabase) {}

  getShoppingItems() {
    return this.afd.list("/shoppingItems/");
  }

  addItem(name) {
    this.afd.list("/shoppingItems/").push(name);
  }

  removeItem(id) {
    this.afd.list("/shoppingItems/").remove(id);
  }
}
