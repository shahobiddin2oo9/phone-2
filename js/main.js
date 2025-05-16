let hour = document.querySelector(".hour");
let charge = document.querySelector(".charge");
let phone = document.querySelector(".phone");
let icon = document.querySelector(".icon");
let chargeBatareyIcon = document.querySelector(".charge--batareyIcon");
let chatgegImgSpan = document.querySelector(".chatgeg--img-span");
let prevBtn = document.querySelector(".btn-prive");
let nextBtn = document.querySelector(".btn--next");
setInterval(() => {
  let date = new Date();
  let a = date.toLocaleTimeString();
  a = a.split(":").join(" : ").slice(0, 7);
  hour.textContent = a;
}, 400);

setInterval(() => {
  navigator.getBattery().then((a) => {
    charge.textContent = Math.round(a.level * 100);
    if (a.charging) {
      chargeBatareyIcon.style = "display: block;";
    } else {
      chargeBatareyIcon.style = "display: none;";
    }
  });
}, 600);

// setInterval(() => {
//   navigator.getBattery().then((a) => {
//     chatgegImgSpan.textContent = a.level * 100 + " %";
//   });
// }, 600);
// setTimeout(() => {
//   document.querySelector(".chatgeg--img-span").classList.add("charget--batary");
// }, 2000);
// setTimeout(() => {
//   document.querySelector(".chatgeg--img").classList.add("charget--batary");
// }, 2000);

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    history.back();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    history.go(1);
  });
}
