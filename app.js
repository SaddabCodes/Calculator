document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector('input[name="display"]');
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.value === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (this.value === "AC") {
        display.value = "";
      } else if (this.value === "DE") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += this.value;
      }
    });
  });
});
