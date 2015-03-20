// _________________________________________________________________________ MethodPaneView
main.views.MethodPaneView = main.views.PaneView.extend({
	id: "method",
	_route: "",
	offset: 0,
	    // ----------------- initialize
    initialize: function() {
        console.log("MethodPaneView ---- initialize");
        //this.render();
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("MethodPaneView ---- beforeRender");
	},
	// ----------------- beforeActivate
    beforeActivate: function() {
	},
	// ----------------- beforeActivate
    beforeDeactivate: function() {
    },
    // ----------------- beforePosize
    beforePosize: function() {
	    //position content to be nearly centered
	    var to_margin_top = ($(this.el).outerHeight() - $('.content', this.el).outerHeight())/2.7;
	    $('.content', this.el).css('margin-top', to_margin_top + 'px');
    }
});