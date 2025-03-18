/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const a = 2;
const b = 7;
if (a > b) {
  console.log("a > b");
} else {
  console.log("b > a");
}

/* D2.js:10 b > a */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
 */

/* NON RISOLTO
 const z = 9;
if ((z = 5)) {
  console.log("equal");
} else {
  console.log("not-equal");
}
  */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num = 46;
const risultato = num % 5;
if (risultato > 0) {
  console.log(" non divisibile per 5");
} else {
  console.log("divisibile per 5");
}

/*D2.js:34  non divisibile per 5 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* NON RISOLTO
const c=8;
const d=9;
const e=72;
if (d=c || e=c) {
  console.log ("almeno uno condizione verificata");
} else {
  console.log ("almeno una condizione non verificata");
}
/*

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 54;
const freeShipping = 50;
const shipping = 10;
if (totalShoppingCart >= freeShipping) {
  console.log("spedizione gratuita!");
} else {
  console.log("shipping=10");
}
/* 
D2.js:66 spedizione gratuita!
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* const alfa = 8;
const beta = 25;
const gamma = 18;
if (alfa < beta && alfa < gamma && beta < gamma) {
  console.log("alfa<beta<gamma");
} else (alfa<beta && alfa<gamma && beta>gamma) {
   console.log ("alfa<gamma<beta");
   }
 */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof 78);
/* D2.js:100 number */

console.log(typeof "78");
/* D2.js:102 string */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const div = 54;
const result = num % 2;
if (result > 0) {
  console.log("numero dispari");
} else {
  console.log("numero pari");
}
/*
D2.js:115 numero pari
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
/* NON RISOLTO
me.city = Toronto;
console.log(me.city);
 */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* 
D2.js:123 {name: 'John', skills: Array(3)}name: "John"skills: (3) ['javascript', 'html', 'css'][[Prototype]]: Object
 */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log.me;

/* {name: 'John', skills: Array(3)}
name: "John"
skills: (3) ['javascript', 'html', vuota]
[[Prototype]]: Object */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numberList = [];
console.log(numberList);
numberList.unshift(1);
numberList.push(2, 3, 4, 5, 6, 7, 8, 9, 10);

/* D2.js:133
[]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: 7
7: 8
8: 9
9: 10
length: 10
*/

/* ESERCIZIO 15
 */

numberList.splice(9, 1, 100);
/* 
D2.js:133
[]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
6: 7
7: 8
8: 9
9: 100
length: 1
 */
