// _________________________________________________________________________ CorporateView
main.views.CorporateView = Backbone.View.extend({
    // ----------------- initialize
    initialize: function() {
        console.log("CorporateView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("CorporateView ---- render");
	    var self = this;
        this.paneContainerView = new main.views.PaneContainerView({el: $('#pane-container', this.el)});
        /*$(this.paneContainerView.el).on(this.paneContainerView.METHOD_PANE_ACTIVATE, function(){
	        self.mainNavContainerView.animateToMovable();
        });*/
        $(this.paneContainerView.el).on(this.paneContainerView.PANE_ACTIVATE, function(event, params){
	        console.log("params = " + params);
	        //if method pane
	        if(params == self.paneContainerView.defaultPaneId) self.mainNavContainerView.animateToMovable();
	        //for all
	        //mark the correct nav
	        self.markNav(params, true);
        });
        this.mainNavContainerView = new main.views.MainNavContainerView({el: $('#main-nav-container', this.el)});
        this.headerView = new main.views.HeaderView({el: $('#header', this.el)});
        this.mainNavContainerView.transition_point = $('#header', this.el).outerHeight();
        this.footerView = new main.views.FooterView({el: $('#footer', this.el)});  
        this.paneContainerView.offset = $(this.headerView.el).outerHeight();
        $(this.mainNavContainerView.el).on(this.mainNavContainerView.ANIMATE_TO_FIXED, function(){
	        self.headerView.lightenBackground();
        });
		$(this.mainNavContainerView.el).on(this.mainNavContainerView.ANIMATE_TO_MOVEABLE, function(){
	        self.headerView.darkenBackground();
        });

        $(window).scroll(function(){
	        self.paneContainerView.checkPanes();
	        self.mainNavContainerView.checkPos();
	    });
        $(window).resize(
	       function(){ self.posize(); }
        );
        this.show();
        return this;
	},
	// ----------------- posize
    posize: function() {
	     this.paneContainerView.posize();
	     this.mainNavContainerView.posize();
    },
    // ----------------- scrollWindowTo
    scrollWindowTo: function(id) {
	   this.paneContainerView.scrollWindowTo(id);
    },
    // ----------------- hide
    hide: function() {
	     //$(this.el).css('visibility', 'hidden');
    },
	// ----------------- show
    show: function() {
	     console.log("show ");
	     $(this.el).css('visibility', 'visible');
    },
    // ----------------- markNav
    markNav: function(btn_id, delay) {
    	if(delay == null) delay = false;
	    this.mainNavContainerView.markBtn(btn_id, delay);
	}
});