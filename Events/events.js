// sündmus on brauseri teade tegevuse kohta, mis toimub veebilehel.
// sündmusted võivad olla näiteks hiireklõüsud, klaviatuuris vajutused,
// lehe laadminine või vormis esitamine

const clickButton = document.getElementById("click-button");
const clickResult = document.getElementById("click-result");
const tardegResult = document.getElementById("target-result");

let click = 0;
function countClicks(event) {
    click++;
    clickResult.textContent = 
    "Klõpsus" + click;
    tardegResult.textContent = 
    "type: " + event.type + 
    ", target: " + 
    event.target.tagName +
    ",currentTarget: " + event.currentTarget.tagName;


}
clickButton.addEventListener("click", countClicks);
