const serverUrl = 'https://api.genderize.io';
let gender;

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".otput");

button.addEventListener("click", () => {
  if (input.value !== "") {
    gender = fetch(`${serverUrl}?name=${input.value}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        output.textContent = result.gender;
      });
  }
})
