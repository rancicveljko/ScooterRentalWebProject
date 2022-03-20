export class ReservationForms {
  constructor() {
    this.reservationFormsContainer = null;
    this.makeReservationFormContainer = null;
    this.checkReservationFormContainer = null;

    this.shopsRefsDict = null;
  }

  setShopsRefs(shops) {
    const sps = shops;
    this.shopsRefsDict = {};
    sps.forEach((elm) => {
      this.shopsRefsDict[elm.shopName] = elm.scooters;
    });
  }

  setReservationFormsContainer(host) {
    this.reservationFormsContainer = document.createElement("div");
    this.reservationFormsContainer.className = "reservationFormsContainer";
    host.appendChild(this.reservationFormsContainer);
  }

  drawMakeReservationForm() {
    this.makeReservationFormContainer = document.createElement("div");
    this.makeReservationFormContainer.className =
      "makeReservationFormContainer";
    this.reservationFormsContainer.appendChild(
      this.makeReservationFormContainer
    );

    const makeReservationForm = document.createElement("form");
    makeReservationForm.className = "makeReservationForm";
    this.makeReservationFormContainer.appendChild(makeReservationForm);

    //customerName
    const customerNameContainer = document.createElement("div");
    customerNameContainer.className = "customerNameContainer";
    makeReservationForm.appendChild(customerNameContainer);

    const lblCustomerName = document.createElement("label");
    lblCustomerName.className = "lblCustomerName";
    lblCustomerName.innerHTML = "Customer Name:";
    customerNameContainer.appendChild(lblCustomerName);

    const txtCustomerName = document.createElement("input");
    txtCustomerName.className = "txtCustomerName";
    txtCustomerName.setAttribute("type", "text");
    customerNameContainer.appendChild(txtCustomerName);

    //chosenShop
    const chosenShopContainer = document.createElement("div");
    chosenShopContainer.className = "chosenShopContainer";
    makeReservationForm.appendChild(chosenShopContainer);

    const lblChosenShop = document.createElement("label");
    lblChosenShop.className = "lblChosenShop";
    lblChosenShop.innerHTML = "Chosen shop:";
    chosenShopContainer.appendChild(lblChosenShop);

    const txtChosenShop = document.createElement("input");
    txtChosenShop.className = "txtChosenShop";
    txtChosenShop.setAttribute("type", "text");
    chosenShopContainer.appendChild(txtChosenShop);

    // rentedTo time
    const rentedToContainer = document.createElement("div");
    rentedToContainer.className = "rentedToContainer";
    makeReservationForm.appendChild(rentedToContainer);

    const lblRentedTo = document.createElement("label");
    lblRentedTo.className = "lblRentedTo";
    lblRentedTo.innerHTML = "Rented To:";
    rentedToContainer.appendChild(lblRentedTo);

    const timeRentedTo = document.createElement("input");
    timeRentedTo.className = "timeRentedTo";
    timeRentedTo.setAttribute("type", "time");
    rentedToContainer.appendChild(timeRentedTo);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    makeReservationForm.appendChild(buttonsContainer);

    //make a reservation button
    const btnMakeReservation = document.createElement("button");
    btnMakeReservation.className = "btnMakeReservation";
    btnMakeReservation.setAttribute("type", "button");
    btnMakeReservation.innerText = "Make a reservation";
    btnMakeReservation.onclick = (ev) => {
      // funkcija koja prosledjuje custonerName, ShopName i scooterID-ove selectovanih scootera

      const scooterIDS = this.shopsRefsDict[txtChosenShop.value];
      console.log(scooterIDS);
      // scooterIDS
      //   .filter((sct) => sct.selected === true)
      //   .map((sct) => sct.scooterID);
      // alert(`${txtCustomerName.value}, ${txtChosenShop.value}, ${scooterIDS}`);
    };
    buttonsContainer.appendChild(btnMakeReservation);
  }

  drawCheckReservationForm() {
    this.checkReservationFormContainer = document.createElement("div");
    this.checkReservationFormContainer.className =
      "checkReservationFormContainer";
    this.reservationFormsContainer.appendChild(
      this.checkReservationFormContainer
    );

    const checkReservationForm = document.createElement("form");
    checkReservationForm.className = "checkReservationForm";
    this.checkReservationFormContainer.appendChild(checkReservationForm);

    //customerName
    const customerNameContainer = document.createElement("div");
    customerNameContainer.className = "customerNameContainer";
    checkReservationForm.appendChild(customerNameContainer);

    const lblCustomerName = document.createElement("label");
    lblCustomerName.className = "lblCustomerName";
    lblCustomerName.innerHTML = "Customer Name:";
    customerNameContainer.appendChild(lblCustomerName);

    const txtCustomerName = document.createElement("input");
    txtCustomerName.className = "txtCustomerName";
    txtCustomerName.setAttribute("type", "text");
    customerNameContainer.appendChild(txtCustomerName);

    //chosenShop
    const chosenShopContainer = document.createElement("div");
    chosenShopContainer.className = "chosenShopContainer";
    checkReservationForm.appendChild(chosenShopContainer);

    const lblChosenShop = document.createElement("label");
    lblChosenShop.className = "lblChosenShop";
    lblChosenShop.innerHTML = "Chosen shop:";
    chosenShopContainer.appendChild(lblChosenShop);

    const txtChosenShop = document.createElement("input");
    txtChosenShop.className = "txtChosenShop";
    txtChosenShop.setAttribute("type", "text");
    chosenShopContainer.appendChild(txtChosenShop);

    //buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
    checkReservationForm.appendChild(buttonsContainer);

    //check a reservation button
    const btnCheckReservation = document.createElement("button");
    btnCheckReservation.className = "btnCheckReservation";
    btnCheckReservation.setAttribute("type", "button");
    btnCheckReservation.innerText = "Check";
    buttonsContainer.appendChild(btnCheckReservation);

    //cancel reservation button
    const btnCancelReservation = document.createElement("button");
    btnCancelReservation.className = "btnCheckReservation";
    btnCancelReservation.setAttribute("type", "button");
    btnCancelReservation.innerText = "Cancel";
    buttonsContainer.appendChild(btnCancelReservation);
  }
}
