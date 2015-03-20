// _________________________________________________________________________ WorkPaneView
main.views.WorkPaneView = main.views.PaneView.extend({
	VIDEO_EMBED_STR: '<iframe src="//instagram.com/p/m5N1iwEWuP/embed/" width="_width_" height="_height_" frameborder="0" scrolling="no" wmode="Opaque" allowtransparency="true"></iframe>',
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
	    var parent_width = $('.video-container', this.el).outerWidth() - 2;
	    var parent_height = $('.video-container', this.el).outerHeight() - 2;
	    var embed_str = this.VIDEO_EMBED_STR.replace("_width_", parent_width);
	    embed_str = embed_str.replace("_height_", parent_height);
	    var video_el = $(embed_str);
	    $('.video-container', this.el).append(video_el);
    },
    // ----------------- beforePosize
    beforePosize: function() {
	    var parent_width = $('.video-container', this.el).outerWidth() - 2;
	    var parent_height = $('.video-container', this.el).outerHeight() - 2;
	    $('iframe', this.el).css('width', parent_width + 'px');
	    $('iframe', this.el).css('height', parent_height + 'px');
    }
});