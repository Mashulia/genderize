import { UI_ELEMENTS } from "./view.js";

const SERVER_URL = 'https://api.genderize.io';
let userName;


function getUserGender(output, name) {
  let url = `${SERVER_URL}?name=${name}`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      output.innerHTML = `${name} - ${result.gender}`;
    })
    .catch(alert);
}

function clearField(field) {
  field.value = "";
}

UI_ELEMENTS.FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (UI_ELEMENTS.INPUT.value) {
    userName = UI_ELEMENTS.INPUT.value
    getUserGender(UI_ELEMENTS.OUTPUT, userName);
    clearField(UI_ELEMENTS.INPUT);
  }
})