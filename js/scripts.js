function hideResults() {
  document.getElementById("Keanu-Reeves").setAttribute("class", "hidden");
  document.getElementById("Shrek").setAttribute("class", "hidden");
  document.getElementById("Donkey").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const haircolor = document.querySelector("input#hair-color").value;
    const bodytype = document.querySelector("input#body-type").value;

    if (age && haircolor && bodytype) {
      if (age >= 30 && haircolor === "blonde" && bodytype === "plump") {
        document.getElementById("Shrek").removeAttribute("class");
      } else if (age >= 40 && haircolor === "black" || bodytype === "fit") {
        document.getElementById("Keanu-Reeves").removeAttribute("class");
      } else if (age >= 30 && haircolor === "brown" && bodytype === "dragon") {
        document.getElementById("Donkey").removeAttribute("class");
        
      }
    }
  };
};