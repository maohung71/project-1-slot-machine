const $els = {
  allCells: document.querySelectorAll('.allCells'),
  cell1: document.querySelector('.cell1'),
  startBtn: document.querySelector('#startbtn'),
  resetBtn: document.querySelector('#resetbtn'),
  stopBtn: document.querySelector('.stopBtn')
};
console.log($els.startBtn);
console.log($els.resetBtn);
console.log($els.stpBtn);

//assign images to an array
let slotElement= [
'images/art_777.png',
'images/art_banana.png',
'images/art_cards.png',
'images/art_lemon.png',
'images/art_star.png'];

// Cycling and array of images
  var $slotImage = $('.slotImage');
 $slotImage.each( function(i,d) {
  console.log("this is i & d", i, d)
  let random = Math.floor(Math.random() * $slotImage.length)
  $(d).attr("src", slotElement[random]);
 })
  console.log($slotImage);
  var imageIndex = 0;
  function changeImage() {
     $slotImage.each( function(i,d) {
      console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * $slotImage.length)
      $(d).attr("src", slotElement[random]);
    })
  }

  //   function changeImage() {
  //   $slotImage.attr("src", slotElement[imageIndex]);
  //   imageIndex = (imageIndex + 1) % slotElement.length;
  // }

//EventListener for start, stop and reset

 /* let ok = setInterval(changeImage, 500);
var myVar = setInterval(function(){ changeImage() }, 300);
*/

let ok = setInterval(changeImage, 500);
$els.startBtn.addEventListener("click", ok);


function startGame(){
   // ok = setInterval(changeImage, 500);
  $els.startBtn.removeEventListener('click',startGame)
};




 $els.stopBtn.addEventListener("click", function(){
  clearInterval(ok,console.log(ok))
  console.log('hello')
 });




function stop(){
  $els.startBtn.addEventListener("click", ok);
  clearInterval(changeImage, 0)
  console.log('hello')
};






// cards = [
// {
//   rank: "777",
//   cardImage: "images/art_777.png"
// },
// {
//   rank: "banana",
//   cardImage: "images/art_banana.png"
// },
// {
//   rank: "kings",
//   cardImage: "images/art_cards.png"
// },
// {
//   rank: "lemon",
//   cardImage: "images/art_lemon.png"
// }
// {
//   rank: "star",
//   cardImage: "images/art_star.png"
// }
// ];
// var cardsInPlay = [];
// var checkForMatch = function (){
//   if (cardsInPlay.length===2){
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//       alert("You found a match!");
//     } else {
//       alert("Sorry, try again.";
//     }
//   }
// }

// var imageIndex = 0;
//   var $slotImage = $('.slotImage');

//   function changeImage() {
//      $slotImage.each( function(i,d) {
//       console.log("this is i & d", i, d)
//       let random = Math.floor(Math.random() * $slotImage.length)
//       $(d).attr("src", slotElement[random]);
//     })
//   }

// function flipCard() {
//   // used getAttribute method to get the data-id attribute of the card
//   // that used for clicked and store in variable
//   var cardId = this.getAttribute('data-id');
//   // used push method to push into the cards
//   //console.log("User flipped " + cards[cardId].rank);
//   cardsInPlay.push(cards[cardId].rank);
//   console.log(cards[cardId].cardImage);
//   //console.log(cards[cardId].suit);
//   //used setAttribute method to update the src attribute to the image
//   // that also for clicked and for cardimage property
//   this.setAttribute('src', cards[cardId].cardImage);
//   checkForMatch();
// }

