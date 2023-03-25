function removebioslogo() {
  document.getElementById("bootlogo").remove();
}

function addAppIcon(text) {
  let icon = document.createElement("button");
  icon.innerHtml = text;
  document.body.appendChild(icon);
}

function MainKernel() {
  removebioslogo();
  addAppIcon("Kernel Debugging..")
}
