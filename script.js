const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const capture = document.getElementById("capture");
const download = document.getElementById("download");
const frame = document.querySelector(".frame");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

capture.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0);
  ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

  const image = canvas.toDataURL("image/png");
  download.href = image;
});
