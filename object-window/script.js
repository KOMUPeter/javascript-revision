let button = document.getElementById('button');

// closing function

// window.open will only take 3 parameters maximun which is optional

button.addEventListener('click', () => {
  let fenetre = window.open("destination.html", 'destination', 'width=500, height=500');
  

  fenetre.addEventListener('load', () => {
    let button2 = fenetre.document.getElementById('button2');

    button2.addEventListener('click', () => {
      fenetre.close();
      alert('you have just closed the destination window!!!');
    });
  });
});



const p = document.getElementById("p");

p.addEventListener('click', () => {
  let mot = window.prompt("What do you want to write ?");
  window.alert(mot);
});

// MOST USED EVENT LISTERNERS IN JAVASCRIPT

document.addEventListener('DOMContentLoaded', function(event) {
  // DOMContentLoaded event listener
  console.log('DOMContentLoaded event fired');
});

element.addEventListener('click', function(event) {
  // click event listener
  console.log('click event fired');
});

element.addEventListener('mouseenter', function(event) {
  // mouseenter event listener
  console.log('mouseenter event fired');
});

element.addEventListener('mouseleave', function(event) {
  // mouseleave event listener
  console.log('mouseleave event fired');
});

element.addEventListener('keydown', function(event) {
  // keydown event listener
  console.log('keydown event fired');
});

element.addEventListener('keyup', function(event) {
  // keyup event listener
  console.log('keyup event fired');
});

element.addEventListener('change', function(event) {
  // change event listener
  console.log('change event fired');
});

element.addEventListener('submit', function(event) {
  // submit event listener
  console.log('submit event fired');
});

element.addEventListener('scroll', function(event) {
  // scroll event listener
  console.log('scroll event fired');
});

window.addEventListener('resize', function(event) {
  // resize event listener
  console.log('resize event fired');
});
