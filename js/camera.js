let webcamVideo = document.querySelector("#webcamVideo");
let captureBtn = document.querySelector("#captureBtn");
let downloadLink = document.querySelector("#downloadLink");
let canvas = document.querySelector("#canvas");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    webcamVideo.srcObject = stream;
    webcamVideo.play();
  })
  .catch((error) => {
    console.log("Kamera ishlamadi: " + error);
  });

captureBtn.addEventListener("click", () => {
  canvas.width = webcamVideo.videoWidth;
  canvas.height = webcamVideo.videoHeight;

  let ctx = canvas.getContext("2d");
  ctx.drawImage(webcamVideo, 0, 0, canvas.width, canvas.height);

  let imgUrl = canvas.toDataURL("image/png");

  downloadLink.href = imgUrl;
  downloadLink.download = "rasm.png";
  downloadLink.style.display = "inline-block";
});
