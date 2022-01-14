$(document).ready(function() {

  //Add checked class to checked items on click
  $('input').click(function () {
    $('input:not(:checked)').parent().removeClass('checked');
    $('input:checked').parent().addClass('checked');
  });
  

  //Navigation buttons functionality
  $('#start').click(function() {
    $('.card').hide();
    $('.lang_card').hide();
    $('#question1').show();


    //Make first input checked on default
    $('input').each(function() {
      if ($(this).val() === '1') {
        $(this).prop('checked',true);
        $(this).parent().addClass('checked');
      } else {
        $(this).prop('checked',false);
        $(this).parent().removeClass('checked');
      }
    });
  });

  $('#next1').click(function() {
    $('#question1').hide();
    $('#question2').show();
  });

  $('#next2').click(function() {
    $('#question2').hide();
    $('#question3').show();
  });

  $('#next3').click(function() {
    $('#question3').hide();
    $('#question4').show();
  });

  $('#next4').click(function() {
    $('#question4').hide();
    $('#question5').show();
  });

  $('#back2').click(function() {
    $('#question2').hide();
    $('#question1').show();
  });

  $('#back3').click(function() {
    $('#question3').hide();
    $('#question2').show();
  });

  $('#back4').click(function() {
    $('#question4').hide();
    $('#question3').show();
  });

  $('#back5').click(function() {
    $('#question5').hide();
    $('#question4').show();
  });

  //Submit button functions
  $('#suggester').submit(function(event) {
    event.preventDefault()

    const qOne = $('input:radio[name=question1]:checked').val();
    const qTwo = $('input:radio[name=question2]:checked').val();
    const qThree = $('input:radio[name=question3]:checked').val();
    const qFour = $('input:radio[name=question4]:checked').val();
    const qFive = $('input:radio[name=question5]:checked').val();
    let highestScore = 0;

    let ruby = 0;
    let c = 0;
    let js = 0;
    let python = 0;

    if (qOne === '1') {
      ruby += 1
    } else {
      c += 1
    }

    if (qTwo === '1') {
      js += 1
    } else if (qTwo === '2') {
      python += 1
    } else if (qTwo === '3') {
      ruby += 1
    } else {
      c += 1
    }

    if (qThree === '1') {
      js += 1
    } else if (qThree === '2') {
      python += 1
    } else if (qThree === '3') {
      ruby += 1
    } else {
      c += 1
    }

    if (qFour === '1') {
      js += 1
    } else if (qFour === '2') {
      python += 1
    } else {
      ruby += 1
    } 

    if (qFive === '1') {
      c += 1
    } else if (qFive === '2') {
      js += 1
    } else {
      python += 1
    } 

    highestScore = Math.max(ruby, c, js, python);
    console.log(highestScore);

    if (ruby === highestScore) {
      $('#ruby').show()
      $('#question5').hide();
    } else if (c === highestScore) {
      $('#c').show()
      $('#question5').hide();
    } else if (js === highestScore) {
      $('#js').show()
      $('#question5').hide();
    } else {
      $('#python').show()
      $('#question5').hide();
    }
    
    
  });
});