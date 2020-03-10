//REFERENCES
let redButton = document.querySelector('.red-button');
let blueButton = document.querySelector('.green-button');
let greenButton = document.querySelector('.blue-button');

function button_click(color) {
    console.log('test')
    document.querySelector('body').style.backgroundColor = color;
}


redButton.addEventListener('click', function(event) { button_click('red') })
blueButton.addEventListener('click', function(event) { button_click('green') })
greenButton.addEventListener('click', function(event) { button_click('blue') })