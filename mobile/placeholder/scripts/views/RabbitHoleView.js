// _________________________________________________________________________ RabbitHoleView
main.views.RabbitHoleView = Backbone.View.extend({
    // ----------------- initialize
    initialize: function() {
        console.log("RabbitHoleView ---- initialize");
    },
    // ----------------- render
    render: function(eventName) {
        console.log("RabbitHoleView ---- render");
	    var self = this;
        this.sceneContainerView = new main.views.SceneContainerView();
        return this;
	},
	// ----------------- posize
    posize: function() {
    }
});