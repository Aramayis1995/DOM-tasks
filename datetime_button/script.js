let buttonConteiner = document.querySelector(".button");
buttonConteiner.addEventListener("click", () => {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  dateConteiner.innerText = `${sec}.${min}.${hours}.${day}.${month}.${year}`;
});

let buttonFixConteiner = document.querySelector(".fixButton");
let divConteiner = document.querySelector(".fixHeader");
buttonFixConteiner.addEventListener("click", () => {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let paragraph = document.createElement("p");
  paragraph.innerText = `${sec}.${min}.${hours}.${day}.${month}.${year}`;
  divConteiner.append(paragraph);
});
