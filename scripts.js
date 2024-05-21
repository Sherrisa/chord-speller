const showNotesBtn = document.getElementById("showNotesBtn");
showNotesBtn.addEventListener("click", function () {
  // get user input for root value from drop-down box
  const rootDropdown = document.getElementById("root");
  const root = rootDropdown.options[rootDropdown.selectedIndex].value;
  console.log("The user selected the root: " + root);

  // get user input for chord quality values from drop-down box
  const qualityDropdown = document.getElementById("quality");
  const quality = qualityDropdown.options[qualityDropdown.selectedIndex].value;
  console.log("The user selected the chord: " + quality);

  // this method came from the documentation for the api
  const url = `https://piano-chords.p.rapidapi.com/chords/${root}/${quality}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e504979048msh8d90776cca6d94cp135557jsn88a032c4c69f",
      "X-RapidAPI-Host": "piano-chords.p.rapidapi.com",
    },
  };

  async function fetchChordNotes() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("You are now in the fetchChordNotes() function");
      console.log(result);

      // call the displayNotes() function and pass the result from the api
      showNotes(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchChordNotes();
});

function showNotes(result) {
  console.log("You are now in the showNotes() function");
  console.log(result.notes);

  // display the notes on the page
  const showNotes = document.getElementById("showNotes");
  showNotes.innerHTML = "";
  const para = document.createElement("p");
  para.textContent = result.notes.join(" - ");
  showNotes.appendChild(para);
}
