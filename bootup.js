function InitMemManagement() {
  console.log("preparing memory management");
}

function Boot() {
  try {
    console.log("booting up...");
    InitMemManagement();
    MainKernel();
    return;
  } catch (e) {
    document.write("Error has occoured.<br>Error Message : " + e.Message);
    console.log("boot error!");
  }
}


Boot();
