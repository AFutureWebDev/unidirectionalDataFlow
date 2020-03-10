import {fruitBowl} from './fruitBowl.js';

const svg = d3.select("svg");


const makeFruit = type => ({
    type,
    id: Math.random()
});
let fruits = d3.range(5)
    .map(() => makeFruit('apple'));
let selectedFruit = null;

const onClick = id => {
    selectedFruit = id;
    render();
}

const render = () => {
    fruitBowl(svg, {
        fruits, 
        height: +svg.attr('height'),
        onClick,
        selectedFruit
    })
};

render();

setTimeout(() => {
    //Eats an apple.
    fruits.pop();
    render();
}, 1000);

setTimeout(() => {
    //Replacing an apple with a lemon.
    fruits[2].type = 'lemon';
    render();
}, 2000);

setTimeout(() => {
    //Eats an apple.
    fruits = fruits.filter((d, i) => i !== 1);
    render();
}, 3000);