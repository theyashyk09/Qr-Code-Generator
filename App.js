let main = document.getElementById("main");
let button = document.getElementById("submit");
let image = document.getElementById("img");
let text = document.getElementById("input");

button.addEventListener("click", () => {
  let textVal = text.value;
  if (!textVal) {
    text.style.border = "4px";
    text.style.borderColor = "red";
    text.style.borderStyle = "solid";
    return;
  } else if (textVal) {
    button.textContent = "Generating QR Code.....";

    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textVal}`;
    image.style.display = "block";

    image.addEventListener("load", () => {
      button.innerText = "Generate QR Code";
    });
  }

  text.addEventListener("keyup", () => {
    if (!text.value) {
      image.style.display = "none";
    }
  });
});
