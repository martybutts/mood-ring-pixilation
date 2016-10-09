(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY2xpZW50L2NsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNvY2tldCA9IGlvKClcblxuc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xufSlcblxuc29ja2V0Lm9uKCdjb2xvcicsIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm93PmRpdlwiKTsgLy8gc2VsZWN0IHRoZSBmaXJzdCBkaXZcbiAgIGNvbnN0IHsgcmdiIH0gPSBkYXRhXG4gICAvLyBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBkaXZcbiAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKCcgKyBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXV0uam9pbignLCcpICsgJyknO1xuICAgaWYgKGRpdi5uZXh0RWxlbWVudFNpYmxpbmcpIC8vIGlmIGEgZGl2IGlzIG5vdCBsYXN0LCBtb3ZlIHRvIHRoZSBuZXh0IG9uZVxuICAgZGl2ID0gZGl2Lm5leHRFbGVtZW50U2libGluZztcbiAgIGVsc2UgLy8gaWYgdGhlIGRpdiBpcyBsYXN0IG1vdmUgdG8gdGhlIGZpcnN0IG9uZVxuICAgZGl2ID0gZGl2LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF07XG59KTtcblxuLy8gY29kZSBqdXN0IHRvIG1ha2UgdGhlIGRlbW8gd29yayBhbmQgdHJpZ2dlciB0aGUgb25tZXNzYWdlIGV2ZW50XG5zb2NrZXQuZW1pdCgnY29sb3InLCBmdW5jdGlvbihkYXRhKSB7XG5uID0gMDtcbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgd2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoWzI1NSooKG4+PjIpJjEpLCAyNTUqKChuPj4xKSYxKSwgMjU1KihuJjEpXSkpO1xuICAgIG4rKztcbiAgfSwgMTAwKTtcbn0pXG4iXX0=
