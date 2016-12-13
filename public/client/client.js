var socket = io()
let div = document.getElementsByTagName("div")[0]; // selects the first div

socket.on('connect', function () {
  console.log("socket on");
})

socket.on('color', function (data) {
  console.log('data', data)

  const { rgb } = data
  // change the color of the div
  div.style.backgroundColor = 'rgb(' + [rgb[0], rgb[1], rgb[2]].join(',') + ')'
  while (div) // if a div is not last, move to the next one
    div = div.nextElementSibling

  // else // if the div is last move to the first one
  //  div = div.parentElement.children[0]

})
