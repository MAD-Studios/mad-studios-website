// _________________________________________________________________________ MainNavContainerView
main.views.MainNavContainerView = Backbone.View.extend({
	TOP_STICKY_CLASS: "top-sticky",
	FULL_LOGO_CLASS: "full-logo",
	BTN_CLASS_END_STR: "-btn",
	ANIMATE_TO_FIXED: "animate_to_fixed",
	ANIMATE_TO_MOVEABLE: "animate_to_moveable",
	H_LOGO_CLASS: "h-logo",
	MENU_OFFSET: 30,
	MIN_TOP: 522,
	transition_point: 0,
	default_top: 0, 
	is_fixed: false,
	is_fixed_prep: false,
	default_logo_el_margin_top: 0,
	default_nav_el_margin_top: 0,
	events: {
		'click .logo' : 'onLogoClick',
		'click .how-btn' : 'onHowBtnClick',
		'click .work-btn' : 'onWorkBtnClick',
		'click .team-btn' : 'onTeamBtnClick',
		'click .disciplines-btn' : 'onDisciplinesBtnClick',
		'click .contact-btn' : 'onContactBtnClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("MainNavContainerView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("MainNavContainerView ---- render");
		this.spacer_el = $('.spacer', this.el);
		this.logo_el = $('.logo', this.el);
		this.nav_el = $('.nav', this.el);
		this.default_logo_el_margin_top = this.logo_el.css('margin-top');
		this.default_nav_el_margin_top = this.nav_el.css('margin-top');
		this.default_height = $(this.el).outerHeight();
        this.posize();
        this.prepareAnimation();
        this.show();
        return this;
	},
	// ----------------- initPanes
    initPanes: function() {
	    //save each pane id
	    //and its absolute position on the page
    },
    // ----------------- posize
    posize: function() {
	   //if does not have class top-sticky
	   //position it at the bottom of the window
	   this.default_top = $(window).height() - this.default_height;
	   if(this.default_top < this.MIN_TOP) this.default_top = this.MIN_TOP;
	   if( !$(this.el).hasClass(this.TOP_STICKY_CLASS) ){
		   $(this.el).css('top', this.default_top + 'px');
	   }
    },
    // ----------------- posize
    checkPos: function() {
	    var self = this;
	    var scroll_top = $(window).scrollTop() + this.transition_point;
	    //if the top of this has reached
	    if(scroll_top >= this.default_top) {
		    //the header
		    this.animateFixedPrep();
	    }
	    if(scroll_top >=  this.default_top + this.MENU_OFFSET) {
		   this.animateToFixed();
		}
    },
      // ----------------- animateFixedPrep
    animateFixedPrep: function() {
		var self = this;
		if(!this.is_fixed_prep){
		    ///fade out the full logo
		    //delay fade in the h-logo
		    //change the nav to fixed and 
		    //set it in the right place
		    TweenLite.killTweensOf(this.spacer_el);
		    TweenLite.killTweensOf(this.logo_el, false, {opacity:true} );
		    TweenLite.to(this.spacer_el, 0.15, {opacity:0, overwrite: 2});
		    TweenLite.to(this.logo_el, 0.25, { opacity:0, overwrite: 2 });

	    }
	    this.is_fixed_prep = true;
	},
    // ----------------- animateToFixed
    animateToFixed: function() {
		var self = this;
		if(!this.is_fixed ){
		    $(self.el).css('position', 'fixed');
		    $(self.el).css('top', 0);
		    $(self.el).addClass(self.TOP_STICKY_CLASS);
		    self.swapLogosH();
		    TweenLite.killTweensOf(this.logo_el, false, {marginTop:true} );
		    TweenLite.killTweensOf(this.nav_el, false, {marginTop:true});

		    TweenLite.to(self.logo_el, 0.3, {marginTop:"-1px", ease: Sine.easeOut, overwrite: 2});
		    TweenLite.to(self.nav_el, 0.45, {marginTop:"1px", ease: Sine.easeOut, overwrite: 2});
		    //trigger event to fade the header bg
		    $(this.el).trigger(self.ANIMATE_TO_FIXED);
		    this.is_fixed = true;
	    }
	    this.is_fixed = true;
    },
    // ----------------- animateToMovable
    animateToMovable: function() {
	    var self = this;
	    console.log("animateToMovable");
	    if(this.is_fixed || this.is_fixed_prep){
		    //fade out h logo
		    //delay fade in new logo
		    //delay fade in stroke
		    //set position to absolute
		    //clearTimeout(this.changePosDefTimeout);
			//this.changePosDefTimeout = setTimeout(function(){
			    $(self.el).css('position', 'absolute');
			    $(self.el).css('top', self.default_top);
			    $(self.el).removeClass(self.TOP_STICKY_CLASS);
			    TweenLite.killTweensOf(self.spacer_el);
			    TweenLite.killTweensOf(this.logo_el, false, {marginTop:true} );
			    TweenLite.killTweensOf(this.nav_el, false, {marginTop:true});
	
			    TweenLite.to(self.spacer_el, 0.15, {opacity:1, overwrite: 2, delay:0.25});
			    TweenLite.to(self.logo_el, 0.1, { opacity:0, overwrite: 2, onComplete: function(){
				   self.swapLogos();
			    } });
			    TweenLite.to(self.logo_el, 0.4, {marginTop:self.default_logo_el_margin_top, ease: Quart.easeOut, delay:0.15, overwrite: 2});
			    TweenLite.to(self.nav_el, 0.5, {marginTop:self.default_nav_el_margin_top, ease: Quart.easeOut, delay:0.15, overwrite: 2});
			    $(self.el).trigger(self.ANIMATE_TO_MOVEABLE);
		    //}, 10);
		}
		this.is_fixed = false;
		this.is_fixed_prep = false;
    },
    // ----------------- swapLogos
    swapLogosH: function() {
    	this.logo_el.removeClass(this.FULL_LOGO_CLASS);
	    this.logo_el.addClass(this.H_LOGO_CLASS);
	    TweenLite.killTweensOf(this.logo_el, false, {opacity:true} );
	    TweenLite.to(this.logo_el, 0.15, {opacity:1, overwrite: 2, delay:0});
    },
    // ----------------- swapLogos
    swapLogos: function() {
		this.logo_el.removeClass(this.H_LOGO_CLASS);
		this.logo_el.addClass(this.FULL_LOGO_CLASS);
		TweenLite.killTweensOf(this.logo_el, false, {opacity:true} );
	    TweenLite.to(this.logo_el, 0.25, {opacity:1, overwrite: 2});
    },
    // ----------------- show
    show: function() {
    },
    // ----------------- markBtn
    markBtn: function(btn_id, delay) {
	    var self = this;
	    if(delay == null) delay = false;
	    console.log("markBtn  ---- btn_id = " + btn_id);
	    if(delay){
		    clearTimeout(this.markBtnTimeout);
		    $('.btn', self.el).each(function(){
			     $(this).removeClass('active');
		    });
		    this.markBtnTimeout = setTimeout(function(){
			    //$('.btn', self.el).each(function(){
			    $((btn_id + self.BTN_CLASS_END_STR), self.el).addClass('active');
			    //});
		    }, 200);
	    }
	    else{
		    clearTimeout(this.markBtnTimeout);
		    $('.btn', self.el).each(function(){
			    if($(this).hasClass(btn_id + self.BTN_CLASS_END_STR, self.el)) $(this).addClass('active');
				else $(this).removeClass('active');
			 });
	    }
    },
    // ----------------- prepareAnimation
    prepareAnimation: function() {
    },
    // ----------------- onHowBtnClick
    onHowBtnClick: function(event) {
	    if (Modernizr.history) main.router.navigate('', {trigger: false});
	    main.router.navigate('how', {trigger: true});
	    return false;
    },
    // ----------------- onWorkBtnClick
    onWorkBtnClick: function(event) {
    	if (Modernizr.history) main.router.navigate('', {trigger: false});
	    main.router.navigate('work', {trigger: true});
	    return false;
    },
    // ----------------- onHowBtnClick
    onTeamBtnClick: function(event) {
        if (Modernizr.history) main.router.navigate('', {trigger: false});
	    main.router.navigate('team', {trigger: true});
	    return false;
    },
    // ----------------- onHowBtnClick
    onDisciplinesBtnClick: function(event) {
        if (Modernizr.history) main.router.navigate('', {trigger: false});
	    main.router.navigate('disciplines', {trigger: true});
	    return false;
    },  
	// ----------------- onHowBtnClick
    onContactBtnClick: function(event) {
        if (Modernizr.history) main.router.navigate('', {trigger: false});
	    main.router.navigate('contact', {trigger: true});
	    return false;
    },
    // ----------------- onLogoClick
    onLogoClick: function(event) {
        if (Modernizr.history) main.router.navigate('work', {trigger: false});
	    main.router.navigate('', {trigger: true});
	    return false;
    }
    
});