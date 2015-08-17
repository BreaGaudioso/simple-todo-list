var input = document.getElementById("submit");
var ul = document.querySelector('ul');
var form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault();
  li = document.createElement('li');
	ul.appendChild(li)
	li.innerHTML= input.value + '<span> delete</span>' ;
	input.value= " "
});

ul.addEventListener('click', function(e){
	if (e.target.nodeName === 'LI'){
		e.target.className ='completed';
	} else {
		ul.removeChild(e.target.parentNode)
}
});
