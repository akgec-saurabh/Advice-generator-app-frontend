"use strict";
const proxy = "https://corsanywhere.herokuapp.com/";

// console.log(obj);

const dice = document.querySelector(".dice-container");

const quotes = document.querySelector(".quotes");
const advice = document.querySelector(".id");

dice.addEventListener("click", function () {
  console.log("click");
  let obj = fetch(proxy + "https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.text();
    })
    .then(function (response) {
      console.log(JSON.parse(response)["slip"]);
      advice.textContent = JSON.parse(response)["slip"]["id"];
      quotes.textContent = JSON.parse(response)["slip"]["advice"];
    })
    .catch(function (err) {
      console.log(err);
    });
});
