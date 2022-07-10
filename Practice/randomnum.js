document.getElementById("roll").onclick = function () {
  let a = Math.floor(Math.random() * 24) + 1;
  let b = Math.floor(Math.random() * 6) + 9;
  let c = Math.floor(Math.random() * 2002) + 0;

  document.getElementById("alabel").innerHTML = a;
  document.getElementById("blabel").innerHTML = b;
  document.getElementById("clabel").innerHTML = c;
};
