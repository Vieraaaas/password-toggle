const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  if (input.type === "text") {
    input.setAttribute("type", "password");
    button.innerText = "Show Password";
  } else {
    input.setAttribute("type", "text");
    button.innerText = "Hide Password";
  }
});
