function removebioslogo() {
  document.getElementById("bootlogo").remove();
}

function addIcon(text) {
  let icon = document.createElement("button");
  icon.innerHTML = text;
  icon.style.border = "2px solid #e7e7e7";
  document.body.appendChild(icon);
}

function useSearchBar() {
  let search = document.createElement("input");
  search.placeholder = "Type text to search...";
  document.body.appendChild(search);
}

function changeLine() {
  document.body.appendChild(document.createElement("br"));
}

function mainKernel() {
  removebioslogo();
  useSearchBar();
  changeLine();
  addIcon("Kernel Debugging..")
}
