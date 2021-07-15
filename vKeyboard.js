let keyLayout = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "backspace",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "enter",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "?",
  "space",
];

const keyboardContainer = document.querySelector(".keyboardContainer");
const input = document.querySelector(".enterText");
let ifCaps = false;

input.addEventListener("click", () => {
  keyboardContainer.classList.remove("hidden");
});

keyLayout.forEach((element) => {
  let key = document.createElement("BUTTON");
  key.classList.add("keys");
  addIconsAndSpaces(key, element, true);
  keyboardContainer.appendChild(key);
});
fillLowerKeys();

function createIconHTML(icon_name) {
  return `<i class="material-icons">${icon_name}</i>`;
}

function enterText(e) {
  input.value += e.target.innerHTML;
}

function backspace(e) {
  input.value = input.value.substr(0, input.value.length - 1);
}
function enter(e) {
  input.value += "\n";
}
function caps(e) {
  ifCaps = !ifCaps;
  ifCaps ? fillUpperKeys() : fillLowerKeys();
}
function space(e) {
  input.value += " ";
}

function fillUpperKeys() {
  let allKeys = document.getElementsByClassName("keys");
  for (let i = 0; i < allKeys.length; i++) {
    allKeys[i].innerHTML = keyLayout[i].toUpperCase();
    addIconsAndSpaces(allKeys[i], keyLayout[i], false);
  }
}

function fillLowerKeys() {
  let allKeys = document.getElementsByClassName("keys");
  for (let i = 0; i < allKeys.length; i++) {
    allKeys[i].innerHTML = keyLayout[i];
    addIconsAndSpaces(allKeys[i], keyLayout[i], false);
  }
}

function addIconsAndSpaces(key, element, bool) {
  let br = document.createElement("br");

  key.classList.add("keys");

  switch (element) {
    case "backspace":
      key.addEventListener("click", backspace);
      key.classList.add("wide");
      key.innerHTML = createIconHTML("backspace");
      break;
    case "space":
      key.addEventListener("click", space);
      bool && keyboardContainer.appendChild(br);
      key.classList.add("ultraWide");
      key.innerHTML = createIconHTML("space_bar");
      break;
    case "caps":
      key.addEventListener("click", caps);
      bool && keyboardContainer.appendChild(br);
      key.innerHTML = createIconHTML("keyboard_capslock");
      key.classList.add("wide");
      break;
    case "enter":
      key.addEventListener("click", enter);
      key.classList.add("wide");
      key.innerHTML = createIconHTML("keyboard_return");

      break;
    case "z":
      bool && keyboardContainer.appendChild(br);
      break;
    case "q":
      bool && keyboardContainer.appendChild(br);
      break;

    default:
      key.addEventListener("click", enterText);
  }
}

document.querySelector(".close").addEventListener("click", () => {
  keyboardContainer.classList.add("hidden");
});
