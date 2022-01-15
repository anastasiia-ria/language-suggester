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
    $('#name-card').slideDown();

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

    $('input#name-input').val('');
  });

  $('#next-name').click(function() {
    $('#name-card').hide();
    $('#question1').show();
  });

  $('#next1').click(function() {
    const qOne = $('input:radio[name=question1]:checked').val();

    if (qOne === '1') {
      $('#question2-high').show();
    } else {
      $('#question2-low').show();
    }
    $('#question1').hide();
  });

  $('#next2-high').click(function() {
    $('#question2-high').hide();
    $('#question3').show();
  });

  $('#next2-low').click(function() {
    $('#question2-low').hide();
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

  $('#back1').click(function() {
    $('#question1').hide();
    $('#name-card').show();
  });

  $('#back2-high').click(function() {
    $('#question2-high').hide();
    $('#question1').show();
  });

  $('#back2-low').click(function() {
    $('#question2-low').hide();
    $('#question1').show();
  });

  $('#back3').click(function() {
    const qOne = $('input:radio[name=question1]:checked').val();

    if (qOne === '1') {
      $('#question2-high').show();
    } else {
      $('#question2-low').show();
    }
    $('#question3').hide();
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
    const qTwoHigh = $('input:radio[name=question2-high]:checked').val();
    const qTwoLow = $('input:radio[name=question2-low]:checked').val();
    const qThree = $('input:radio[name=question3]:checked').val();
    const qFour = $('input:radio[name=question4]:checked').val();
    const qFive = $('input:radio[name=question5]:checked').val();
    const nameInput = $('input#name-input').val();

    let ruby = 0;
    let c = 0;
    let js = 0;
    let python = 0;

    if (qOne === '1') {
      ruby += 1
      if (qTwoHigh === '1') {
        js += 1
      } else if (qTwoHigh === '2') {
        python += 1
      } else if (qTwoHigh === '3') {
        ruby += 1
      } else {
        c += 1
      }
    } else { 
      c += 1
      if (qTwoLow === '1') {
        js += 1
      } else {
        python += 1
      }
    }

    if (qThree === '1') {
      ruby += 1
    } else if (qThree === '2') {
      c += 1
    } else if (qThree === '3') {
      js += 1
    } else {
      python += 1
    }

    if (qFour === '1') {
      ruby += 1
    } else if (qFour === '2') {
      c += 1
    } else {
      js += 1
    } 

    if (qFive === '1') {
      python += 1
    } else if (qFive === '2') {
      ruby += 1
    } else {
      c += 1
    } 

    const highestScore = Math.max(ruby, c, js, python);

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

    
    if (nameInput != '') {
      $('.name').text(nameInput);
      $('.text').text(', the best language for you is');
    } else {
      $('.text').text('The best language for you is');
    }
  });
});