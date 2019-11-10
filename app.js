
function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices
		var choices = quiz.getQuestionIndex() .choices;
		for(var i=0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'>You got " + quiz.score + "/" + questions.length +" questions correct!</h2>\n<h3>Answers:</h3><ol><li>The Pacific Ocean</li><li>XXI</li><li>Every 4 years</li><li>Nazi Party</li><li>Venus</li><li>Mercury</li><li>1914</li><li>12 straight edges</li><li>Thomas Edison</li><li>Albany</li></ol>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;

}

var questions = [
	new Question("Which ocean is the largest?", ["The Indian Ocean", "The Pacific Ocean", "The Arctic Ocean", "The Atlantic Ocean"], "The Pacific Ocean"),
	new Question("What century are we in?", ["XIX", "XX", "XXI", "XXII"], "XXI"),
	new Question("How often does a leap year happen?", ["Every 4 years", "Every 8 years", "Every 10 years", "Every 72 years"], "Every 4 years"),
	new Question("Hitler party which came into power in 1933 is known as", ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"], "Nazi Party"),
	new Question("Which planet of the solar system is the warmest", ["Earth", "Mercury", "Mars", "Venus"], "Venus"),
	new Question("Which planet is the closest to the sun", ["Earth", "Mercury", "Mars", "Venus"], "Mercury"),
	new Question("During which year did World War I begin?", ["1912", "1914", "1934", "1936"], "1914"),
	new Question("How many straight edges does a cube have?", ["8", "10", "12", "14"], "12"),
	new Question("Who invented the Light Bulb?", ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "Isac Newton"], "Thomas Edison"),
	new Question("What's the capital of New York?", ["New York", "Brooklyn", "Albany", "Manhattan"], "Albany")

];

var quiz = new Quiz(questions);

populate();