$(document).ready(function() {

	cararray = ['assets/images/bmw.png','assets/images/blb.png','assets/images/mercedes.png','assets/images/lambo.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	newCar();
	newGame();

	function newCar () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var Guess = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					Guess = true;
				}
			  }
			  if(!Guess)numbers[numbers.length]=randomnumber;
			}
		for (i = 0; i < numbers.length; i++) {
			var imageCar = $('<img>');
			imageCar.attr('data-num', numbers[i]);
			imageCar.attr('src', cararray[i]);
			imageCar.attr('alt', 'cararray');
			imageCar.addClass('carImage')
			$('#carlogos').append(imageCar);
		}
	}
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}
		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);
		$('.carImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);
		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      $('#carlogos').empty();
		      newCar();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        $('#carlogos').empty();
		        newCar();
		        newGame();
		    }
		});
	}

});
