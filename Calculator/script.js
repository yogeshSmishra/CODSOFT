window.onload = function () {
    const input = document.getElementById("inputBox");
    const container = document.getElementById("container");
  
    container.addEventListener("click", function (e) {
      buttonClick(e.target.id);
    });
  
    document.getElementById("Button=").addEventListener("click", calculate);
    document.getElementById("ButtonC").addEventListener("click", erase);
  
    document.addEventListener("keydown", function (e) {
      const key = e.key;
      if ("0123456789+-*/().%".includes(key)) {
        input.value += key;
      } else if (key === "Enter") {
        calculate();
      } else if (key === "Backspace") {
        input.value = input.value.slice(0, -1);
      }
    });
  
    function buttonClick(buttonId) {
      if (buttonId !== "ButtonC" && buttonId !== "Button=") {
        const val = buttonId.replace("Button", "");
        if (val === "*") input.value += "*";
        else if (val === "x") input.value += "*";
        else input.value += val;
      }
    }
  
    function calculate() {
      if (input.value === ".") {
        alert("Please enter a valid expression.");
        return;
      }
      try {
        input.value = eval(input.value);
      } catch {
        alert("Invalid input");
      }
    }
  
    function erase() {
      input.value = "";
    }
  
    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    const themeText = document.querySelector(".theme-text");
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      themeText.textContent = document.body.classList.contains("dark") ? "Dark" : "Light";
    });
  };
  