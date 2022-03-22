export class Scooter {
  constructor(scooterID, propulsion) {
    this.scooterID = scooterID;
    this.propulsion = propulsion;
    this.selected = false;
  }

  drawScooterContainer(host) {
    const scooterContainer = document.createElement("div");
    scooterContainer.className = "scooterContainer";
    const description = document.createElement("abbr");
    description.title = this.propulsion;
    description.innerHTML = this.propulsion;
    scooterContainer.appendChild(description);

    scooterContainer.scooter = this;
    scooterContainer.selected = false;
    scooterContainer.addEventListener("click", function (ev) {
      if (scooterContainer.selected === false) {
        scooterContainer.style.backgroundColor = "lightgray";
        scooterContainer.scooter.selected = true;
        scooterContainer.selected = true;
        // console.log(this.selected);
        // this.selected = true; // NE MENJA PROPERTY selected KAD SE POZOVE IZ DRUGE KLASE
      } else {
        scooterContainer.style.backgroundColor = "white";
        scooterContainer.selected = false;
        scooterContainer.scooter.selected = false;
        // console.log(this.selected);
        // this.selected = false;
      }
    });

    host.appendChild(scooterContainer);
  }
}
