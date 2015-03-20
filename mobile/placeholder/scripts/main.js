
//set up main namespace
var main = {
    models: {},
    views: {},
    utils: {},
    router: {}
};

// _________________________________________________________________________ main Router
main.Router = Backbone.Router.extend({
	 DOWN: "down",
	 UP: "up",
	 UNROUTED_TIMEOUT: 200,
	 autoScrolling: false,
	 scrollDirection: "",
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
        var self = this;
        this.responseGeneratorModel = new main.models.ResponseGeneratorModel();
        this.mainView = new main.views.MainView( {el: $('#main', this.el)} );
        this.initTouchEvents();
        //break down url and navigate to the right place
        //grab the string after the last "/"
        var route = window.location.href;
        var slash_index = route.lastIndexOf("/");
        if( slash_index > 0 && route.length >= (slash_index+1) ) route = route.slice( (slash_index+1), route.length );
     },
     // ----------------- method
     method: function(){
         console.log("main --- method");
         var self = this;
         var id = "method";
         //if first time set a delay
         if(this.unrouted){
	         setTimeout(function(){	
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
          }
          else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
		          self.mainView.scrollToPane(id);
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
		          self.mainView.scrollToPane(id);	          
	         }, this.UNROUTED_TIMEOUT);
	         self.unrouted = false;
         }
         else{
		     //scroll to the  posY
		     this.mainView.scrollToPane(id);
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
    onDocReady();
});
// ----------------- doc handler
function onDocReady() {
    console.log("onDocReady");
    var cur_src;
	Modernizr.addTest('hires', function() {
	    // starts with default value for modern browsers
	    var dpr = window.devicePixelRatio || 1;
	    return !!(dpr > 1);
	});
	Modernizr.addTest('large', function() {
	    var device_width = $(window).width();
	    //var device_width = window.width;
	    return (device_width >= 640);
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
	    //Backbone.history.start({ pushState: true, root: "kelsey/projects/madstudios/mobile" });
	   Backbone.history.start({ pushState: true });
    }
   else{
	    Backbone.history.start();
   }
}

