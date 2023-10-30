import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["her", "his", "their", "our", "my"];
let adj = ["pretty", "hairy", "small", "great", "bad"];
let noun = ["book", "leg", "table", "box", "cat", "dog"];
let dom = [".com", ".org", ".co", ".gov", ".edu"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < dom.length; m++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${dom[m]}`);
      }
    }
  }
}
