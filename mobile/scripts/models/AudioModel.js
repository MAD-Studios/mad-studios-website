// _________________________________________________________________________ AudioModel
main.models.AudioModel = Backbone.Model.extend({
	ACTIVE_CLASS: "active",
     // set vars
     defaults: {
         "id": -1,
         "scene": "",
         "name": "",
         "src": ""
      },
     // ----------------- initialize
     initialize: function(){
         console.log("AudioModel ---- initialize");
     }
});

// _________________________________________________________________________ AudioCollection
main.models.AudioCollection = Backbone.Collection.extend({
   model: main.models.AudioModel,
   sounds: [
   	   //--------- cene-swipe-instruction
	   { scene:"scene-swipe-instruction", name:"royal-trumpet", src:"sounds/castle-horn.mp3" },
	   //--------- scene-castle
	   { scene:"scene-castle", name:"lighting-sizzle", src:"sounds/xray-lighting-sizzle1.mp3" },
	   //--------- scene-xray
	   { scene:"scene-xray", name:"victorian-man-scream", src:"sounds/xray-lab-m.mp3" },
	   //--------- scene-lab
	   { scene:"scene-lab", name:"lab-fart", src:"sounds/lab-creation-m.mp3" },
	   //--------- scene-creation
	   { scene:"scene-creation", name:"gorilla-swoop", src:"sounds/gorilla-gerbil-m.mp3" },
	   //--------- scene-gerbil
	   { scene:"scene-gerbil", name:"gerbil-squeal", src:"sounds/behold-answer-m.mp3" },
	   //--------- scene-boy
   ],
   // ----------------- initialize
   initialize: function(){
       console.log("AudioCollection --- initialize");
       //create a model for each scene
       this.reset(this.sounds);
   }
});

// _________________________________________________________________________ BasicAudioCollection
main.models.BasicAudioCollection = Backbone.Collection.extend({
   model: main.models.AudioModel,
   // ----------------- initialize
   initialize: function(){
       console.log("AudioCollection --- initialize");
   }
});

