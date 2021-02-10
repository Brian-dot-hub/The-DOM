//TRAVERSING THE DOM//
//const itemList=document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement)

// //childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor='yellow'

// //firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello to you'
// itemList.firstElementChild.style.fontWeight='bold'

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="I'm fine Thank you"
// itemList.lastElementChild.style.fontWeight='bold'

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='blue'
 
const items=document.querySelector('.title')
console.log(items.parentNode);
//createElement

//create div
const newDiv=document.createElement('div')

//add class
newDiv.className='hello'

//add id
newDiv.id='hello 1'

//add attribute
newDiv.setAttribute('title','hello div')

//create textNode
const newDivText=document.createTextNode('Hello World')

//add text to div
newDiv.appendChild(newDivText)

const wrapper=document.querySelector('div .title')
const h2=document.querySelector('div form')


console.log(newDiv);

newDiv.style.fontSize='30px'
newDiv.style.fontWeight='bold'

wrapper.insertBefore(newDiv,h2)





