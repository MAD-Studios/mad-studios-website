// _________________________________________________________________________ PaneContainerView
main.views.PaneContainerView = Backbone.View.extend({
	//METHOD_PANE_ACTIVATE: "method_pane_activate",
	PANE_ACTIVATE: "pane_activate",
	PANE_ID_END_STR: "-pane",
	SCROLL_TO_BOTTOM: "scroll_to_bottom",
	CLICK: "",
	offset: 0,
	paneViews: [],
	curPaneView: {},
	defaultPaneId: "method",
	cur_scroll_top: 0,
    // ----------------- initialize
    initialize: function() {
        console.log("PaneContainerView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("PaneContainerView ---- render");
        var self = this;
        //create a view for each pane
        this.methodPaneView = new main.views.MethodPaneView( {el: $('#method-pane', this.el)} );
        $(this.methodPaneView.el).on(this.methodPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        //set the methodPaneView to active
        this.methodPaneView.activate();
        this.curPaneView =  this.methodPaneView;
        this.methodPaneView.render();
        this.paneViews.push(this.methodPaneView);
        this.howPaneView = new main.views.HowPaneView( {el: $('#how-pane', this.el)} );
        $(this.howPaneView.el).on(this.howPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.howPaneView.render();
        this.paneViews.push(this.howPaneView);
        this.workPaneView = new main.views.WorkPaneView( {el: $('#work-pane', this.el)} );
        $(this.workPaneView.el).on(this.workPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.workPaneView.render();
        this.paneViews.push(this.workPaneView);
        this.teamPaneView = new main.views.TeamPaneView( {el: $('#team-pane', this.el)} );
        $(this.teamPaneView.el).on(this.teamPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.teamPaneView.render();
        this.paneViews.push(this.teamPaneView);
        this.disciplinesPaneView = new main.views.DisciplinesPaneView( {el: $('#disciplines-pane', this.el)} );
        $(this.disciplinesPaneView.el).on(this.disciplinesPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        this.disciplinesPaneView.render();
        this.paneViews.push(this.disciplinesPaneView);
		this.contactPaneView = new main.views.ContactPaneView( {el: $('#contact-pane', this.el)} );
		$(this.contactPaneView.el).on(this.contactPaneView.ACTIVATE, function(event, params){
	        $(self.el).trigger(self.PANE_ACTIVATE, [params]);
        });
        $(this.contactPaneView.el).on(this.contactPaneView.RESIZE, function(event){
	        console.log("this.contactPaneView.RESIZE");
	        self.initPanes();
        });
          $(this.contactPaneView.el).on(this.contactPaneView.SHOW_MESSAGE, function(event){
	        console.log("this.contactPaneView.SHOW_MESSAGE");
	        //scrollto bottom of the screen
	        //self.scrollToBottom();
	        $(self.el).trigger(self.SCROLL_TO_BOTTOM);
	        //var scroll_to_y = $(self.el).height() - $(window).height();
			//TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});

        });
        this.contactPaneView.render();
        this.paneViews.push(this.contactPaneView);
        //on click anywhere
        //close the menu
        $(this.el).click(function(event){
	        $(self.el).trigger(self.CLICK);
	        return false;
        });

        setTimeout(function(){
	        self.initPanes();
        }, 100);
        return this;
	},
	// ----------------- initPanes
    initPanes: function() {
	    var self = this;
    	this.paneCollection = new main.models.PaneCollection();
	    var pane_obj, pos, pos_top, end_pos_top, pane_model, paneHeight;
		//save each pane id
	    //and its absolute position on the page
	    for(var i=0;i<this.paneViews.length;i++){
		    pane_view = this.paneViews[i];
		    pos = $(pane_view.el).position();
			paneHeight = $(pane_view.el).outerHeight();
		    if(i == 0) pos_top = pos.top + this.cur_scroll_top;
		    else pos_top = pos.top + this.cur_scroll_top - pane_view.offset;

		    end_pos_top = pos_top + paneHeight;
		    pane_model = new main.models.PaneModel({id: i+1, el_id: $(pane_view.el).attr('id'), posY: pos_top, endPosY: end_pos_top, view: pane_view}); 
		    self.paneCollection.add(pane_model);
	    }
    },
    // ----------------- posize
    posize: function() {
	    this.methodPaneView.posize();
	    this.howPaneView.posize();
	    this.workPaneView.posize();
	    this.teamPaneView.posize();
	    this.disciplinesPaneView.posize();
	    this.contactPaneView.posize();

	    this.initPanes();
    },
    // ----------------- checkPanes
    checkPanes: function(scroll_top) {
		console.log("checkPanes");
		var pane_view, pane_model;
		var self = this;
		this.cur_scroll_top = scroll_top;
		scroll_top += this.offset;

		if(scroll_top >= 0 && this.paneCollection){
		    pane_model = this.paneCollection.find(function(model){
		         return ( scroll_top >= model.get("posY") && scroll_top < model.get("endPosY") );
		    });
		    //get the view based upon pane_data_model.el_id
			if(pane_model) {
				pane_view = pane_model.get("view");
				if( !$(pane_view.el).hasClass(pane_view.ACTIVE_CLASS) ) pane_view.activate();
				this.curPaneView.deactivate();
				this.curPaneView = pane_view;
			}
			//also check for display
			//display
			/*pane_model = this.paneCollection.find(function(model){
				 var is_pane = false;
				 if(scroll_top + $(window).height() <= model.get("posY") + 100 &&  scroll_top + $(window).height() >= model.get("posY") - 100 && main.router.scrollDirection == main.router.DOWN ) is_pane = true;
				 else if(scroll_top <= model.get("endPosY") + 100 &&  scroll_top >= model.get("endPosY") - 100 && main.router.scrollDirection == main.router.UP) is_pane = true;
		         return is_pane;
		    });
		    //get the view based upon pane_data_model.el_id
			if(pane_model) {
				pane_view = pane_model.get("view");
				pane_view.display();
			}*/
		}
    },
    // ----------------- scrollTo
    scrollTo: function(el, id) {
	  var self = this;
	  //scroll the window to the correct pane 
	  //according to id
	  if(this.paneCollection){
		  var pane_model = this.paneCollection.find(function(model){
			return ( model.get("el_id") == (id + self.PANE_ID_END_STR) );
		  });
		  var scroll_to_y = pane_model.get("posY");
		  TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});
	  }
    },
    // ----------------- scrollToBottom
    scrollToBottom: function(el) {
	  var self = this;
	  //scroll the window to paneContainerView.heigh - window.height
	  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	  var scroll_to_y = $(this.el).height() - $(window).height() + (this.offset*2);
	  TweenLite.to(el, 1.4, {scrollTo:{y:scroll_to_y, autoKill:false}, ease:Expo.easeOut, onStart:self.onAutoScrollStart, onComplete:self.onAutoScrollComplete});
    },
    // ----------------- onAutoScrollStart
    onAutoScrollStart: function() {
	    main.router.autoScrolling = true;
    },
    // ----------------- onAutoScrollComplete
    onAutoScrollComplete: function() {
        main.router.autoScrolling = false;
    }
});