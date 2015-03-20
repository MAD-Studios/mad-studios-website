// _________________________________________________________________________ PaneView
main.views.PaneView = Backbone.View.extend({
	ANIM_OFFSET: 50,
	ACTIVE_CLASS: "pane-active",
	FULL_SCREEN_CLASS: "full-screen",
	CONTENT_TRANSITION_CLASS: "pane-content-transition",
	DEACTIVATE: "deactivate",
	ACTIVATE: "activate",
	RESIZE: "resize",
	offset: 0,
	default_content_margin: 0,
	id: "",
	_route: "",
	paneActivationData: [],
    // ----------------- initialize
    initialize: function() {
        console.log("PaneView ---- initialize");
    },
    // ----------------- render
    render: function(eventName) {
	    var self = this;
	    if(this.beforeRender) this.beforeRender();
        console.log("PaneView ---- render");
        this.content_el = $('.content', this.el);
        //create a view for each pane
       setTimeout(function(){
	        self.default_content_margin = parseInt(self.content_el.css('margin-top'));
        }, 150);
        return this;
	},
	// ----------------- posize
    posize: function() {
		if( $(this.el).hasClass(this.FULL_SCREEN_CLASS)){
			var to_h = $(window).height();
			var min_h = parseInt( $(this.el).css('min-height') );
			if(to_h < min_h) to_h = min_h;
			$(this.el).height( to_h );
		} 
		if(this.beforePosize) this.beforePosize();
    },
    // ----------------- activate
    activate: function() {
	    $(this.el).addClass(this.ACTIVE_CLASS);
	    if(this.beforeActivate) this.beforeActivate();
	    if(main.router.navigate && !main.router.autoScrolling)  main.router.navigate(this._route, {trigger: false});
	    $(this.el).trigger(this.ACTIVATE, [this.id]);
	    //animate margin of content
	    //if(this.content_el) this.animateContent();
    },
    // ----------------- display
    display: function() {
	    //if(this.content_el) this.animateContent();
    }, 
    // ----------------- deactivate
    deactivate: function() {
    	$(this.el).removeClass(this.ACTIVE_CLASS);
	    if(this.beforeDeactivate) this.beforeDeactivate();
	    $(this.el).trigger(this.DEACTIVATE);
    }//,
    // ----------------- animateContent
    /*animateContent: function() {
    	var self = this;
    	clearTimeout(this.animContentTimeout);
    	clearTimeout(this.delayAnimContent);
	    this.animContentTimeout = setTimeout(function(){
		    console.log("animateContent ---- this.id = " + self.id);
		    //remove the transition class
		    self.content_el.removeClass(self.CONTENT_TRANSITION_CLASS);
		    //set the content margin to positive
		    //offset if scrolling in down direction
		    //set the content margin to negative if the 
		    //scrolling direction is down
		    if(main.router.scrollDirection == main.router.DOWN){
			    self.content_el.css('margin-top', (parseInt(self.default_content_margin) + self.ANIM_OFFSET) + 'px');
		    }
		    else{
			   	self.content_el.css('margin-top', (parseInt(self.default_content_margin) - self.ANIM_OFFSET) + 'px'); 
		    }

		    //them set it back to 0
		    //add the transition Class
		    self.delayAnimContent = setTimeout(function(){
		    	self.content_el.addClass(self.CONTENT_TRANSITION_CLASS);
			    self.content_el.css('margin-top', self.default_content_margin + 'px');
		    }, 400);
	    }, 10);
    }*/
});