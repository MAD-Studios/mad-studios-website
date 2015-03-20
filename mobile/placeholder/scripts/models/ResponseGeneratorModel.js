// _________________________________________________________________________ PaneModel
main.models.ResponseGeneratorModel = Backbone.Model.extend({
	 // set vars
     defaults: {
         "questions": [
			"How can I increase my social media presence?",
			"What’s more effective, advertising online or on television?",
			"Are Facebook ads effective at targeting consumers?",
			"What are some simple web marketing techniques?",
			"How do I use web analytics to my advantage?"
		 ],
         "answers": [
			"Hire a homeless guy to write your copy, those dudes have ridiculous penmanship skills.",
			"Increase your social media presence by deleting all of your social media. Less is more these days.",
			"Dunk an intern in a pool of yellow paint and have him run around town screaming your company’s name.",
			"Do what all great marketers have done for centuries and hire a bunch of hot women with big breasts.",
			"Eat a bag of peyote and marinate on that thought a little more. We’re sure you’ll come up with something.",
			"Well, lets see…you could always film a squirrel performing some sort of human activity. People always go for that.",
			"One word: Tom Selleck’s Mustache",
			"Think of branding your company the same way celebrities name their babies. Choose your favorite color, animal and plant, combine them into one word and Wallah! You’ve got a multi-million dollar enterprise.",
			"I’m sorry I didn’t understand that question. Were you asking how to market socket appliances, or rocket scientists? ",
			"What a boring question. Lets talk about something more exciting, like Kim Jong Un’s ridiculous haircut. Those North Koreans think they’re soooooo stylish",
			"Of course we can help you with all of your SEO needs, but first we’ll need you to take a blood oath that you’ll never leave our company for another.",
			"When I was just a young website my father, the Internet, told me I could grow up to be whatever I wanted. Now look at me, I’m answering questions from you. Talk about being a let down.",
			"What would make you think we’d know that? Go Google it pal.",
			"Tap dancing monkeys on a hot 4th of July, my oh my, time sure does fly.",
			"You know Billie Mays once asked me that exact same marketing question. Where’s he at these days?",
			"Just stick a Hello Kitty sticker on it and BAM! I guarantee you sell out in Asia.",
			"Ok, here’s what you do. You make the drop on the corner of Broward and 3rd Ave. Once we verify that the money is in the bag, you can then have your answer back.",
			"The best way to have customers buy your product is to actually be selling something that people give a crap about.",
			"Product placement in films and television is a great way to have your company stand out. It’s only going to cost you a couple million dollars. No biggie.",
			"Hire an up and coming rapper to pitch your product to his fans. These guys know a lot about selling product for a premium price.",
			"Stick your underwear on your head and do a rain dance. Hey, it worked for Mark Zuckerberg.",
			"Marketing is kind of like dancing. The more you drink the better you get at it. Did that answer your question?",
			"#1 rule in marketing: When in doubt about how to answer a client’s question, outsource it to India and go on vacation.",
			"Wow, that’s a great question. You’re too smart for us. Sorry we can’t work with you.",
			"I know! We’ll make bumper stickers. Who doesn’t love a great, big sticker that is impossible to remove stuck to their car"
		],
		"current_question": 0,
		"current_answer": 0
     },
     // ----------------- initialize
     initialize: function(){
         console.log("ResponseGeneratorModel ---- initialize");
     }
});