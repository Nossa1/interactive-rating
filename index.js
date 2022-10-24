const mySubBtn = document.querySelector(".mySubBtn");
const myIcon = document.querySelector(".myIcon");
const myQuestion = document.querySelector(".myQuestion");
const myPara = document.querySelector(".myPara");
const rateContainer = document.querySelector(".rateContainer");
const myCircle = document.querySelector(".myCircle");

const myCheck = document.querySelector(".myCheck");
const message = document.querySelector(".message");
const thanksTitle = document.querySelector(".myThanks");
const afterArticle = document.querySelector(".afterArticle");
const mySelect = document.querySelector(".mySelect");

mySubBtn.addEventListener("click", function() {

    if(document.getElementById('btn1').checked) {   
        message.innerHTML = "You have selected 1 out of 5"    
    }   
    else if(document.getElementById('btn2').checked) {   
        message.innerHTML = "You have selected 2 out of 5"    
    }   
    else if(document.getElementById('btn3').checked) {   
        message.innerHTML = "You have selected 3 out of 5"      
    }   
    else if(document.getElementById('btn4').checked) {   
        message.innerHTML = "You have selected 4 out of 5"    
    }  
    else if (document.getElementById('btn5').checked)   {
        message.innerHTML = "You have selected 5 out of 5"   
    }   else {

        thanksTitle.innerHTML = "You haven't selected any number" 
    afterArticle.innerHTML = "Please select a number"
    }
  

mySubBtn.style.display = "none";
myIcon.style.display = "none";
myQuestion.style.display = "none";
myPara.style.display = "none";
rateContainer.style.display = "none";
myCircle.style.display = "none"

mySelect.style.display = "block";
myCheck.style.display = "block";
message.style.display = "block";
thanksTitle.style.display = "block";
afterArticle.style.display = "block";
  });


