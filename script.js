let offset = 0;
const buttonLeft = document.querySelector ('.arrow-left');
const buttonRight = document.querySelector ('.arrow-right');
const sliderLine = document.querySelector ('.slider-line');
const numberCurrent = document.querySelector ('.number-current');
const numberMax = document.querySelector ('.number-max');
const currentNumber = 1;


buttonRight.addEventListener ('click', function(){
    offset -= 770;
    if (offset < -770) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
})


buttonLeft.addEventListener ('click', function(){
    offset += 770;
    if (offset > 0) {
        offset = -770;
    }
    sliderLine.style.left = offset + 'px';
})

buttonLeft.addEventListener ('click', function (){
    if (numberCurrent.textContent == '01') {
        numberCurrent.textContent = '02';
    }
     
    else if (numberCurrent.textContent == '02') {
      numberCurrent.textContent = '01';
}
})


buttonRight.addEventListener ('click', function (){
    if (numberCurrent.textContent == '02') {
        numberCurrent.textContent = '01';
    }
     
    else if (numberCurrent.textContent == '01') {
      numberCurrent.textContent = '02';
}
})