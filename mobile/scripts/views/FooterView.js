// _________________________________________________________________________ FooterView
main.views.FooterView = Backbone.View.extend({
	events: {
		'click .btn-up' : 'onBtnUpClick'
	},
    // ----------------- initialize
    initialize: function() {
        console.log("FooterView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("FooterView ---- render");
        return this;
	},    
	// ----------------- posize
    posize: function() {
	},
	// ----------------- submit
	onBtnUpClick: function(){
		main.router.navigate('', {trigger: true});
		return false;
	}
});