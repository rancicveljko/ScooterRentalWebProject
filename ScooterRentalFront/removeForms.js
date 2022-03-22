import { Fetches } from "./fetches.js";

export class RemoveForms {
  constructor() {
    this.removeFormsContainer = null;
    this.removeShopFormContainer = null;
    this.updateShopCapacityFormContainer = null;
    this.removeScootersFormContainer = null;

    this.fetches = new Fetches();
  }

  drawRemoveForms() {
    if (this.removeFormsContainer === null) {
      this.drawRemoveFormsContainer();
    }
    this.drawRemoveShopForm();
    this.drawUpdateShopCapacityForm();
    this.drawRemoveScootersForm();
  }

  drawRemoveFormsContainer() {
    this.removeFormsContainer = document.createElement("div");
    this.removeFormsContainer.className = "removeFormsContainer";
    document.body.appendChild(this.removeFormsContainer);
  }

  drawRemoveShopForm() {
    // remove shop form container
    this.removeShopFormContainer = document.createElement("div");
    this.removeShopFormContainer.className = "removeShopFormContainer";
    this.removeFormsContainer.appendChild(this.removeShopFormContainer);

    // remove shop form
    const removeShopForm = document.createElement("form");
    removeShopForm.className = "removeShopForm";
    this.removeShopFormContainer.appendChild(removeShopForm);

    //shopname container
    const shopNameContainer = document.createElement("div");
    shopNameContainer.className = "shopNameContainer";
    removeShopForm.appendChild(shopNameContainer);

    const lblShopName = document.createElement("label");
    lblShopName.className = "lblShopName";
    lblShopName.innerHTML = "Shop name:";
    shopNameContainer.appendChild(lblShopName);

    const txtShopName = document.createElement("input");
    txtShopName.className = "txtShopName";
    txtShopName.type = "text";
    shopNameContainer.appendChild(txtShopName);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    removeShopForm.appendChild(buttonsContainer);

    //remove shop button
    const removeShopButton = document.createElement("button");
    removeShopButton.className = "removeShopButton";
    removeShopButton.type = "button";
    removeShopButton.innerHTML = "Remove shop";

    removeShopButton.onclick = (ev) => {
      // delete shop fetch
    };

    buttonsContainer.appendChild(removeShopButton);
  }

  drawUpdateShopCapacityForm() {
    // update shop capacity form container
    this.updateShopCapacityFormContainer = document.createElement("div");
    this.updateShopCapacityFormContainer.className = "updateShopCapacityForm";
    this.removeFormsContainer.appendChild(this.updateShopCapacityFormContainer);

    // increase shop capacity form
    const updateShopCapacityForm = document.createElement("form");
    updateShopCapacityForm.className = "updateShopCapacityForm";
    this.updateShopCapacityFormContainer.appendChild(updateShopCapacityForm);

    //shopname container
    const shopNameContainer = document.createElement("div");
    shopNameContainer.className = "shopNameContainer";
    updateShopCapacityForm.appendChild(shopNameContainer);

    const lblShopName = document.createElement("label");
    lblShopName.className = "lblShopName";
    lblShopName.innerHTML = "Shop name:";
    shopNameContainer.appendChild(lblShopName);

    const txtShopName = document.createElement("input");
    txtShopName.className = "txtShopName";
    txtShopName.type = "text";
    shopNameContainer.appendChild(txtShopName);

    // shopCapacity container
    const shopCapacityContainer = document.createElement("div");
    shopCapacityContainer.className = "shopCapacityContainer";
    updateShopCapacityForm.appendChild(shopCapacityContainer);

    const lblShopCapacity = document.createElement("label");
    lblShopCapacity.className = "lblShopCapacity";
    lblShopCapacity.innerHTML = "New shop capacity:";
    shopCapacityContainer.appendChild(lblShopCapacity);

    const txtShopCapacity = document.createElement("input");
    txtShopCapacity.className = "txtShopCapacity";
    txtShopCapacity.type = "text";
    shopCapacityContainer.appendChild(txtShopCapacity);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    updateShopCapacityForm.appendChild(buttonsContainer);

    // buttons
    const updateShopCapacityButton = document.createElement("button");
    updateShopCapacityButton.className = "updateShopCapacityButton";
    updateShopCapacityButton.type = "button";
    updateShopCapacityButton.innerHTML = "Update shop capacity";

    updateShopCapacityButton.onclick = (ev) => {
      // fetch za shop update

      const txtShopName = document.querySelectorAll(".txtShopName");
      // console.log(txtShopName[3].value);
      const shopName = txtShopName[3].value;
      const shopID = Object.keys(this.fetches.shopsRefs).find(
        (key) => this.fetches.shopsRefs[key].shopName === shopName
      );

      const txtShopCapacity = document.querySelectorAll(".txtShopCapacity");
      const shopCapacity = txtShopCapacity[1].value;

      this.fetches.updateShopCapacity(shopID, shopCapacity);
    };

    buttonsContainer.appendChild(updateShopCapacityButton);
  }

  drawRemoveScootersForm() {
    // remove scooters form container
    this.removeScootersFormContainer = document.createElement("div");
    this.removeScootersFormContainer.className = "removeScootersFormContainer";
    this.removeFormsContainer.appendChild(this.removeScootersFormContainer);

    // remove scooters form
    const removeScootersForm = document.createElement("form");
    removeScootersForm.className = "removeScootersForm";
    this.removeScootersFormContainer.appendChild(removeScootersForm);

    //shopname container
    const shopNameContainer = document.createElement("div");
    shopNameContainer.className = "shopNameContainer";
    removeScootersForm.appendChild(shopNameContainer);

    const lblShopName = document.createElement("label");
    lblShopName.className = "lblShopName";
    lblShopName.innerHTML = "Shop name:";
    shopNameContainer.appendChild(lblShopName);

    const txtShopName = document.createElement("input");
    txtShopName.className = "txtShopName";
    txtShopName.type = "text";
    shopNameContainer.appendChild(txtShopName);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    removeScootersForm.appendChild(buttonsContainer);

    // buttons
    const removeScootersButton = document.createElement("button");
    removeScootersButton.className = "removeScootersButton";
    removeScootersButton.type = "button";
    removeScootersButton.innerHTML = "Remove scooters";

    removeScootersButton.onclick = (ev) => {
      // fetch za remove scooters
      const txtShopName = document.querySelectorAll(".txtShopName");
      const shopName = txtShopName[4].value;
      const shopID = Object.keys(this.fetches.shopsRefs).find(
        (key) => this.fetches.shopsRefs[key].shopName === shopName
      );

      const scooterIDS = this.fetches.shopsRefs[shopID].scooters
        .filter((sct) => sct.selected === true)
        .map((sct) => sct.scooterID);

      // console.log(scooterIDS);
      this.fetches.removeScooters(scooterIDS);
    };

    buttonsContainer.appendChild(removeScootersButton);
  }
}
