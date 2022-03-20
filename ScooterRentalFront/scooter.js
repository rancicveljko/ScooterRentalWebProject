export class Scooter {
  constructor(scooterID, propulsion) {
    this.scooterID = scooterID;
    this.propulsion = propulsion;
  }

  drawScooterContainer(host) {
    this.scooterContainer = document.createElement("div");
    this.scooterContainer.className = "scooterContainer";
    this.scooterContainer.innerHTML = "SCOOTER CONTAINER";
    host.appendChild(this.scooterContainer);
  }
}
