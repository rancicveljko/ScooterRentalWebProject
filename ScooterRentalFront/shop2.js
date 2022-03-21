export class Shop {
  constructor(shopID, shopName, capacity, scooters) {
    this.shopID = shopID;
    this.shopName = shopName;
    this.maxCapacity = capacity;
    this.scooters = scooters;
    this.currCapacity = this.scooters.length;
    this.shopContainer = null;
    this.shopScooterSpace = null;
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
    this.shopContainer = document.createElement("div");
    this.shopContainer.className = "shopContainer";
    host.appendChild(this.shopContainer);
    return this.shopContainer;
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
    this.shopScooterSpace = document.createElement("div");
    this.shopScooterSpace.className = "shopScooterSpace";

    host.appendChild(this.shopScooterSpace);
    return this.shopScooterSpace;
  }

  drawScooters(host) {
    this.scooters.forEach((elm) => {
      elm.drawScooterContainer(host);
    });
  }
}
