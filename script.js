const display = document.getElementById("display");
const buttons = document.querySelectorAll(".input button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        const result = eval(expression.replace(/x/g, "*"));
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = "Ngotak dikit lah kalo input";
        expression = "";
      }
    } else if (value === "C") {
      expression = "";
      display.textContent = "0";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.textContent = expression || "0";
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
