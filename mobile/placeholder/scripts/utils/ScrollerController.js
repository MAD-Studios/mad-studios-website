// ===============================
	
//	ScrollerController Class
	
//	handles interaction with scrollr.js

// ===============================

app.utils.ScrollerController = {
/* */
	init: function(){
		var self = this;
		//listen for the beforeRender event
		var scroller = skrollr.get();
		scroller.on('beforeRender', function(obj){
			// obj has key values
			// curTop: 10, //the current scroll top offset
		    // lastTop: 0, //the top value of last time
		    // maxTop: 100, //the max value you can scroll to. curTop/maxTop will give you the current progress.
		    // direction: 'down'
		    self.checkPos();
			//audio.checkAudio();
		});
	},
	checkPos: function(obj){
		//if
	}
};