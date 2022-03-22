import { Scooter } from "./scooter2.js";
import { Shop } from "./shop2.js";

export class Fetches {
  constructor() {
    this.shopsRefs = {}; // nije static i onda createForms nema refs
  }

  setShopsRefs(shopsRefs) {
    this.shopsRefs = shopsRefs;
  }

  getShopRefs() {
    return this.shopsRefs;
  }

  async getAllShops() {
    // p = promise
    await fetch("https://localhost:5001/ScooterRental/GetAllShops").then(
      (p) => {
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
      }
    );
  }

  async getAllScooters() {
    await fetch("https://localhost:5001/ScooterRental/GetAllScooters").then(
      (p) => {
        p.json().then((allScts) => {
          allScts.forEach((sct) => {
            // console.log(this.shopsRefs[sct.shop.shopID]);
            const newSct = new Scooter(sct.scooterID, sct.propulsion);
            this.shopsRefs[sct.shop.shopID].scooters.push(newSct);
            // this.shopsRefs[sct.shop.shopID].drawScooters(
            //   this.shopsRefs[sct.shop.shopID].shopScooterSpace
            // );
          });
          Object.values(this.shopsRefs).forEach((s) => {
            s.drawScooters(s.shopScooterSpace);
          });
        });
      }
    );
  }

  addShop(sName, sCapacity) {
    // if (typeof sName !== typeof String || typeof sCapacity !== Number) {
    //   throw new Error(
    //     "To add a shop, you need to pass a String type argument and a Number type agrument (check server documentation)"
    //   );
    // }

    const addShopDTO = { shopName: sName, capacity: sCapacity };

    fetch("https://localhost:5001/ScooterRental/AddShop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addShopDTO),
    }).then((p) => {
      if (p.status !== 200) {
        alert("A problem occurred while attemping to execute AddShop");
      }
    });

    // re render
    this.shopsRefs[1].shopContainer.parentNode.innerHTML = "";
    this.getAllShops();
    this.getAllScooters();
  }

  addScooterToShop(shopID, propulsion) {
    // if (typeof shop !== typeof Shop || typeof scooter !== typeof Scooter) {
    //   throw new Error(
    //     "To add a scooter to a shop, you need to pass a Shop type argument and a Scooter type argument (check server documentation)"
    //   );
    // }

    const addScooterToShopDTO = {
      shopID: shopID,
      propulsion: propulsion,
    };

    // console.log(this.shopsRefs[1]);

    fetch("https://localhost:5001/ScooterRental/AddScooterToShop", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addScooterToShopDTO),
    }).then((p) => {
      if (p.status !== 200) {
        alert("A problem occurred while executing AddScooterToShop");
      }
    });

    // re render
    this.shopsRefs[1].shopContainer.parentNode.innerHTML = "";
    this.getAllShops();
    this.getAllScooters();
  }

  updateShopCapacity(shopID, newCapacity) {
    const updateShopCapacityDTO = { shopID: shopID, capacity: newCapacity };

    fetch("https://localhost:5001/ScooterRental/UpdateShopCapacity", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateShopCapacityDTO),
    }).then((p) => {
      if (p.status !== 200) {
        alert("A problem occurred while executing UpdateShopCapacity");
      } else {
        alert("Successfully updated shop to new capacity.");
      }
    });
  }

  removeScooters(scooterIDs) {
    // console.log(this.shopsRefs);

    const removeScootersDTO = { scooterIDs: scooterIDs };

    fetch("https://localhost:5001/ScooterRental/RemoveScootersFromShop", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(removeScootersDTO),
    }).then((p) => {
      if (p.status !== 200) {
        alert("A problem occurred while executing RemoveScooters");
      } else {
        alert("Successfully removed scooters.");
      }
    });

    // re render
    this.shopsRefs[1].shopContainer.parentNode.innerHTML = "";
    this.getAllShops();
    this.getAllScooters();
  }

  makeReservation(shopID, customerName, scooterIDs, rentedFrom, rentedTo) {
    const reservationDTO = {
      customerName: customerName,
      shopID: shopID,
      scooterIDs: scooterIDs,
      rentedFrom: rentedFrom,
      rentedTo: rentedTo,
    };

    // console.log(JSON.stringify(reservationDTO));
    fetch("https://localhost:5001/ScooterRental/CreateReservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationDTO),
    }).then((p) => {
      if (p.status !== 200) {
        alert("A problem occurred while executing CreateReservation");
      } else {
        alert("Successfully made a reservation");
      }
    });
  }
}
