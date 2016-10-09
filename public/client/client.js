var socket = io()
const div = document.querySelector(".row>div"); // selects the first div

socket.on('connect', function () {
})

socket.on('color', function (data) {

  const { rgb } = data

  div.style.backgroundColor = 'rgb(' + [rgb[0], rgb[1], rgb[2]].join(',') + ')';
  if (div.nextElementSibling) {
    div = div.nextElementSibling;
  }
  else {
   div = div.parentElement.children[0];
 }
});
