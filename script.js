let paragraph = document.querySelector(".results");

let startBtn = document.querySelector(".start");
let question = document.querySelector(".nameQuestion");
let submitBtn = document.querySelector(".submit");
let inputBtn = document.querySelector(".input");

let insideBtn = document.querySelector(".inside");
let goutBtn = document.querySelector(".out");
let sunflower = document.querySelector(".sunflower");
let gladiolus = document.querySelector(".gladiolus");
let violets = document.querySelector(".violets");
let daffodil = document.querySelector(".daffodil");
let firstBtn = document.querySelector(".second");
let secBtn = document.querySelector(".third");
let thirdBtn = document.querySelector(".fourth");
let fourthBtn = document.querySelector(".fifth");



startBtn.onclick = function() {
    let quizOpening = document.querySelector(".quizOpening");

    quizOpening.style = "display: none";
    question.style = "display: block";
    submitBtn.style="display:block";
};

submitBtn.onclick = function( ){
  
   question.style = "display:none";
   questionOne.style = "display: block";
};

let questionOne = document.querySelector(".questionOne");
let questionTwo = document.querySelector(".questionTwo");



inputBtn.onclick = (function() {
  scale = document.querySelector(".scale").value;
  if(scale < 7) {
   questionOne.style = "display: none";
   questionTwo.style = "display: block";
}else if (scale >=7) {
   questionOne.style = "display: none";
   questionTwo.style = "display: block";
}
});

insideBtn.onclick = (function() {
  if (scale < 7) {
    questionTwo.style = "display: none";
    daffodil.style = "display: block";
    fourthBtn.style="display:block"; } 
       
  else if (scale >=7) {
    questionTwo.style = "display: none";
    violets.style = "display: block";
    thirdBtn.style="display:block";
  }
});

goutBtn.onclick = (function() {
  if (scale < 7){
    questionTwo.style = "display: none";
    gladiolus.style = "display: block";
    secBtn.style = "display: block";
   
  }else if (scale >=7) {
    questionTwo.style = "display: none";
    sunflower.style = "display: block";
    firstBtn.style = "display: block";
  }
});

firstBtn.onclick= function( ){
  firstBtn.style = "display : none";
  paragraph.style.display="block";
  let name = document.querySelector(".yourName").value;
  console.log(name);

   paragraph.innerHTML = name + ", you are a sunflower . " +"You are very caring of others and outgoing . " + "You get bored easily so you like to go explore new things . " ;
  
  

};

secBtn.onclick= function( ){
  secBtn.style="display:none";
  paragraph.style.display="block";
  let name = document.querySelector(".yourName").value;
  console.log(name);

   paragraph.innerHTML = name + ", you are a gladiolus ." + "You a person who is very determined when you want to reach your goals. You don't like to be restricted and enjoy exploring . ";

  
}


thirdBtn.onclick= function( ){
  thirdBtn.style="display:none";
  paragraph.style.display="block";
  let name = document.querySelector(".yourName").value;
  console.log(name);

   paragraph.innerHTML = name + ", you are a violet ." + "You are a person who sometimes puts others need first. You often enjoy your alone/me time .";

  
}

fourthBtn.onclick= function( ){
  fourthBtn.style="display:none";
  paragraph.style.display="block";
  let name = document.querySelector(".yourName").value;
  console.log(name);

   paragraph.innerHTML = name + ", you are a daffodil ." + "You are a person who puts your own needs first. You don't like to be bothered by others and you are a closed off person . ";

  
}

