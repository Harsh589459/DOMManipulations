function submit(e) {
    e.preventDefault();
  
    console.log(12);
  
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
  
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    console.log(localStorage.getItem('name'));
  }

  let submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click',submit);


//----------------------------------------------//



  let myObj={
    name:"domenic",
    age:56
  }

  let myObj_serialized=JSON.stringify(myObj);
  localStorage.setItem("myObj",myObj_serialized);
  console.log(localStorage.getItem("myObj"));

  let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
  console.log(myObj_deserialized);