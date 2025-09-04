
const basket1Count = document.querySelector('.basket-1 span');
const basket2Count = document.querySelector('.basket-2 span');


const left = document.querySelector('.left');
const right = document.querySelector('.right');

const totalApples = 10;

let secondBasketCount = 0;
let firstBasketCount = totalApples - secondBasketCount;

right.addEventListener('click', () => {
    if(firstBasketCount > 0) {
        firstBasketCount--;
        basket1Count.innerText = firstBasketCount;
        secondBasketCount++;
        basket2Count.innerText = secondBasketCount;
    }
});

left.addEventListener('click',() => {
    if(secondBasketCount > 0) {
        secondBasketCount--;
        basket2Count.innerText = secondBasketCount;
        firstBasketCount++;
        basket1Count.innerText = firstBasketCount;
    }
});