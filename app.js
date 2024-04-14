let input = document.getElementById("input");
let sum = document.getElementById("sum");

input.addEventListener("input", function () {
  let sumNumber = Number(input.value) + 4;

  localStorage.mySum = `${sumNumber}`;
  sum.innerText = localStorage.mySum;

});

sum.innerText = localStorage.mySum







