// _________________________________________________________________________ PaneView
main.views.PaneView = Backbone.View.extend({
	ACTIVE_CLASS: "pane-active",
	FULL_SCREEN_CLASS: "full-screen",
	DEACTIVATE: "deactivate",
	ACTIVATE: "activate",
	RESIZE: "resize",
	offset: 0,
	id: "",
	_route: "",
	paneActivationData: [],
    // ----------------- initialize
    initialize: function() {
        console.log("PaneView ---- initialize");
    },
    // ----------------- render
    render: function(eventName) {
	    if(this.beforeRender) this.beforeRender();
        console.log("PaneView ---- render");
        //create a view for each pane
        this.posize();
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
	    console.log("activate ----- this.id ----- " + this.id);
	    $(this.el).trigger(this.ACTIVATE, [this.id]);
    }, 
    // ----------------- deactivate
    deactivate: function() {
    	$(this.el).removeClass(this.ACTIVE_CLASS);
	    if(this.beforeDeactivate) this.beforeDeactivate();
	    $(this.el).trigger(this.DEACTIVATE);
    }
});