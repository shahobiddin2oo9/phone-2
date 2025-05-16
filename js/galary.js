const thumbnails = document.querySelectorAll(".child--img .thumbnail");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const tempSrc = mainImage.src;
    const tempAlt = mainImage.alt;

    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;

    thumbnail.src = tempSrc;
    thumbnail.alt = tempAlt;
  });
});
