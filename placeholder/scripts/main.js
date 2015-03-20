
//set up main namespace
var main = {
    models: {},
    views: {},
    utils: {},
    router: {}
};

// _________________________________________________________________________ main Router
main.Router = Backbone.Router.extend({
	 UNROUTED_TIMEOUT: 200,
	 autoScrolling: false,
	 unrouted: true,
     routes:{
        "": "method",
        "how": "how",
        "work": "work",
        "team": "team",
        "disciplines": "disciplines",
        "contact": "contact"
     },
     // ----------------- initialize
     initialize: function() {
        console.log("initialize");
        //OverwriteManager.init(OverwriteManager.AUTO);
        var self = this;
        //this.mainModel = new main.models.MainModel();
        this.corporateView = new main.views.CorporateView( {el: $('.corporate', this.el)} );
        this.initTouchEvents();
        //break down url and navigate to the right place
        var route = window.location.href;
        var slash_index = route.lastIndexOf("/");
        if( slash_index > 0 && route.length >= (slash_index+1) ) route = route.slice( (slash_index+1), route.length );
        //grab the string after the last "/"
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     },
     // ----------------- method
     method: function(){
         console.log("main --- method");
         var self = this;
         var id = "method";
         //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.corporateView.scrollWindowTo(id);
		          self.corporateView.markNav(id);		          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);
	     }
     },
     // ----------------- how
     how: function(){
          console.log("main --- how");
          var self = this;
          var id = "how";
          //if first time set a delay
          if(this.unrouted){
	         setTimeout(function(){
		          self.corporateView.scrollWindowTo(id);
		          self.corporateView.markNav(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
          }
          else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);
	      }
     },
     // ----------------- work
     work: function(){
          console.log("main --- work");
          var self = this;
          var id = "work";
          //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.corporateView.scrollWindowTo(id);
		          self.corporateView.markNav(id);		          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);
		 }
     },
     // ----------------- team
     team: function(){
          console.log("main --- team");
          var self = this;
          var id = "team";
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.corporateView.scrollWindowTo(id);
		          self.corporateView.markNav(id);		          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);		 
		 }
     },
     // ----------------- disciplines
     disciplines: function(){
         console.log("main --- disciplines");
         var self = this;
         var id = "disciplines";         
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		        self.corporateView.scrollWindowTo(id);
		        self.corporateView.markNav(id);		        
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);
	     }
     },
     // ----------------- contact
     contact: function(){
         console.log("main --- contact");
         var self = this;
         var id = "contact";         
           //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){
		          self.corporateView.scrollWindowTo(id);
		          self.corporateView.markNav(id);		          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.corporateView.scrollWindowTo(id);
		     this.corporateView.markNav(id);
		 }
     },
     // ----------------- initTouchEvents
     initTouchEvents: function() {
        var self = this;
        // Check of browser supports touch events
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
           // document.addEventListener('touchmove', function (event) { event.preventDefault(); }, false);
           //if so register touch event listener to change the "selected" state of the item
           $('#main').on('touchstart', 'a', function(event) {
              self.select_timeout = setTimeout(function(){
                  self.selectItem(event);
              }, 100);
           });
           $('#main').on('touchend', 'a', function(event) {
              clearTimeout(self.select_timeout);
              self.deselectItem(event);
           });
        }
        else {
            // otherwise register mouse events instead
            $('#main').on('mousedown', 'a', function(event) {
               self.selectItem(event);
            });
            $('#main').on('mouseup', 'a', function(event) {
                 self.deselectItem(event);
            });
         }
     },
     // ----------------- posize
     posize: function() {
	     this.paneContainerView.posize();
	     this.mainNavContainerView.posize();
     },
     // ----------------- selectItem
     selectItem: function(event) {
       $(event.currentTarget).addClass('tappable-active');
     },
     // ----------------- deselectItem
     deselectItem: function(event) {
       $(event.currentTarget).removeClass('tappable-active');
     }
});

// _________________________________________________________________________



// ----------------- document ready handler
$(document).ready(function() {
    //$('.corporate').css('visibility', 'hidden');
    onDocReady();
});
// ----------------- doc handler
function onDocReady() {
    console.log("onDocReady");
	Modernizr.addTest('hires', function() {
	    // starts with default value for modern browsers
	    var dpr = window.devicePixelRatio ||
	    // fallback for IE
	        (window.screen.deviceXDPI / window.screen.logicalXDPI) ||
	    // default value
	        1;
	    return !!(dpr > 1);
	});
	if (!Modernizr.svg) {
		//replace the svg with the png
		$('img').each(function(){
			cur_src = $(this).attr('src');
			cur_src.replace(/svg/g, 'png');
			$(this).attr('src', cur_src);
		});
	}
	if (!Modernizr.hires) {
		//replace the svg with the png
		$('img').each(function(){
			cur_src = $(this).attr('src');
			cur_src.replace(/@2x/g, '');
			$(this).attr('src', cur_src);
		});
	}
    /*main.utils.templateLoader.load([ 'main'
                                  ],
        function() {
            console.log("templates loaded");
            onReady();
    });*/
    onReady();
}
// ----------------- onReady
function onReady() {
    main.router = new main.Router();
    if (Modernizr.history){
	    //Backbone.history.start({ pushState: true, root: "kelsey/projects/madstudios/web/" });
	    Backbone.history.start({ pushState: true });
    }
    else{
	    Backbone.history.start();
    }
}

