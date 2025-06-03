const title=document.getElementById('title')
const heading3 = document.querySelectorAll('h3');

 const sandDollarHex = "#FAF1CD";
   document.body.style.backgroundColor = sandDollarHex;
// document.body.style.backgroundColor='sand'
title.style.color='green'

heading3.forEach(h3 => {
  h3.style.textTransform = 'uppercase';
});

const fruitsList = document.getElementById('fruList');
const newFruit = document.createElement('li');
newFruit.textContent = 'Orange'; 
fruitsList.appendChild(newFruit);


const vegetablesList = document.getElementById('vegList');
const newVegetable = document.createElement('li');
newVegetable.textContent = 'Spinach'; 
vegetablesList.appendChild(newVegetable);



