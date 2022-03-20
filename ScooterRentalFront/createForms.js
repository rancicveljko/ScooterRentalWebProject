export class CreateForms {
  constructor() {
    this.createFormsContainer = null;
    this.addShopFormContainer = null;
    this.addScooterFormContainer = null;
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
    buttonsContainer.appendChild(addScooterButton);
  }
}
