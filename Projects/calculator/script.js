let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  let result;

  switch (operator.value) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number2 !== 0 ? number1 / number2 : "Error: Division by zero";
      break;
    default:
      result = "Error: Invalid operator";
  }

  
  document.body.innerHTML = `<h1 style="font-size: 3rem; text-align: center; margin-top: 100px;">Result: ${result}</h1>`;
});
