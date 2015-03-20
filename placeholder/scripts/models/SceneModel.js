// _________________________________________________________________________ SceneModel
main.models.SceneModel = Backbone.Model.extend({
     // set vars
     defaults: {
         "id": -1,
         "name": "",
         "topOffset": -1
      },
     // ----------------- initialize
     initialize: function(){
         console.log("SceneModel ---- initialize");
     }
});

// _________________________________________________________________________ SceneCollection
main.models.SceneCollection = Backbone.Collection.extend({
   model: main.models.SceneModel,
   scenes: [
	   {id:0, name:"scene1", topOffset: 0},
	   {id:1, name:"scene2", topOffset: 1000},
	   {id:2, name:"scene3", topOffset: 2000},
	   {id:3, name:"scene4", topOffset: 3000},
	   {id:4, name:"scene5", topOffset: 4000},
	   {id:5, name:"scene6", topOffset: 5000}
   ],
   // ----------------- initialize
   initialize: function(){
       console.log("SceneCollection --- initialize");
       //create a model for each scene
       this.reset(scenes);
   }
});
