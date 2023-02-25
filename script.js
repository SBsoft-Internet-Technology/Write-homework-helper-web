function playAudio() {
    var audioPlayer = document.getElementById("audioPlayer");
    var audioFileInput = document.getElementById("audioFileInput");
  
    var file = audioFileInput.files[0];
    var objectUrl = URL.createObjectURL(file);
  
    audioPlayer.src = objectUrl;
    audioPlayer.play();
  }
  