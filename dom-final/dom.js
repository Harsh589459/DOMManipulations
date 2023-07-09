let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

//delete event

itemList.addEventListener('click',removeItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    let li = document.createElement('li');

    //add class
    li.className='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //create delete button element
    let deleteBtn = document.createElement('button');

    //add classes to delet btn
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //apend btn to li
    li.appendChild(deleteBtn);

    //create edit btn

    let editBtn = document.createElement('button');
    editBtn.className='btn btn-primary btn-sm float-right edit mr-2';
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(editBtn)


    //append li to list
    itemList.appendChild(li);
}

//remove items

function removeItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}