// _________________________________________________________________________ HeaderView
main.views.HeaderView = Backbone.View.extend({
	TRANS_CLASS: "header-trans",
	events:{
	},
    // ----------------- initialize
    initialize: function() {
        console.log("HeaderView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("HeaderView ---- render");
        return this;
	},    
	// ----------------- posize
    posize: function() {
	},
	// ----------------- beginHide
    beginHide: function() {
	    var self = this;
	    setTimeout(function(){
		    //get current Y
		    var cur_top = parseInt($(self.el).css('top'));
		    //move this down
		    $(self.el).addClass(self.TRANS_CLASS);
		    $(self.el).css('top', (cur_top - $(self.el).outerHeight()) + 'px');
	    }, 500);
	}	
});