(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY2xpZW50L2NsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc29ja2V0ID0gaW8oKVxubGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdOyAvLyBzZWxlY3RzIHRoZSBmaXJzdCBkaXZcblxuc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcInNvY2tldCBvblwiKTtcbn0pXG5cbnNvY2tldC5vbignY29sb3InLCBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG5cbiAgY29uc3QgeyByZ2IgfSA9IGRhdGFcbiAgLy8gY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgZGl2XG4gIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKCcgKyBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXV0uam9pbignLCcpICsgJyknXG4gIHdoaWxlIChkaXYpIC8vIGlmIGEgZGl2IGlzIG5vdCBsYXN0LCBtb3ZlIHRvIHRoZSBuZXh0IG9uZVxuICAgIGRpdiA9IGRpdi5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAvLyBlbHNlIC8vIGlmIHRoZSBkaXYgaXMgbGFzdCBtb3ZlIHRvIHRoZSBmaXJzdCBvbmVcbiAgLy8gIGRpdiA9IGRpdi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdXG5cbn0pXG4iXX0=
