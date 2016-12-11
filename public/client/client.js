var socket = io()
const div = document.getElementsByTagName("div"); // selects the first div

socket.on('connect', function () {
  console.log("socket on");
})

socket.on('color', function (data) {
  console.log('data', data)

  const { rgb } = data
  // change the color of the div
  div.style.backgroundColor = 'rgb(' + [rgb[0], rgb[1], rgb[2]].join(',') + ')'
  if (div.nextElementSibling) // if a div is not last, move to the next one
    div = div.nextElementSibling

  else // if the div is last move to the first one
   div = div.parentElement.children[0]

})
