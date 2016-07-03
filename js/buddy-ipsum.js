var quotes = [
	"Buddy the Elf, what's your favorite color?",
	"I just like to smile. Smiling's my favorite.",
	"Not now, arctic puffin.",
	"So, good news... I saw a dog today.",
	"You sit on a throne of lies.",
	"Is there sugar in syrup?",
	"Francisco! That's fun to say! Francisco. Frannn-cisco. Fran-cis-cooo.",
	"I love you, I love you, I love youuuuuuu!!!!",
	"You did it! Congratulations! World's Best Cup of Coffee. Great job, everybody!",
	"Watch out! The yellow ones don't stop.",
	"SANTAAAA!!! OH MY GOD!!! I know him. I know him!",
	"We elves like to stick to the four main food groups: candy, candy canes, candy corns, and syrup.",
	"He's an angry elf.",
	"Well, if you're Santa, what song did I sing for you on your birthday this year?",
	"I planned out our whole day. First we'll make snow angels for two hours, and then we'll go ice skating, and then we'll eat a whole roll of Tollhouse cookie dough as fast as we can, and then, to finish, we'll snuggle.",
	"Son of a nutcracker!",
	"I'm in love, I'm in love, and I don't care who knows it!",
	"Deb, you have such a pretty face, you should be on a Christmas card.",
	"You smell like beef and cheese. You don't smell like Santa.",
	"This place reminds me of Santa's workshop. Except it smells like mushrooms and everyone looks like they want to hurt me.",
	"I'm sorry I ruined your lives and crammed eleven cookies into the VCR.",
	"That's a nice purple dress. Very purpley.",
	"It looks like a Christmas tree.",
	"I like to whisper too!",
	"I'm singiiiiiing. I'm in a store and I'm singiiiiiing. I'm in a store AND I'M SINGIIIIIING.",
	"I'm a cotton-headed ninny-muggins.",
	"I PAINTED A PICTURE OF A BUTTERFLY!",
	"I think you're really beautiful and I feel really warm when I'm around you and my tongue swells up. So... do you want to eat food?",
	"The best way to spread Christmas Cheer, is singing loud for all to hear.",
	"Oh, well, it's just like talking, except longer and louder, and you move your voice up and down.",
	"Did you have to borrow a reindeer to get down here?",
	"I thought maybe we could make ginger bread houses, and eat cookie dough, and go ice skating, and maybe even hold hands.",
	"Great! I got a full 40 minutes!",
	"Have you seen these toilets? They're GINORMOUS!",
	"It's just nice to meet another human that shares my affinity for elf culture.",
	"What's a Christmas Gram? I want one!",
	"What about Santa's cookies? I suppose parents eat those too?",
	"Oh, I forgot to give you a hug!",
	"Actually, I'm a human, but I was raised by elves.",
	"I passed through the seven levels of the Candy Cane forest, through the sea of swirly twirly gum drops, and then I walked through the Lincoln Tunnel.",
	"My finger has a heartbeat.",
	"Oh, syrup and coffee? Why didn't I think of that - can I try some?",
	"Can I listen to your necklace?"
];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function emptyAndGenerateGrafs (grafCount) {
	$('#graf-container').empty();
	for (var i = 0; i < grafCount; i++) {
		$('#graf-container').append('<p id="graf' + i + '"></p>');
	}
}

function firstSentence () {
	$('#graf0').append("Buddy the Elf, what's your favorite color? ");
}

function generateGraf (grafNum) {
	for (var i = 0; i < getRandomArbitrary(5, 10); i++) {
		$('#graf' + grafNum).append(quotes[Math.floor(Math.random()*quotes.length)] + ' ');
	};
}

$('#generate').click(function (e) {
	e.preventDefault();

	var grafCount = $('input[type="text"]').val();
	emptyAndGenerateGrafs(grafCount);

	if ($('input[type="checkbox"]').is(':checked')) {
		firstSentence();
	}

	for (var j = 0; j < grafCount; j++) {
		generateGraf(j);
	}
});