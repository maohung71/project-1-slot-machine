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

let ok = setInterval(changeImage, 300);
$els.startBtn.addEventListener("click", ok);


 $els.stopBtn.addEventListener("click", function(){
  clearInterval(ok)
  match()
  console.log('test')

console.log($els.cell1.innerHTML);
console.log($els.cell2.innerHTML);
console.log($els.cell3.innerHTML);
 });




function match(){

  if($els.cell1.innerHTML == $els.cell2.innerHTML && $els.cell2.innerHTML == $els.cell3.innerHTML) {
      setTimeout(function(){ alert("Perfect Match!! You win"); }, 200);
  }else if ($els.cell1.innerHTML == $els.cell2.innerHTML ||
            $els.cell1.innerHTML == $els.cell3.innerHTML ||
            $els.cell2.innerHTML == $els.cell3.innerHTML){
      setTimeout(function(){ alert("You got two matches!"); }, 200);
  }else {
      setTimeout(function(){ aalert("No matches, Try again!"); }, 200);
  }
}
