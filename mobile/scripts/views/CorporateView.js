// _________________________________________________________________________ CorporateView
main.views.CorporateView = Backbone.View.extend({
	CORPORATE_SUBMIT: "corporate_submit",
	CORPORATE: "corporate",
	CORPORATE_INIT: "corporate-init",
	template_load_external: false,
	templateLoader: main.utils.templateLoader,
    // ----------------- initialize
    initialize: function() {
        console.log("CorporateView ---- initialize");
        //if no el pull it in through template loader
        if(!($(this.el).hasClass(this.CORPORATE_INIT))) {
	         console.log("template load external");
	         this.template = _.template(this.templateLoader.get(this.CORPORATE));
	         this.template_load_external = true;
        }
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("CorporateView ---- render");
	    var self = this;
	    if(this.template_load_external) {
		    $(this.el).html(this.template());
		    $(this.el).addClass(this.CORPORATE);
	    }
	    //set touch move to default in case it 
	    //is coming from the story where 
	    //default behavior is prevented
	    document.ontouchmove = function(event){ return true; }
        this.paneContainerView = new main.views.PaneContainerView({el: $('#pane-container', this.el)});
        this.menuView = new main.views.MenuView({el: $('.menu', this.el)});
        this.headerView = new main.views.HeaderView({el: $('#header', this.el)});
	    this.footerView = new main.views.FooterView({el: $('#footer', this.el)});  
        this.paneContainerView.offset = $(this.headerView.el).outerHeight();
         this.scroller_el =  $('.scroller', this.el);
        this.scroller_el.scroll(function(){
	        var scroll_top = $(this).scrollTop();
	        if(scroll_top < self.lastScrollTop) main.router.scrollDirection = main.router.UP;
	        else main.router.scrollDirection = main.router.DOWN;
	        self.lastScrollTop = scroll_top;
	        self.paneContainerView.checkPanes(scroll_top);
	        self.menuView.checkMenu(scroll_top);
	    });
	    $(this.paneContainerView.el).on(this.paneContainerView.SCROLL_TO_BOTTOM, function(event, params){
			self.scrollToBottom();
        });
        $(this.paneContainerView.el).on(this.paneContainerView.CLICK, function(events){
			self.menuView.close();
        });
        $(this.paneContainerView.el).on(this.paneContainerView.METHOD_PANE_SUBMIT, function(event){
	        $(self.el).trigger(self.CORPORATE_SUBMIT);
        });

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
	     this.scroller_el.css('height', to_height + 'px');
	     this.paneContainerView.posize();
	     this.menuView.posize();
	     this.headerView.open_nav_width = $(this.menuView.el).outerWidth();
	     this.headerView.posize();
    },
    // ----------------- scrollWindowTo
    /*scrollWindowTo: function(id, animate) {
	    if(animate == null ||  typeof animate === undefined) animate = true;
	   this.paneContainerView.scrollWindowTo(id, animate);
    },*/
    // ----------------- scrollTo
    scrollTo: function(id, animate) {
	   this.paneContainerView.scrollTo(this.scroller_el, id, animate);
    },
     // ----------------- scrollTo
    scrollToBottom: function() {
	   this.paneContainerView.scrollToBottom(this.scroller_el);
    },
    // ----------------- beginHide
    beginHide: function() {
        var self = this;
    	this.paneContainerView.scrollToTop(this.scroller_el);
	    this.headerView.beginHide();
	    this.menuView.beginHide();
	    this.paneContainerView.beginHide();
	    this.basicDispose();
        
        //set a timeout and
        //to ensure scrollTop has finished
        //do a clearLowerPanes();
        setTimeout(function(){
            self.paneContainerView.clearLowerPanes();
        }, 1500);
        
	    //add the gold cover
	    //setTimeout
	    //show the gold cover
	    //move corporate off stage and make it invisible
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
    // ----------------- basicDispose
	basicDispose: function(){
		this.scroller_el.off('scroll');
	},
	// ----------------- beforeDispose
	beforeDispose: function(){
		 console.log("CorporateView ---- beforeDispose");
		 $(this.el).removeClass(this.CORPORATE_INIT);
		 //remove any event listeners 
		 $(this.paneContainerView.el).off();
		 $(this.menuView.el).off();
	     this.scroller_el.off('scroll');
		 //dispose children
		 this.paneContainerView.dispose();
		 this.menuView.dispose();
		 this.headerView.dispose();
		 this.footerView.dispose();
	}
});