const $els = {
  cell1: document.querySelector('.cell1'),
  cell2: document.querySelector('.cell2'),
  cell3: document.querySelector('.cell3'),
  startBtn: document.querySelector('#startbtn'),
  stopbtn: document.querySelector('#stopbtn'),
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

  let imageIndex = 0;
  let $slotImage = $('.slotImage');
  let $textMsg = $('.textMsg');
  let gamebButton = true;

//function looping and randomizing the images
  function changeImage() {
     $slotImage.each( function(i,d) {
      // console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * slotElement.length)
      $(d).attr("src", slotElement[random]);
    })
  }

//click event activates the array of images
$els.startBtn.addEventListener("click", startGame);

//function start looping with a set interval and clear interval
function startGame(){
  if (!gamebButton) {
    ($textMsg).html('Test Your Luck').css({"color": "black"});
  }
  let sI = setInterval(changeImage, 100);
  $els.stopbtn.addEventListener("click", function(){
   clearInterval(sI)
  });
  gamebButton = false;
};

//stops images and check for matches
 $els.stopbtn.addEventListener("click", function(){
  match();
 });

function match(){
  if($els.cell1.innerHTML == $els.cell2.innerHTML && $els.cell2.innerHTML == $els.cell3.innerHTML) {
    ($textMsg).html('JackPot, You win!!!').css({"color": "red", "font-size": "36px"});
  }else if ($els.cell1.innerHTML == $els.cell2.innerHTML ||
            $els.cell1.innerHTML == $els.cell3.innerHTML ||
            $els.cell2.innerHTML == $els.cell3.innerHTML){
    ($textMsg).html('You have a Match!').css({"color": "red", "font-size": "2em"});
  }else {
    ($textMsg).html('No match, try again!').css({"color": "red", "font-size": "2em"});
  }

}


