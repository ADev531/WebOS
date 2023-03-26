function InitMemManagement() {
  console.log("preparing memory management");
}

var kernelExecuted = false;

function Boot() {
  try {
    console.log("booting up...");
    InitMemManagement();
    let timer = setTimeout(function() {
      if (!kernelExecuted) {
        mainKernel();
        kernelExecuted = true;
      }
    }, 800);
    return;
  } catch (e) {
    document.write("Error has occoured.<br>Error Message : " + e.Message + "<br>Stack : " + e.Stack);
    console.log("boot error!");
  }
}

document.addEventListener("DOMContentLoaded", Boot);
