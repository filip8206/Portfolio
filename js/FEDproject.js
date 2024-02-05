let ifHomeButton = document.querySelector("#ifHomeButton");
let ifLevelsbutton = document.querySelector("#ifLevelsButton");
let iFrame = document.querySelector("iframe");

ifHomeButton.addEventListener('click', function() {
    iFrame.src = 'https://filip8206.github.io/FED/index.html'
})

ifLevelsbutton.addEventListener('click', function() {
    iFrame.src = 'https://filip8206.github.io/FED/levels.html'
})