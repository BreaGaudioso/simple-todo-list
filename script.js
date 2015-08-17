var input = document.getElementById("submit");
var list = document.querySelector('ul');
var form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault();
	li = document.createElement('li');
	list.appendChild(li)
	li.innerHTML= input.value;
});

