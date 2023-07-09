let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItems);

//filter event
filter.addEventListener('keyup',filterItems)

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    let desc = document.getElementById('desc').value;

    //create new li element
    let li = document.createElement('li');

    //add class
    li.className='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode('  '))
    li.appendChild(document.createTextNode(desc))

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


//filter items

function filterItems(e){
    //convert text to lowercase 
    let text = e.target.value.toLowerCase();

    //getList
    let items =itemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function(item){
        console.log(item);
        let itemName=item.firstChild.textContent;
        let descriptionName=item.childNodes[2].textContent;
        

        console.log(descriptionName);
        console.log(descriptionName);
        
        if(itemName.toLowerCase().indexOf(text)!=-1 || descriptionName.toLowerCase().indexOf(text)!=-1  ){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}