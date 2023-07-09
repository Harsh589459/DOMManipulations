function submit(e) {
    e.preventDefault();
  
    console.log(12);
  
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
  
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
  }

  let submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click',submit);