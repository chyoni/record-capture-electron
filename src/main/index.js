const capturedImage = document.getElementById("captured-image");

mainAPI.getImage((event, data) => {
  capturedImage.src = data;
  mainAPI.closeRecordWindow();
});
