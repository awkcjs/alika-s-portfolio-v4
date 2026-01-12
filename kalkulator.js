const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (value) => {
  if (!value) return;

  if (value === "=") {
    try {
      output = eval(output.replace("%", "/100"));
    } catch {
      output = "Error";
    }
  } else if (value === "AC") {
    output = "";
  } else if (value === "DEL") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button.dataset.value);
  });
});
