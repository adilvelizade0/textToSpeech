const speech = new SpeechSynthesisUtterance();
speech.lang = "en";

document.querySelector(".change").addEventListener("click", (event) => {
  speech.text = document.querySelector("#textBox").value;
  event.preventDefault();
  window.speechSynthesis.speak(speech);
});
