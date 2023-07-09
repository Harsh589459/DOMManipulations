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

  

// GET ELEMENTS BY TAG NAME

  let li = document.getElementsByTagName('li');
  console.log(li);
  li[1].textContent='Hello 2';
//   li[1].style.fontWeight = 'bold'
  li[2].style.backgroundColor='green';

  for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
  }


//QUERY SELECTOR//
let header = document.querySelector('#main-header');
header.style.borderBottom ='solid 4px #ccc'
//it changes input value content
let input = document.querySelector('input');
input.value="Hello";
//it changes button content
let submit = document.querySelector('input[type="submit"]');
submit.value="SEND";