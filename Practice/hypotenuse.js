let a;
let b;
let c;

// a = window.prompt("Unesite vrednost za a :");
// a = Number(a);
// b = window.prompt("Unesite vrednost za b :");
// b = Number(b);
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 3));
// console.log("Vrednost hipotenuze B je:", c);

document.getElementById("potvrdiD").onclick = function () {
  a = document.getElementById("boxA").value;
  a = Number(a);

  b = document.getElementById("boxB").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("vrednostC").innerHTML =
    "Vrednost hipotenuze B je:" + c;
};
