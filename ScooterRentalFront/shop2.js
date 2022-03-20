export class Shop {
  constructor(shopID, shopName, capacity, scooters) {
    this.shopID = shopID;
    this.shopName = shopName;
    this.maxCapacity = capacity;
    this.scooters = scooters;
    this.currCapacity = this.scooters.length;
  }

  static shopsContainer = null;

  drawShop() {
    const shopsContainer = document.querySelector(".shopsContainer");

    const shopContainer = this.drawShopContainer(shopsContainer);
    this.drawShopNameSpace(shopContainer);
    const shopScooterSpace = this.drawScooterSpace(shopContainer);
    this.drawScooters(shopScooterSpace);
  }

  static drawShopsContainer(host) {
    const shopsContainer = document.createElement("div");
    shopsContainer.className = "shopsContainer";
    host.appendChild(shopsContainer);
  }

  drawShopContainer(host) {
    const shopContainer = document.createElement("div");
    shopContainer.className = "shopContainer";
    host.appendChild(shopContainer);
    return shopContainer;
  }

  drawShopNameSpace(host) {
    const shopNameSpace = document.createElement("div");
    shopNameSpace.className = "shopNameSpace";

    const shopNameHeader = document.createElement("h2");
    shopNameHeader.className = "shopNameHeader";
    shopNameHeader.innerHTML = this.shopName;
    shopNameSpace.appendChild(shopNameHeader);

    host.appendChild(shopNameSpace);
  }

  drawScooterSpace(host) {
    const shopScooterSpace = document.createElement("div");
    shopScooterSpace.className = "shopScooterSpace";

    //dodaj table za skutere

    host.appendChild(shopScooterSpace);
    return shopScooterSpace;
  }

  drawScooters(host) {
    this.scooters.forEach((elm) => {
      elm.drawScooterContainer(host);
    });
  }
}
