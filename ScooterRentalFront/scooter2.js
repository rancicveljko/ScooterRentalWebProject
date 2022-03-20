export class Scooter {
  constructor(scooterID, propulsion) {
    this.scooterID = scooterID;
    this.propulsion = propulsion;
    this.selected = false;
  }

  getSelected() {
    return this.selected;
  }

  drawScooterContainer(host) {
    const scooterContainer = document.createElement("div");
    scooterContainer.className = "scooterContainer";
    scooterContainer.innerHTML = this.propulsion;

    scooterContainer.addEventListener("click", function (ev) {
      if (this.selected === false) {
        scooterContainer.style.backgroundColor = "lightgray";
        this.selected = true; // NE MENJA PROPERTY selected KAD SE POZOVE IZ DRUGE KLASE
      } else {
        scooterContainer.style.backgroundColor = "white";
        this.selected = false;
      }
    });

    host.appendChild(scooterContainer);
  }
}
