let btn = document.querySelector('#button');
btn.onclick = function(){
  if(btn.style.color == 'red'){
    btn.style.color = 'black';
  } else {
    btn.style.color = 'red';
  }
}
