//shows all properties and methods inside that document or examine the document object
// console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="kdjfldjfl"
// console.log(document.forms[0])
// console.log(document.links)

// console.log(document.images)




//GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText="goodbye";
// console.log(headerTitle.textContent);
// headerTitle.innerHTML='<h3>Hello</h3>'
// header.style.borderBottom = '3px solid black';


//GET ELEMENTS BY CLASSNAME
//   let items = document.getElementsByClassName('list-group-item');
//   console.log(items);
//   items[1].textContent='Hello 2';
// //   items[1].style.fontWeight = 'bold'
//   items[2].style.backgroundColor='green';

//   for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//   }

  

// // GET ELEMENTS BY TAG NAME

//   let li = document.getElementsByTagName('li');
//   console.log(li);
//   li[1].textContent='Hello 2';
// //   li[1].style.fontWeight = 'bold'
//   li[2].style.backgroundColor='green';

//   for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
//   }


//QUERY SELECTOR//
let header = document.querySelector('#main-header');
header.style.borderBottom ='solid 4px #ccc'
//it changes input value content
let input = document.querySelector('input');
input.value="Hello";
//it changes button content
// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='orange';

//QUERYSELECTORALL//
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)')
// let even = document.querySelectorAll('li:nth-child(even)')

// for(let i =0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor="#ccc";
// }

//Sharpner assignment 6
// let items = document.querySelectorAll('li');
// items[1].style.backgroundColor='green';
// items[2].style.display='none';


//TRAVERSING THE DOM//

let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode)


//parent node and parentelement are almost same
//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow';

// //firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1'

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1'


// //nextSibling
// console.log(itemList.nextSibling)

// //nextElementSibling
// console.log(itemList.nextEleementSibling)

// //previous sibling
// console.log(itemList.previousSibling)

// //previousElementSibling
// console.log(itemList.previousEleementSibling)
// itemList.previousElementSibling.style.color='green';



//createElement

// //create a div
// let newDiv = document.createElement('div');

// //add class
// newDiv.className='hello';

// //add id
// newDiv.id='hello1';

// //add attribute
// newDiv.setAttribute('title','hello div');

// //create a text node
// let newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);


//Assignemnt - 7

let newDiv = document.createElement('div');
newDiv.className='hello';

let newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

let item = document.querySelector('ul');
let li = document.querySelector('.list-group-item')
item.insertBefore(newDiv , li)

