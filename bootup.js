function Boot() {
  try {
    InitMemManagement();
  } catch (e) {
    document.write("Error has occoured.<br>Error Message : " + e.Message);
  }
}

Boot();
