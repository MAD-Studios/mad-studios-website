/* ===============================
	
	Audio Class
	
	To use add the following data 
	attributes to your html elements
	follwing the manner of scrollr
	
	data-sound-2000: "play",
	data-sound-3000: "pause",

================================== */
main.utils.Audio = {
	DATA_ATTRIBUTE_BASE: "data-sound-",
	init: function(){
	},
	checkAudio: function(scrollCurTop){
		var self = this;
		//grab all elements with the "data-sound-*" attribute
		$('[^=' this.DATA_ATTRIBUTE_BASE + ']').each(function(){
			var data = $(this).data();
			var trigger_num = parseInt($(this).attr().replace(self.DATA_ATTRIBUTE_BASE);
			var trigger_action = $(this).attr(attr);
			//if(scroll top offeset is at or above trigger point) 
			if(scrollCurTop >= trigger_num) {
				//pause or play 
				//depending on 
				//!!!!!!!!!!!!!!!!!!!!!!!!!
			}
		});
	}
};

