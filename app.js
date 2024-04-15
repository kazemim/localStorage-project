let input = document.getElementById("input");
let sum = document.getElementById("sum");

input.addEventListener("input", function () {
  let inputNumber = Number(input.value);
  let sumNumber = inputNumber + 4;

  localStorage.localInput = `${inputNumber}`;

  localStorage.localSum = `${sumNumber}`;
  sum.innerText = localStorage.localSum;

});

input.value = localStorage.localInput;
sum.innerText = localStorage.localSum;







