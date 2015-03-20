// _________________________________________________________________________ MethodPaneView
main.views.MethodPaneView = main.views.PaneView.extend({
	PREPEND_PLACEHOLDER_STR: "Example: ",
	id: "method",
	_route: "",
	offset: 0,
	questions: [],
	answers: [],
	events: {
		'click .btn-down': 'onBtnDownClick'	
	},
	// ----------------- initialize
    initialize: function() {
        console.log("MethodPaneView ---- initialize"); 
        var self = this;
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("MethodPaneView ---- beforeRender");
        var self = this;
        setTimeout(function(){       
	        self.model = main.router.responseGeneratorModel;
	        self.questions = self.model.get("questions");
	        self.answers = self.model.get("answers");
	        self.setQuestionPlaceholder();
			self.generateQuestion();
        }, 100);
        //choose a question
		
		$('#input-method', this.el).keyup(function(event){
		    if(event.keyCode == 13){
		        self.submit();
		    }
		});
		//on btn-arrow img load animate it down
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	},
	// ----------------- beforeActivate
    beforeActivate: function() {
	    //animate the btn-arrow
	    //
	},
	// ----------------- beforeActivate
    beforeDeactivate: function() {
    },
    // ----------------- beforePosize
    beforePosize: function() {
	    //position content to be nearly centered
	    var _height = $(this.el).outerHeight();
	    var spacer_el = $('.spacer', this.el);
	    var to_margin_top = (_height - $('.row-content', this.el).outerHeight())/2.0 + 18;
	    $('.content', this.el).css('margin-top', to_margin_top + 'px');
	    //make sure spacer sticks to the bottom
	    var to_top = _height - spacer_el.outerHeight();
	    spacer_el.css('top', to_top + 'px');
    },
	// ----------------- setQuestionPlaceholder
	setQuestionPlaceholder:function(){
		var quest = this.generateQuestion();
		//set the input placeholder to the 
		//generated question
		$('#input-method', this.el).attr('placeholder', this.PREPEND_PLACEHOLDER_STR + quest);
	},
	// ----------------- generateQuestion
	generateQuestion:function(){
		//generate a random number
		//between 0 and num questions
		var rand = Math.floor(Math.random()*this.questions.length);
		this.model.set({currentQuestion: rand});
		return this.questions[rand];
	},
	// ----------------- submit
	submit:function(){
		// send them into 
		//the story
	},
	// ----------------- submit
	onBtnDownClick: function(){
		if (Modernizr.history) main.router.navigate('', {trigger: false});
		main.router.navigate('how', {trigger: true});
		return false;
	}
});