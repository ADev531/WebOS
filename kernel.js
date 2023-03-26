function removebioslogo() {
  document.getElementById("bootlogo").remove();
}

function addBtn(text) {
  let icon = document.createElement("button");
  icon.innerHTML = text;
  icon.style.border = "2px solid #e7e7e7";
  document.body.appendChild(icon);
}

function useSearchBar() {
  let search = document.createElement("input");
  search.placeholder = "Type text to search...";`
  search.id = "searchBar"
  document.body.appendChild(search);
}

function changeLine() {
  document.body.appendChild(document.createElement("br"));
}

function Search() {
  
}

function mainKernel() {
  removebioslogo();
  useSearchBar();
  addBtn("Search!").onclick = "Search(document.getElementById('searchBar'));"
  changeLine();
  addBtn("Kernel Debugging..")
}
