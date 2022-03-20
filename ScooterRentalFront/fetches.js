import { Scooter } from "./scooter2.js";
import { Shop } from "./shop2.js";

export class Fetches {
  constructor() {
    this.shopsRefs = {};
  }

  getAllShops() {
    // p = promise
    fetch("https://localhost:5001/ScooterRental/GetAllShops").then((p) => {
      p.json().then((allShops) => {
        allShops.forEach((shop) => {
          const newShop = new Shop(
            shop.shopID,
            shop.shopName,
            shop.capacity,
            []
          );
          newShop.drawShop();
          this.shopsRefs[newShop.shopID] = newShop;
        });
      });
    });
  }

  getAllScooters() {
    fetch("https://localhost:5001/ScooterRental/GetAllScooters").then((p) => {
      p.json().then((allScts) => {
        allScts.forEach((sct) => {
          // console.log(sct);
          const newSct = new Scooter(sct.scooterID, sct.propulsion);
          this.shopsRefs[sct.shop.shopID].scooters.push(newSct);
          // this.shopsRefs[sct.shop.shopID].remove();
          this.shopsRefs[sct.shop.shopID].drawShop();
        });
      });
    });
  }

  addShop(shop) {
    if (typeof shop !== typeof Shop) {
      throw new Error(
        "To add a shop, you need to pass a Shop type argument (check server documentation)"
      );
    }

    const addShopDTO = { shopName: shop.shopName, capacity: shop.capacity };

    fetch("https://localhost:5001/ScooterRental/AddShop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addShopDTO),
    });
  }

  addScooterToShop(shop, scooter) {
    if (typeof shop !== typeof Shop || typeof scooter !== typeof Scooter) {
      throw new Error(
        "To add a scooter to a shop, you need to pass a Shop type argument and a Scooter type argument (check server documentation)"
      );
    }

    const addScooterToShopDTO = {
      shopID: shop.shopID,
      propulsion: scooter.propulsion,
    };

    fetch("https://localhost:5001/ScooterRental/AddScooterToShop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addScooterToShopDTO),
    });
  }
}
