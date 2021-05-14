let menu = document.querySelectorAll('.menu');
for(let list of menu){
  list.addEventListener('onclick', function(e){e.target.classList.add('bold')})
}