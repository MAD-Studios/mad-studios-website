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
        this.menuView = new main.views.MenuView({el: $('.menu', this.el)});
        this.headerView = new main.views.HeaderView({el: $('#header', this.el)});
	        this.footerView = new main.views.FooterView({el: $('#footer', this.el)});  
        this.paneContainerView.offset = $(this.headerView.el).outerHeight();
        $('.scroller', this.el).scroll(function(){
	        //clearTimeout(self.checkScrollTimeout);
	        //self.checkScrollTimeout = setTimeout(function(){
		        var scroll_top = $(this).scrollTop();
		        if(scroll_top < self.lastScrollTop) main.router.scrollDirection = main.router.UP;
		        else main.router.scrollDirection = main.router.DOWN;
		        self.lastScrollTop = scroll_top;

		        self.paneContainerView.checkPanes(scroll_top);
		        self.menuView.checkMenu(scroll_top);
		        //self.menuView.checkPos();
	        //}, 10);
	    });
	    $(this.paneContainerView.el).on(this.paneContainerView.SCROLL_TO_BOTTOM, function(event, params){
			self.scrollToBottom();
        });
        $(this.paneContainerView.el).on(this.paneContainerView.CLICK, function(events){
			self.menuView.close();
        });

        /*$(window).resize(
	       function(){ self.posize(); }
        );*/
        setTimeout(function(){
	        self.posize();
	        self.show();
        }, 100);
        return this;
	},
	// ----------------- posize
    posize: function() {
	     //make sure scroller is heightof window
	     var to_height = $(window).height();
	     $('.scroller', this.el).css('height', to_height + 'px');
	     this.paneContainerView.posize();
	     this.menuView.posize();
	     this.headerView.open_nav_width = $(this.menuView.el).outerWidth();
	     this.headerView.posize();
    },
    // ----------------- scrollTo
    scrollTo: function(id) {
	   this.paneContainerView.scrollTo($('.scroller', this.el), id);
    },
     // ----------------- scrollTo
    scrollToBottom: function() {
	   this.paneContainerView.scrollToBottom($('.scroller', this.el));
    },
    // ----------------- hide
    hide: function() {
	     //$(this.el).css('visibility', 'hidden');
    },
	// ----------------- show
    show: function() {
	     console.log("show ");
	     $(this.el).css('visibility', 'visible');
    }
});