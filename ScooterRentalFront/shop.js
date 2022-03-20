import { Scooter } from "./scooter.js";

export class Shop {
  constructor(shopID, shopName, Capacity, scooters) {
    this.shopID = shopID;
    this.shopName = shopName;
    this.Capacity = Capacity;
    this.currCapacity = 0;
    this.scooters = scooters;
  }

  drawShop(host) {
    this.drawShopContainer(host);
    shopCont = document.getElementsByClassName("shopContainer").item(0);
    this.drawShopNameSpace(shopCont); //treba da se crta u shopContainer
    this.drawShopScooterSpace(shopCont); //treba da se crta u shopContainer

    shopSctSpc = document.getElementsByClassName("shopScooterSpace").item(0);
    this.scooters.forEach((scooter) => {
      scooter.drawScooterContainer(shopSctSpc); //treba da se crta u shopScooterSpace
    });
  }

  drawShopContainer(host) {
    this.shopContainer = document.createElement("div");
    this.shopContainer.className = "shopContainer";
    this.shopContainer.innerHTML = "EMPTY"; //placeholder
    host.appendChild(this.shopContainer);
  }
  drawShopNameSpace(host) {
    this.shopNameSpace = document.createElement("div");
    this.shopNameSpace.className = "shopNameSpace";
    this.shopNameSpace.innerHTML = "SHOP NAME SPACE"; //placeholder
    host.appendChild(this.shopNameSpace);
  }
  drawShopScooterSpace(host) {
    this.shopScooterSpace = document.createElement("div");
    this.shopScooterSpace.className = "shopScooterSpace";
    this.shopScooterSpace.innerHTML = "SHOP SCOOTER SPACE"; //placeholder
    host.appendChild(this.shopScooterSpace);
  }
}
