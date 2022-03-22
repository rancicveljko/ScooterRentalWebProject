import { Fetches } from "./fetches.js";

export class CreateForms {
  constructor() {
    this.createFormsContainer = null;
    this.addShopFormContainer = null;
    this.addScooterFormContainer = null;
    this.fetches = new Fetches();
  }

  drawCreateForms() {
    if (this.createFormsContainer === null) {
      this.drawCreateFormsContainer();
    }
    this.drawAddShopForm();
    this.drawAddScooterForm();
  }

  drawCreateFormsContainer() {
    this.createFormsContainer = document.createElement("div");
    this.createFormsContainer.className = "createFormsContainer";
    document.body.appendChild(this.createFormsContainer);
  }

  drawAddShopForm() {
    // add shop form container
    this.addShopFormContainer = document.createElement("div");
    this.addShopFormContainer.className = "addShopFormContainer";
    this.createFormsContainer.appendChild(this.addShopFormContainer);

    //add shop form
    const addShopForm = document.createElement("form");
    addShopForm.className = "addShopForm";
    this.addShopFormContainer.appendChild(addShopForm);

    //shopname container
    const shopNameContainer = document.createElement("div");
    shopNameContainer.className = "shopNameContainer";
    addShopForm.appendChild(shopNameContainer);

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
    shopCapacityContainer.className = "shopCapacity";
    addShopForm.appendChild(shopCapacityContainer);

    const lblShopCapacity = document.createElement("label");
    lblShopCapacity.className = "lblShopCapacity";
    lblShopCapacity.innerHTML = "Capacity:";
    shopCapacityContainer.appendChild(lblShopCapacity);

    const txtShopCapacity = document.createElement("input");
    txtShopCapacity.className = "txtShopCapacity";
    txtShopCapacity.type = "text";
    shopCapacityContainer.appendChild(txtShopCapacity);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    addShopForm.appendChild(buttonsContainer);

    //add shop button
    const addShopButton = document.createElement("button");
    addShopButton.className = "addShopButton";
    addShopButton.type = "button";
    addShopButton.innerHTML = "Add a shop";

    addShopButton.onclick = (ev) => {
      const txtShopName = document.querySelector(".txtShopName");
      const shopName = txtShopName.value;

      const txtShopCapacity = document.querySelector(".txtShopCapacity");
      const shopCapacity = txtShopCapacity.value;

      // console.log(shopName, shopCapacity);
      this.fetches.addShop(shopName, shopCapacity);
    };

    buttonsContainer.appendChild(addShopButton);
  }

  drawAddScooterForm() {
    //add scooter form container
    this.addScooterFormContainer = document.createElement("div");
    this.addScooterFormContainer.className = "addScooterFormContainer";
    this.createFormsContainer.appendChild(this.addScooterFormContainer);

    // add scooter form
    const addScooterForm = document.createElement("form");
    addScooterForm.className = "addScooterForm";
    this.addScooterFormContainer.appendChild(addScooterForm);

    // scooter propulsion container
    const scooterPropulsionContainer = document.createElement("div");
    scooterPropulsionContainer.className = "scooterPropulsionContainer";
    addScooterForm.appendChild(scooterPropulsionContainer);

    const lblScooterPropulsion = document.createElement("label");
    lblScooterPropulsion.className = "lblScooterPropulsion";
    lblScooterPropulsion.innerHTML = "Propulsion:";
    scooterPropulsionContainer.appendChild(lblScooterPropulsion);

    const txtScooterPropulsion = document.createElement("input");
    txtScooterPropulsion.className = "txtScooterPropulsion";
    txtScooterPropulsion.type = "text";
    scooterPropulsionContainer.appendChild(txtScooterPropulsion);

    //shopname container
    const shopNameContainer = document.createElement("div");
    shopNameContainer.className = "shopNameContainer";
    addScooterForm.appendChild(shopNameContainer);

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
    addScooterForm.appendChild(buttonsContainer);

    //add scooter button
    const addScooterButton = document.createElement("button");
    addScooterButton.className = "addScooterButton";
    addScooterButton.type = "button";
    addScooterButton.innerHTML = "Add a scooter";

    addScooterButton.onclick = (ev) => {
      const txtShopName = document.querySelectorAll(".txtShopName");
      const shopName = txtShopName[1].value;
      const shopID = Object.keys(this.fetches.shopsRefs).find(
        (key) => this.fetches.shopsRefs[key].shopName === shopName
      );

      if (
        this.fetches.shopsRefs[shopID].maxCapacity ===
        this.fetches.shopsRefs[shopID].currCapacity
      ) {
        throw new Error(
          "This shop's capacity is full, please refrain from adding new scooters."
        );
      }

      // console.log(shopID);

      const txtScooterPropulsion = document.querySelector(
        ".txtScooterPropulsion"
      );
      const scooterPropulsion = txtScooterPropulsion.value;

      this.fetches.addScooterToShop(shopID, scooterPropulsion);
    };

    buttonsContainer.appendChild(addScooterButton);
  }
}
