import { getAllInfoByISO } from "iso-country-currency";

let moneda = getAllInfoByISO('AR').currency;
console.log(moneda);