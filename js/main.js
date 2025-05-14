let hour = document.querySelector(".hour");
let charge = document.querySelector(".charge");
let phone = document.querySelector(".phone");
let icon = document.querySelector(".icon");

setInterval(() => {
  let date = new Date();
  let a = date.toLocaleTimeString();
  a = a.split(":").join(" : ").slice(0, 7);
  hour.textContent = a;
}, 400);
