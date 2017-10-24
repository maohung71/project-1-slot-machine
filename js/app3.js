const $els = {
  cell1: document.querySelector('.cell1'),
  cell2: document.querySelector('.cell2'),
  cell3: document.querySelector('.cell3'),
  startBtn: document.querySelector('#startbtn'),
  resetBtn: document.querySelector('#resetbtn'),
  stopBtn: document.querySelector('.stopBtn')
};

//assign images to an array
let slotElement= [
'images/art_cherry.png',
'images/art_jack.png',
'images/art_777.png',
'images/art_orange.png',
'images/art_king.png',
'images/art_lemon.png',
'images/art_straw.png',
'images/art_star.png'
];

// Cycling and array of images

 // $slotImage.each( function(i,d) {
 //  console.log("this is i & d", i, d)
 //  let random = Math.floor(Math.random() * $slotImage.length)
 //  $(d).attr("src", slotElement[random]);
 // })
  console.log($slotImage);

  var imageIndex = 0;
  var $slotImage = $('.slotImage');
  function changeImage() {
     $slotImage.each( function(i,d) {
      // console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * slotElement.length)
      $(d).attr("src", slotElement[random]);
    })
  }

$els.startBtn.addEventListener("click", startGame);

function startGame(){
  let sI = setInterval(changeImage, 500);
  $els.resetBtn.addEventListener("click", function(){
   clearInterval(sI)
  });
};

 $els.resetBtn.addEventListener("click", function(){
  clearInterval(changeImage)
 });


// var ok = setInterval(changeImage, 300);
// $els.startBtn.addEventListener("click", function() {
//   console.log("what happens when i click on the ok function", ok)

// });


//  $els.resetBtn.addEventListener("click", function(){
//   clearInterval(ok)
//   match()
//   console.log('test')

// console.log($els.cell1.innerHTML);
// console.log($els.cell2.innerHTML);
// console.log($els.cell3.innerHTML);
//  });


function match(){
  var $textMsg = $('.textMsg');
  if($els.cell1.innerHTML == $els.cell2.innerHTML && $els.cell2.innerHTML == $els.cell3.innerHTML) {
    ($textMsg).html('Perfect Match!! You win').css({"color": "red", "font-size": "36px"});
  }else if ($els.cell1.innerHTML == $els.cell2.innerHTML ||
            $els.cell1.innerHTML == $els.cell3.innerHTML ||
            $els.cell2.innerHTML == $els.cell3.innerHTML){
    ($textMsg).html('You got two matches!').css({"color": "red", "font-size": "36px"});
  }else {
    ($textMsg).html('No matches, Try again!').css({"color": "red", "font-size": "36px"});
  }
}




// var $msg = $('#display-msg';)
// $msg.innerHTML =  'ou got two matches!';
// $msg.innerHTML =  'Perfect Match!! You win!';
// $msg.innerHTML =  'No matches, Try again!';

// setTimeout(function(){ alert("You got two matches!"); }, 200);
// setTimeout(function(){ alert("No matches, Try again!"); }, 200);
