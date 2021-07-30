const ul = document.querySelector('.pokemons-list')

var mouseWheelEvt = function (event) {
  if (ul.doScroll)
      ul.doScroll(event.wheelDelta>0?"left":"right");
  else if ((event.wheelDelta || event.detail) > 0)
      ul.scrollLeft -= 100;
  else
      ul.scrollLeft += 100;

  return false;
}
console.log('SCRIPT APP', ul)
ul.addEventListener("mousewheel", mouseWheelEvt);