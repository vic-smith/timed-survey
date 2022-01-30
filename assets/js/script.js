
var time = 75;
const timerEl = document.getElementById("timer");
var body = document.body;



function start() {

 

  var remP = document.getElementById("p");
  remP.remove();
  var remB = document.getElementById("startBtn");
  remB.remove();
  //var remC = document.getElementById("container");
  //remC.remove();
  var h1El = document.createElement("h1");
  h1El.textContent = "Which of the following will allow you to iterate through a string?";
  body.appendChild(h1El);
  h1El.classList.add("H1");
  //document.getElementById("h1").innerHTML = question1.textContent;
  //remove HTML content
  

  // Create answer buttons
  var ans1 = document.createElement("BUTTON");
  var ans2 = document.createElement("BUTTON");
  var ans3 = document.createElement("BUTTON");
  var ans4 = document.createElement("BUTTON");
 
  var ans1Nd = document.createTextNode("for loop");
  var ans2Nd = document.createTextNode("if statement");
  var ans3Nd = document.createTextNode("else statement");
  var ans4Nd = document.createTextNode("array");
 
  ans1.appendChild(ans1Nd);
  ans2.appendChild(ans2Nd);
  ans3.appendChild(ans3Nd);
  ans4.appendChild(ans4Nd);
  document.body.appendChild(ans1);
  document.body.appendChild(ans2);
  document.body.appendChild(ans3);
  document.body.appendChild(ans4);
  
  ans1.classList.add("btn");
  ans2.classList.add("btn");
  ans3.classList.add("btn");
  ans4.classList.add("btn");

  ans1.setAttribute("id", "ans1");
  ans2.setAttribute("id", "ans2");
  ans3.setAttribute("id", "ans3");
  ans4.setAttribute("id", "ans4");

  var cor = document.createElement("div");
  cor.textContent ="Correct!";
  cor.classList.add("div");

  var inc = document.createElement("div");
  inc.textContent ="Incorrect!";
  inc.classList.add("div");

  ans1.onclick = function(){
    document.body.appendChild(cor);
  }
  
  

  //if (document.getElementById("ans1").addEventListener("click", correct));
    //function correct(){
    //document.body.appendChild(cor);
    //}
  
 // if (document.getElementById("ans1").clicked == false){incorrect()}
   // function incorrect(){
     // document.body.appendChild(inc)
    //}
  
  //if (document.getElementById("ans1").clicked == true){
    //console.log() = "clicked";
    
    
  //}


  //document.createElement("h1").innerHTML = "Which of the following will allow you to iterate through a string?";
  //document.getElementById("startBtn").innerHTML = "if statement";
  
  var countdown =setInterval(function(){
  if (time <= 0){
    clearInterval(countdown);
  }
 
   timerEl.innerHTML = "Time:" + time;
  time-= 1;
}, 1000);

};


 


startBtn.addEventListener("click", start);



//var btn = document.createElement("button");
  //btn.innerHTML = "for statement";
 // document.body.appendChild(btn);