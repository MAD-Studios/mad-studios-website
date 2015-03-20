// _________________________________________________________________________ HeaderView
main.views.HeaderView = Backbone.View.extend({
	/*NAV_OPEN: "nav_open",
	NAV_CLOSE: "nav_close",
	state: "",
	NAV_BTN_CLICK: "nav_btn_click",
	ARROW_LEFT_CLASS: "arrow-left",
	ARROW_TRANSITION_CLASS: "arrow-transition",
	open_nav_width: 0,*/
	events:{
		//'click .btn-nav': 'onBtnNavClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("HeaderView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("HeaderView ---- render");
        /*this.btn_nav_cnt_el = $('.btn-nav-cnt', this.el);
        this.btn_nav_cnt_el.addClass('nav-cnt-transition-l');
        this.nav_arrow_img_el = $('.arrow', this.el);
        this.nav_arrow_img_el.addClass(this.ARROW_TRANSITION_CLASS);*/
        return this;
	},    
	// ----------------- posize
    posize: function() {
    	//if(this.state == this.NAV_OPEN) this.btn_nav_cnt_el.css('left', (this.open_nav_width-1) + 'px');
	}/*,
	// ----------------- onOpenNav
    onNavOpen: function(event) {
	    var self = this;
	    //move the nav btn cnt to the rigth of the
	    //open menu
	    this.btn_nav_cnt_el.css('left', (this.open_nav_width-1) + 'px');
	    clearTimeout(this.rotateArrowTimeout);
		//setTimeout to rotate the arrow
		this.rotateArrowTimeout = setTimeout(function(){
			self.nav_arrow_img_el.addClass(self.ARROW_LEFT_CLASS);
		}, 250);
		this.state = this.NAV_OPEN;
    },
    // ----------------- onCloseNav
    onNavClose: function(event) {
        var self = this;
	    //move the nav btn cnt to the right of the
	    //open menu
	    this.btn_nav_cnt_el.css('left', '0');
	    clearTimeout(this.rotateArrowTimeout);
    	//setTimeout to rotate the arrow back
		this.rotateArrowTimeout = setTimeout(function(){
			self.nav_arrow_img_el.removeClass(self.ARROW_LEFT_CLASS);
		}, 250);
		this.state = this.NAV_CLOSE;
    },
	// ----------------- onBtnNavClick
    onBtnNavClick: function(event) {
	    $(this.el).trigger(this.NAV_BTN_CLICK);
	    return false;
	}*/
});