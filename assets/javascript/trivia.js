var quiz;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var fb = "";
var time = 30;
var clock;

//show element with css
function show(id){
      document.getElementById(id).style.display = 'block';
  }
//hide element with css
function hide(id){
      document.getElementById(id).style.display = 'none';
  }

//show quiz when START button is clicked
$("#start").on("click", function() {
    $(this).hide();
    $('.quiz').show();
    //start timer
	  runClock();
});

var correct = 0;
var inCorrect = 0;
var unanswered = 0;

//very tedious - need to use object or array for more questions (like question bank) but can't get the code to work...
function checkAnswers(){

if(document.getElementById('1a').checked){
      correct++;
    } else if (document.getElementById('1b').checked ||document.getElementById('1c').checked  
      || document.getElementById('1d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('2b').checked){
      correct++;
    } else if (document.getElementById('2a').checked ||document.getElementById('2c').checked  
      || document.getElementById('2d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('3c').checked){
      correct++;
    } else if (document.getElementById('3a').checked ||document.getElementById('3b').checked  
      || document.getElementById('3d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('4b').checked){
      correct++;
    } else if (document.getElementById('4a').checked ||document.getElementById('4c').checked  
      || document.getElementById('4d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('5a').checked){
      correct++;
    } else if (document.getElementById('5b').checked ||document.getElementById('5c').checked  
      || document.getElementById('5d').checked){
      incorrect++;
    } else {
      unanswered++;
    }

    if(document.getElementById('6c').checked){
      correct++;
    } else if (document.getElementById('6a').checked ||document.getElementById('6b').checked  
      || document.getElementById('6d').checked){
      incorrect++;
    } else {
      unanswered++;
    }
    //display results
      var fb = $("div");
      fb.addClass("feedback");
      $("#feedback").append(fb);
      fb.html("ALL DONE!!" + "<br>" 
        + "Correct answers:  " + correct + "<br>"
        + "Incorrect answers: " + incorrect + "<br>"
        + "Unanswered questions:  " + unanswered + "<br>"
        + "<button id='submit' value='repeat' class='btn clear' onClick='window.location.reload()'> Play Again</button>"  );

      console.log(correct + "correct");
      console.log(incorrect);
      console.log(unanswered);
}

function runClock(){
  intervalId = setInterval(count, 1000);
  setTimeout(stop, 1000 * 30);
}

function stop() {
  console.log("time out!");
  clearInterval(intervalId);
  //after 30 sec. automatically show scores
  checkAnswers();
}

function count() {
  //count down from 30 seconds
  time--;
  var converted = timeConverter(time);
  $("#timer").html(converted);
}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

