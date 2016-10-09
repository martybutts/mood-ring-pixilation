var socket = io()

socket.on('connect', function () {
})

socket.on('color', function (data) {

  var div = document.querySelector(".row>div"); // select the first div
   const { rgb } = data
   // change the color of the div
   div.style.backgroundColor = 'rgb(' + [rgb[0], rgb[1], rgb[2]].join(',') + ')';
   if (div.nextElementSibling) // if a div is not last, move to the next one
   div = div.nextElementSibling;
   else // if the div is last move to the first one
   div = div.parentElement.children[0];
});

// code just to make the demo work and trigger the onmessage event
socket.emit('color', function(data) {
n = 0;
  setInterval(function() {
    websocket.send(JSON.stringify([255*((n>>2)&1), 255*((n>>1)&1), 255*(n&1)]));
    n++;
  }, 100);
})
