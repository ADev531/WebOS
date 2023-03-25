function Boot() {
  try {
    console.log("booting up...");
    InitMemManagement();
  } catch (e) {
    document.write("Error has occoured.<br>Error Message : " + e.Message);
    console.log("boot error!");
  }
}


Boot();
