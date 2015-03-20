// _________________________________________________________________________ MainView
main.views.MainView = Backbone.View.extend({
    // ----------------- initialize
    initialize: function() {
        console.log("MainView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("MainView ---- initialize");
        var self = this;
	    this.corporateView = new main.views.CorporateView( {el: $('.corporate', this.el)} );
	     $(window).resize(  function(){
			var device_width = $(window).width();
			if(device_width >= 640) $(window.document.documentElement).addClass('large');
			else $(window.document.documentElement).removeClass('large');
	        self.posize(); 
	       }
        );
        /*$(window).on('orientationchange', function(){
	        //set the scrollTop of scroller to 0
	        $('.scroller', self.el).scrollTop(0);
        });*/
        return this;
	},
	// ----------------- posize
    posize: function() {
	    this.corporateView.posize();
    },
    // ----------------- scrollToPane
    scrollToPane: function(id) {
	   this.corporateView.scrollTo(id);
	   //this.corporateView.markNav(id);
    }
});