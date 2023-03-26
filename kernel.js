let kernelzone = document.createElement("center");

function removebioslogo() {
  document.getElementById("bootlogo").remove();
}

function addBtn(text) {
  let icon = document.createElement("button");
  icon.innerHTML = text;
  icon.style.border = "2px solid #e7e7e7";
  kernelzone.appendChild(icon);
  return icon;
}

function useSearchBar() {
  let search = document.createElement("input");
  search.placeholder = "Type text to search...";
  search.id = "searchBar";
  kernelzone.appendChild(search);
}

function changeLine() {
  kernelzone.appendChild(document.createElement("br"));
}

function SearchValue(searchting) {
  window.open("https://www.google.com/search?q=" + searchting, '_blank');
}

function mainKernel() {
  document.body.appendChild(kernelzone);
  removebioslogo();
  useSearchBar();
  addBtn("Search").addEventListener("click", function() {
    SearchValue(document.getElementById('searchBar').value);
  });
  changeLine();
  addBtn("Kernel Debugging..").addEventListener("click", function() {
    let script = document.createElement("script");
    script.src = "https://adev531.github.io/WebOS/apps/kernel/debugger.js";
    document.body.appendChild(script);
  });
  addBtn("Run JS NativeApplication..").addEventListener("click", function() {
    var url = prompt("Enter JS Native App Link.", "https://adev531.github.io/WebOS/apps/welcome.js");
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  });
}
