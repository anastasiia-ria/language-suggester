$(document).ready(function() {

  //Navigation buttons functionality
  $("#start").click(function() {
    $("#question1").show();
  });

  $("#next1").click(function() {
    $("#question1").hide();
    $("#question2").show();
  });

  $("#next2").click(function() {
    $("#question2").hide();
    $("#question3").show();
  });

  $("#next3").click(function() {
    $("#question3").hide();
    $("#question4").show();
  });

  $("#next4").click(function() {
    $("#question4").hide();
    $("#question5").show();
  });

  $("#back2").click(function() {
    $("#question2").hide();
    $("#question1").show();
  });

  $("#back3").click(function() {
    $("#question3").hide();
    $("#question2").show();
  });

  $("#back4").click(function() {
    $("#question4").hide();
    $("#question3").show();
  });

  $("#back5").click(function() {
    $("#question5").hide();
    $("#question4").show();
  });

  //Submit button functions
  $("#suggester").submit(function(event) {
    const qOne = parseInt($("input:radio[name=question1]:checked").val());
    const qTwo = parseInt($("input:radio[name=question1]:checked").val());
    const qThree = parseInt($("input:radio[name=question1]:checked").val());
    const qFour = parseInt($("input:radio[name=question1]:checked").val());
    const qFive = parseInt($("input:radio[name=question1]:checked").val());
    const highestScore = 0;

    let ruby = 0;
    let c = 0;
    let js = 0;
    let python = 0;

    if (qOne === "1") {
      ruby += 1
    } else {
      c += 1
    }

    if (qTwo === "1") {
      js += 1
    } else if (qTwo = "2") {
      python += 1
    } else if (qTwo = "3") {
      ruby += 1
    } else {
      c += 1
    }

    if (qThree === "1") {
      js += 1
    } else if (qThree = "2") {
      python += 1
    } else if (qThree = "3") {
      ruby += 1
    } else {
      c += 1
    }

    if (qFour === "1") {
      js += 1
    } else if (qFour = "2") {
      python += 1
    } else {
      ruby += 1
    } 

    if (qFive === "1") {
      c += 1
    } else if (qFive = "2") {
      js += 1
    } else {
      puthon += 1
    } 

    highestScore = Math.max(ruby, c, js, python)

    if (ruby === highestScore) {
      $("#ruby").show()
    } else if (c === highestScore) {
      $("#c").show()
    } else if (js === highestScore) {
      $("#js").show()
    } else {
      $("#python").show()
    }
    
    event.preventDefault();
  });
});