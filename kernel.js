function removebioslogo() {
  document.getElementById("bootlogo").remove();
}

function addAppIcon(text) {
  let icon = document.createElement("button");
  icon.innerHTML = text;
  icon.style.border = "2px solid #e7e7e7";
  document.body.appendChild(icon);
}

function mainKernel() {
  removebioslogo();
  addAppIcon("Kernel Debugging..")
}
