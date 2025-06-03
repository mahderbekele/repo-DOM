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
const orange=document.createElement('img')
orange.src= 'imaes/oranges.jpeg';
    orange.style.width = '10vw';
     orange.style.height = '20vh';
     orange.style.borderRadius = '500px';
fruitsList.appendChild(orange)
const newFruit = document.createElement('li');
newFruit.textContent = 'Orange'; 
newFruit.style.marginLeft='-18vw'
newFruit.style.marginTop='25vh'
fruitsList.appendChild(newFruit);
const priceFruit=document.createElement('p');
priceFruit.textContent='60 KSH per KILOS'
priceFruit.style.marginLeft='-15vw'
priceFruit.style.marginTop='28vh'
fruitsList.appendChild(priceFruit)



const vegetablesList = document.getElementById('vegList');
const spinach=document.createElement('img')
spinach.src= 'imaes/spinach.jpeg';
    spinach.style.width = '10vw';
    spinach.style.height = '20vh';
    spinach.style.borderRadius = '500px';
    vegetablesList.appendChild(spinach)
const newVegetable = document.createElement('li');
newVegetable.textContent = 'Spinach'; 
newVegetable.style.marginLeft='-18vw'
newVegetable.style.marginTop='25vh'
vegetablesList.appendChild(newVegetable);
const priceVege=document.createElement('p');
priceVege.textContent='70 KSH per KILOS'
priceVege.style.marginLeft='-15vw'
priceVege.style.marginTop='28vh'
vegetablesList.appendChild(priceVege)



