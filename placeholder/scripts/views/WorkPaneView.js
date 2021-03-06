// _________________________________________________________________________ WorkPaneView
main.views.WorkPaneView = main.views.PaneView.extend({
	//VIDEO_EMBED_STR: '<iframe src="//instagram.com/p/m5N1iwEWuP/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
	VIDEO_EMBED_STR: '<iframe src="//instagram.com/p/m5N1iwEWuP/embed/" width="_width_" height="_height_" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
	id: "work",
	_route: "work",
	offset: 0,
	    // ----------------- initialize
    initialize: function() {
        console.log("WorkPaneView ---- initialize");
    },
    // ----------------- beforeRender
    beforeRender: function() {
        console.log("WorkPaneView ---- beforeRender");
        var self = this;
        this.offset = -($('.pane-title', this.el).outerHeight() + $('.spacer', this.el).outerHeight()) - 1;
        //setTimeout to add the video
        setTimeout(function(){
	        self.addVideo();
        }, 1500);
	},
	// ----------------- addVideo
    addVideo: function() {
	     //make the vide the size of its parent
	    var parent_width = $('.video-container', this.el).outerWidth();
	    var parent_height = $('.video-container', this.el).outerHeight();
	    var embed_str = this.VIDEO_EMBED_STR.replace("_width_", parent_width-2);
	    embed_str = embed_str.replace("_height_", parent_height-2);
	    var video_el = $(embed_str);
	    $('.video-container', this.el).append(video_el);
    }
});