// _________________________________________________________________________ TeamPaneView
main.views.TeamPaneView = main.views.PaneView.extend({
	id: "team",
	_route: "team",
	offset: 0,
	events: {
		'click .btn-move' : 'onBtnMoveClick'
	},
	// ----------------- initialize
    initialize: function() {
        console.log("TeamPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("TeamPaneView ---- beforeRender");
        //this.offset = -($('.pane-title', this.el).outerHeight() + $('.spacer', this.el).outerHeight()) - 1;
        this.offset = -$('.spacer', this.el).outerHeight() - 1;
	},
    // ----------------- onBtnMoveClick
    onBtnMoveClick: function() {
	    main.router.navigate('team', {trigger: false});
    	main.router.navigate('work', {trigger: true});
	    return false;
    }
});