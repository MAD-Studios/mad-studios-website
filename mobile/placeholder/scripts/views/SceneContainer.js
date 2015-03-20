// _________________________________________________________________________ SceneContainerView
main.views.SceneContainerView = Backbone.View.extend({
	PEPARE_OFFSET: 1000,
    // ----------------- initialize
    initialize: function() {
    },
    // ----------------- render
    render: function(eventName) {
        console.log("SceneContainerView ---- render");
	    var self = this;
	    //set model to the sceneCollection
	    this.model = new main.models.SceneCollection();
        return this;
	},
	// ----------------- posize
    posize: function() {
	   
    },
    // ----------------- checkScenes
    checkScenes: function(scrollr_offset_top) {
	    //prepare_offset
	    this.model.each(function(scene_model){
		    if(scene_model.get("offsetTop") - this.PEPARE_OFFSET <= scrollr_offset_top) {
			    //need to  ceate the new scene view
			    // render it
		    }
		    //now check if
		    
	    });
	   //determine which scenes needs to be 
	   //added 
	   //and which scene needs to be
	   //removed based upon  their offsetTop value
	   // -----
	   //then call scrollr.refresh();
	   //so that scrollr library can
	   //parse the elements
    }
});