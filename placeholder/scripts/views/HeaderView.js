// _________________________________________________________________________ HeaderView
main.views.HeaderView = Backbone.View.extend({
	LIGHT_COLOR: "#fceec9",
	DARK_COLOR: "#ffc627",
    // ----------------- initialize
    initialize: function() {
        console.log("HeaderView ---- initialize");
        this.render();
    },
    // ----------------- render
    render: function(eventName) {
        console.log("HeaderView ---- render");
        return this;
	},    
	// ----------------- posize
    posize: function() {
	},
	// ----------------- lightenBackground
    lightenBackground: function() {
	    //var el = $(this.el);
	    /*var color = new RGBColor(obj.css(prop));
           if (color.ok) { 
               css[prop] = 'rgb(255,198,39,0.2)';
               TweenLite.to(el, 2, {css:css});
            }*/
    	//TweenLite.to($(this.el), 0.35, {backgroundColor:this.LIGHT_COLOR, overwrite: 2});
	},
	// ----------------- darkenBackground
    darkenBackground: function() {
    	//TweenLite.to($(this.el), 0.35, {backgroundColor:this.DARK_COLOR, overwrite: 2});
	}	
});