import { Shop } from "./shop2.js";
import { Scooter } from "./scooter2.js";
import { ReservationForms } from "./reservationForms.js";
import { CreateForms } from "./createForms.js";
import { Fetches } from "./fetches.js";
import { RemoveForms } from "./removeForms.js";

//privremeno
Shop.drawShopsContainer(document.body);

const fetches = new Fetches();
fetches.getAllShops();
fetches.getAllScooters();

// // Shop1 Example
// const sct1 = new Scooter(1, "electric");
// const sct2 = new Scooter(2, "acoustic");

// const scooters = [sct1, sct2];

// const shop1 = new Shop(1, "Shop1", 10, scooters);
// shop1.drawShop();

// // Shop2 Example
// const sct3 = new Scooter(3, "by_leg");
// const sct4 = new Scooter(4, "gas");
// const sct5 = new Scooter(5, "wind_power");
// const scooters2 = [sct3, sct4, sct5];

// const shop2 = new Shop(2, "Shop2", 5, scooters2);
// shop2.drawShop();

// Customer forms
const reservationForms = new ReservationForms();
reservationForms.setReservationFormsContainer(document.body);
reservationForms.fetches.setShopsRefs(fetches.shopsRefs);
reservationForms.drawMakeReservationForm();
reservationForms.drawCheckReservationForm();

// Create forms
const createForms = new CreateForms();
createForms.drawCreateForms();
createForms.fetches.setShopsRefs(fetches.shopsRefs);

// Remove forms
const removeForms = new RemoveForms();
removeForms.fetches.setShopsRefs(fetches.shopsRefs);
removeForms.drawRemoveForms();
