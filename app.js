var quiz = [
	{	question: "At what street corner do all address numbers originate from in Chicago?",
		answers: ["corner of State and Madison streets", "corner of Michigan and Roosevelt", "corner of State and Congress"],
		correctAnswer: 0
	},
	{
		question: "Russian president Vladimir Putin said he was excited to visit Chicago because who once lived here?",
		answers: ["Barack Obama", "Rahm Emanuel", "Al Capone", "Oprah Winfrey"],
		correctAnswer: 2
	},
	{
		question: "What is the popular name for the heart of Chicago’s downtown business district?",
		answers: ["The Core", "The Circle", "The Loop"],
		 correctAnswer: 2
	},
	{
		 question: "What’s so special about the city’s fire hydrants?",
		 answers: ["They were the first in the country to be painted red.", "Their two-outlet design is patented and cannot be used outside city limits.", "They were specially ordered from Ohio after the Great Chicago Fire in 1871.", "An 1872 law says they must be placed every 200 feet along city blocks."],
		 correctAnswer: 1
	},
	{
		 question: "How many operable drawbridges are there along the Chicago River?",
		 answers: ["10", "18", "29", "37"],
		 correctAnswer: 3
	},
	{
		question: "Bruce Graham designed the Willis Tower and which other Chicago landmark?",
		answers: ["John Hancock Center", "Aon Center", "Smurfit-Stone Building", "Two Prudential Plaza"],
		correctAnswer: 0
	},
];

var correctAnswerCount = 0;
var questionList = 0;

$(document).ready(function(){
	$('.questionMain').hide();
	$('.result').hide();
	$('.congrats').hide();
	$('.finalAnswer').hide();
	$('.restart').hide();
	// $('.correctAnswer').hide();


	$('.start').click(function(){
		$(this).remove();
		$('.questionMain').show();
		$('.result').show();
		runQuiz();
	});

	// submit answer
	$('.answerForm').submit(function(event){
		event.preventDefault();
		finalAnswer = quiz[questionList].answer[quiz[questionList].correctAnswer];
		finalAnswerValue=parseInt(($('input[name="answer"]:checked').val()));

		if (finalAnswer === quiz[questionList].correctAnswer) {
			correctAnswerCount++;
			$('score').html("Score:" + " " + correctAnswer + " " + 'of' + " " + quiz.length);

		} else

			$('.answerList').append(quiz[questionList].question+'<br>'+finalAnswer+'<br>'+'<br>');
            $('.score').html("Score:"+" "+correctAnswerCount+" "+'of'+ " "+quiz.length);
        }

        $('.restart').click(function(){
            location.reload();
        });
        questionList++;
        runQuiz();

		});
}); //document ready


// start quiz

var runQuiz = function(){
	// clear questions
	$('.answer').html('');

	if (questionList===quiz.length && correctAnswerCount===quiz.length){
	    $('.questionMain').hide();
	    $('.congrats').show();
	    $('.restart').show();

    }else if(questionList===quiz.length){

	    $('.questionMain').hide();
	    $('.finalAnswer').show();
	    $('.restart').show();

    }else{
        for (var i=0; i<quiz[questionList].answers.length; i++) {
            /* Add question */
            $('.question').text(quiz[questionList].question);
            /* Add answer choice */
            $('.answer').append(
                '<li><input type="radio" name="answer" id="' + i + '" value="' + i + '"/>'+ 
                '<label for="' + i + '">' + 
                quiz[questionList].answers[i] +'</label></li>');
        }
    }
    
}





