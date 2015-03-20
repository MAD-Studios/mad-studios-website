// _________________________________________________________________________ DisciplinesPaneView
main.views.DisciplinesPaneView = main.views.PaneView.extend({
	id: "disciplines",
	_route: "disciplines",
	offset: 0,
	// ----------------- initialize
    initialize: function() {
        console.log("DisciplinesPaneView ---- initialize");
        //this.render();
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("DisciplinesPaneView ---- beforeRender");
        this.offset =  -$('.spacer', this.el).outerHeight() - 1;
	}
});