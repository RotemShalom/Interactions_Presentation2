(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bganim = function() {
	this.initialize(img.bganim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.מוזיקה2תווים = function() {
	this.initialize(img.מוזיקה2תווים);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,698);


(lib.מוזיקה2תוויםpngcopy = function() {
	this.initialize(img.מוזיקה2תוויםpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,698);


(lib.מוזיקה5תו = function() {
	this.initialize(img.מוזיקה5תו);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,585);


(lib.מוזיקה5תוpngcopy = function() {
	this.initialize(img.מוזיקה5תוpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,585);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("ABvCoQhMgphJgDQgJAAhwAIQgLABgIgIQgIgHgBgMQAAgMAGgJQAHgJAKgBQB2gPBUAQQA1ALAtAaQAMAGACAPQACAOgJALIgDADQgGAHgIABIgEABQgFAAgGgDgACHBBQg+gnhlgGQhCgEhJAJQgMACgJgJQgJgJgBgMQAAgNAHgKQAHgKAMgBQB/gOBeARQBFAMAuAaQAMAHADAQQACAQgKAMIgDAEQgHAIgJABIgEABQgHAAgGgEgACqgnQhLgshzgGQhNgEhTAMQgPADgMgMQgLgMAAgRIAAgCQAAgPAJgLQAJgLANgCQCbgVBvAZQBCAOA4AiQALAHAEANQAFANgEANQgFASgOAHQgGADgHAAQgHAAgIgFg");
	this.shape.setTransform(0.9111,0.8642,0.6049,0.5605,29.9991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiOCFQg7g4AAhNQAAhMA7g3QA7g3BTAAQBTAAA8A3QA7A3AABMQAABNg7A4Qg8A2hTAAQhTAAg7g2g");
	this.shape_1.setTransform(0.0356,0.025,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.1,39.7,38.3);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("ABvCoQhMgphJgDQgJAAhwAIQgLABgIgIQgIgHgBgMQAAgMAGgJQAHgJAKgBQB2gPBUAQQA1ALAtAaQAMAGACAPQACAOgJALIgDADQgGAHgIABIgEABQgFAAgGgDgACHBBQg+gnhlgGQhCgEhJAJQgMACgJgJQgJgJgBgMQAAgNAHgKQAHgKAMgBQB/gOBeARQBFAMAuAaQAMAHADAQQACAQgKAMIgDAEQgHAIgJABIgEABQgHAAgGgEgACqgnQhLgshzgGQhNgEhTAMQgPADgMgMQgLgMAAgRIAAgCQAAgPAJgLQAJgLANgCQCbgVBvAZQBCAOA4AiQALAHAEANQAFANgEANQgFASgOAHQgGADgHAAQgHAAgIgFg");
	this.shape.setTransform(0.9111,0.8142,0.6049,0.5605,29.9991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiOCFQg7g4AAhNQAAhMA7g3QA7g3BTAAQBTAAA8A3QA7A3AABMQAABNg7A4Qg8A2hTAAQhTAAg7g2g");
	this.shape_1.setTransform(0.0356,-0.025,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.1,39.7,38.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("ABvCoQhMgphJgDQgJAAhwAIQgLABgIgIQgIgHgBgMQAAgMAGgJQAHgJAKgBQB2gPBUAQQA1ALAtAaQAMAGACAPQACAOgJALIgDADQgGAHgIABIgEABQgFAAgGgDgACHBBQg+gnhlgGQhCgEhJAJQgMACgJgJQgJgJgBgMQAAgNAHgKQAHgKAMgBQB/gOBeARQBFAMAuAaQAMAHADAQQACAQgKAMIgDAEQgHAIgJABIgEABQgHAAgGgEgACqgnQhLgshzgGQhNgEhTAMQgPADgMgMQgLgMAAgRIAAgCQAAgPAJgLQAJgLANgCQCbgVBvAZQBCAOA4AiQALAHAEANQAFANgEANQgFASgOAHQgGADgHAAQgHAAgIgFg");
	this.shape.setTransform(0.9111,0.8642,0.6049,0.5605,29.9991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiOCFQg7g4AAhNQAAhMA7g3QA7g3BTAAQBTAAA8A3QA7A3AABMQAABNg7A4Qg8A2hTAAQhTAAg7g2g");
	this.shape_1.setTransform(0.0356,0.025,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.1,39.7,38.3);


(lib.Title1copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzB7QgbgQgOgcQgQgcAAglIAAgPQAAgTAIgUQAHgWALgMIADgCIAAgBIgjAHIgMgxQAagJAkgEQAigFAeAAQA9AAAiAhQAgAgAAA9IAAAZQAAAlgOAcQgPAcgbAQQgaAPgkAAQghAAgbgPgAgag9QgNATAAAlIAAAUQAAATAGAQQAGAPALAHQALAJAOAAQAPAAALgJQALgHAHgPQAFgQABgTIAAgZQAAgigNgSQgNgTgYAAQgXAAgMAUg");
	this.shape.setTransform(725.9,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0CEIhhiNQgIAJAAAPIAAB1IhCAAIAAhXQAAglALgVQALgWAZgMIg6hUIBNAAIA/BcIAshcIBNAAIhPCYIBNBvg");
	this.shape_1.setTransform(697.125,25.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWCEIAAjRIgXAAIAAg2IBbAAIAAEHg");
	this.shape_2.setTransform(673.475,25.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglCEIgbgEIAAg0QAPACARAAQAPAAAIgJQAGgHABgSIAAh7IgvAAIAAg2IByAAIAAC2QAAAbgJATQgJATgTAKQgRAKgZAAQgMAAgLgCg");
	this.shape_3.setTransform(657.05,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACEIAAjRIhxAAIAAg2IDjAAIAAA2IgvAAIAADRg");
	this.shape_4.setTransform(636.35,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Title1copy2, new cjs.Rectangle(81.9,-10,661.1,70.1), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D44209").ss(5,1,1).p("AAAksIgSgTAATk/IgTATAJtFAIptpsIpsJs");
	this.shape.setTransform(84.675,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#D44209","#F6D6C9"],[0,1],-724.9,-32,724.9,-32).ss(5,1,1).p("EhtTAAAIjiAAEBw2AAAMjKuAAA");
	this.shape_1.setTransform(722.15,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#036F79","#05919E"],[0,1],0.1,53.3,0,-53.3).s().p("AoUAAIIUoUIIVIUIoUIVg");
	this.shape_2.setTransform(84.65,64.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#024A46","#04707A"],[0,1],-722.1,0,722.1,0).s().p("EhZ5AFAIptpsIATgTIgTATIgTgTIAmAAMDUJAAAIAAJ/gEhw1AFAIAAp/IM8AAIATATIptJsgEhj5gE/g");
	this.shape_3.setTransform(722.15,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2.5,-2.5,1449.3,120.8), null);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,0,1).p("AEziIQAcA/AABJQAACLhiBiQhiBiiLAAQiKAAhihiQhihiAAiLQAAiKBihiQBdhdCDgF");
	this.shape.setTransform(77.5,77.5125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+ibIEfB/IlBC4g");
	this.shape_1.setTransform(109.9,60.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#048D9A").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_2.setTransform(77.5,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(4,141,154,0.8)").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_3.setTransform(77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQkxIGhExImhEzg");
	this.shape.setTransform(85.025,77.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#048D9A").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_1.setTransform(77.5,77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(4,141,154,0.8)").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_2.setTransform(77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17,0,1).p("Ai8k0IAAJpAC9k0IAAJp");
	this.shape.setTransform(77.525,77.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(17,0,1).p("AC9k0IAAJpAi8k0IAAJp");
	this.shape_1.setTransform(77.525,77.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#048D9A").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_2.setTransform(77.5,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(4,141,154,0.8)").s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape_3.setTransform(77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


(lib.Title1_Animcopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8BRIAEgbQAQAEAPAAQARABALgIQAMgHAHgNQAGgOABgRQgBgZgOgQQgOgQgZAAQgQAAgPAEIgEgbQATgEAOAAQApgBAXAZQAXAYAAAkQAAAZgKASQgJATgUAMQgTALgdAAQgPAAgSgEg");
	this.shape.setTransform(884.45,69.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBTIAAilIAdAAIAAClg");
	this.shape_1.setTransform(887.925,29.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhXBPIAFgWQAIADAJAAQALAAAEgFQAEgFAAgNIAAheQgNAAgUADIgCgZQAjgFAlABQAkAAAUAFQAUAHALARQAKAQAAAgIAABZIgeAAIAAhSQAAgXgDgLQgEgLgMgIQgNgGgbgBIgPABIAABkQAAAPgDAIQgDAJgJAFQgJAGgSgBQgPABgOgGg");
	this.shape_2.setTransform(872.925,29.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlBUIAAhSQAAgVgEgMQgGgMgOgHQgNgHgYAAQgRAAgWADIgDgZQAYgEAUAAQAyAAATAUQAUATAAAnIAABZg");
	this.shape_3.setTransform(854.5,29.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhXBPIAFgWQAIADAJAAQALAAAEgFQAEgFAAgNIAAheQgNAAgUADIgCgZQAjgFAlABQAkAAAUAFQAUAHALARQAKAQAAAgIAABZIgeAAIAAhSQAAgXgDgLQgEgLgMgIQgNgGgbgBIgPABIAABkQAAAPgDAIQgDAJgJAFQgJAGgSgBQgPABgOgGg");
	this.shape_4.setTransform(836.075,29.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(12));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhDAAFtIBRrsMB3IgA3INpNtg");
	mask.setTransform(374.65,19.725);

	// Layer 1
	this.instance = new lib.Title1copy2();
	this.instance.setTransform(709.5,22.2,1,1,0,0,0,371.5,22.2);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:681.8,regY:25.9,x:962.1,y:25.3,alpha:0.1597},0).wait(1).to({x:909.45,y:24.7,alpha:0.3056},0).wait(1).to({x:861.85,y:24.15,alpha:0.4375},0).wait(1).to({x:819.2,y:23.7,alpha:0.5556},0).wait(1).to({x:781.6,y:23.3,alpha:0.6597},0).wait(1).to({x:749.05,y:22.9,alpha:0.75},0).wait(1).to({x:721.45,y:22.6,alpha:0.8264},0).wait(1).to({x:698.9,y:22.35,alpha:0.8889},0).wait(1).to({x:681.4,y:22.15,alpha:0.9375},0).wait(1).to({x:668.85,y:22.05,alpha:0.9722},0).wait(1).to({x:661.35,y:21.95,alpha:0.9931},0).wait(1).to({regX:371.5,regY:22.2,x:348.5,y:18.2,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.9,-14,835,100.9);


(lib.SpotifyIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_45 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_90 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1).call(this.frame_45).wait(44).call(this.frame_89).wait(1).call(this.frame_90).wait(44).call(this.frame_134).wait(1));

	// nowplaying
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAtIgJgBIgHgBIgIgCIAAgHIgBgKIANAEIAKABIAFgBIAEgCIADgDIABgDIABgEIABgHIgEADIgEACIgFADIgGAAQgHAAgGgEQgGgDgDgGQgDgGAAgGQAAgJADgHQADgHAGgEQAGgFAHgCQAHgCAIAAIALABIASACIgBAUIgBAVIgBACIAAAUIgBAHIgCAGIgEAEIgFADIgIACIgJABIgGAAgAgDgZQgEACgCAFQgCAEAAAEIABAFQABADACACIAGABQADAAADgCQAEgDABgGQABgFAAgLIgGAAQgFAAgDABg");
	this.shape.setTransform(70.775,2.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXAfIgNAAIABgQIABgPQAAgGgDgCQgCgDgEAAQgDAAgDACQgDADgBAEIgDANIgBAUIgLAAIgNAAQACgOABgQIABgdIAMAAIAMAAIgBAIIADgEIAEgCIADgCIAFgBIAGgBIAIABIAHADIAFAEIACAFIABAGIgBAKIgBAUIAAAMIgLAAg");
	this.shape_1.setTransform(62.775,1.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAApIgNAAIABgMIABgMIABgQIAAgTIALAAIAMAAIgBASIgBASIAAAXIgLAAgAACgaIgLAAIAAgLIAAgDIALAAIAMAAIgBADIAAAIIAAADIgLAAg");
	this.shape_2.setTransform(56.875,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAsIgFAAIgFgBIgCgSIAGADIAFAAIAEAAIADgCIADgCIABgDIACgEIgLggIgKgcIANAAIALAAIAEAQIAEARIABAJIABgFIABgEIACgGIAEgLIAGgQIALAAIAMAAIgLAZIgVAvIgDAGIgDAEIgEACIgHACIgHABIgFAAg");
	this.shape_3.setTransform(51.425,2.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAdQgFgCgDgEQgCgEAAgFIAAgFIAEgGIAEgDIAIgEIAMgDIAFAAIADgBIACgCIABgBIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgDABQgJgBgPAGIABgHIABgHQARgFALAAQAHAAAGACQAGACADADQADADAAAHIgBAOIgBAeIgMAAIgLAAIABgbIgDACIgEACIgEABIgDACIgCABIgBADQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQABABAEAAIACAAIADgBIgDAMIgJABQgIAAgEgCg");
	this.shape_4.setTransform(44.125,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAoIgNAAIABgMIACgrIABgYIALAAIAMAAIgBASIgDArIAAASIgKAAg");
	this.shape_5.setTransform(38.85,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAsIgMAAIACgXIACgiIAAgbIATgDIAMgBQAIAAAIADQAHABAEAEQAFAFACAGQACAGAAAHQAAAGgCAGQgBAFgFAEQgDAFgFACQgFACgFAAIgGAAIgFgCIgFgCIgEgDIgBAQIAAARIgMAAgAgIgaIgBAFIAAAEIAAAFQAAAFABADQABADAEABQACACACAAQADAAADgCIAEgEQACgEAAgFQAAgGgEgEQgDgDgGgBIgIABg");
	this.shape_6.setTransform(33,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_7.setTransform(76.525,3.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_8.setTransform(76.525,3.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_9.setTransform(76.525,3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},91).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_7,p:{x:76.525}}]},6).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_8,p:{x:76.525}},{t:this.shape_7,p:{x:80.075}}]},14).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_9},{t:this.shape_8,p:{x:80.075}},{t:this.shape_7,p:{x:83.625}}]},11).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_9},{t:this.shape_8,p:{x:80.075}},{t:this.shape_7,p:{x:83.625}}]},12).wait(1));

	// Layer_5
	this.instance = new lib.Tween1("synched",0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(10,-10.95);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},90).to({state:[{t:this.instance_1}]},21).to({state:[{t:this.instance_2}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({_off:true,x:10,y:-10.95},21).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},21).to({_off:true,x:0,y:0},23).wait(1));

	// nowplaying
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAtIgJgBIgHgBIgIgCIAAgHIgBgKIANAEIAKABIAFgBIAEgCIADgDIABgDIABgEIABgHIgEADIgEACIgFADIgGAAQgHAAgGgEQgGgDgDgGQgDgGAAgGQAAgJADgHQADgHAGgEQAGgFAHgCQAHgCAIAAIALABIASACIgBAUIgBAVIgBACIAAAUIgBAHIgCAGIgEAEIgFADIgIACIgJABIgGAAgAgDgZQgEACgCAFQgCAEAAAEIABAFQABADACACIAGABQADAAADgCQAEgDABgGQABgFAAgLIgGAAQgFAAgDABg");
	this.shape_10.setTransform(70.775,2.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXAfIgNAAIABgQIABgPQAAgGgDgCQgCgDgEAAQgDAAgDACQgDADgBAEIgDANIgBAUIgLAAIgNAAQACgOABgQIABgdIAMAAIAMAAIgBAIIADgEIAEgCIADgCIAFgBIAGgBIAIABIAHADIAFAEIACAFIABAGIgBAKIgBAUIAAAMIgLAAg");
	this.shape_11.setTransform(62.775,1.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAApIgNAAIABgMIABgMIABgQIAAgTIALAAIAMAAIgBASIgBASIAAAXIgLAAgAACgaIgLAAIAAgLIAAgDIALAAIAMAAIgBADIAAAIIAAADIgLAAg");
	this.shape_12.setTransform(56.875,0.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAsIgFAAIgFgBIgCgSIAGADIAFAAIAEAAIADgCIADgCIABgDIACgEIgLggIgKgcIANAAIALAAIAEAQIAEARIABAJIABgFIABgEIACgGIAEgLIAGgQIALAAIAMAAIgLAZIgVAvIgDAGIgDAEIgEACIgHACIgHABIgFAAg");
	this.shape_13.setTransform(51.425,2.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdQgFgCgDgEQgCgEAAgFIAAgFIAEgGIAEgDIAIgEIAMgDIAFAAIADgBIACgCIABgBIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgDABQgJgBgPAGIABgHIABgHQARgFALAAQAHAAAGACQAGACADADQADADAAAHIgBAOIgBAeIgMAAIgLAAIABgbIgDACIgEACIgEABIgDACIgCABIgBADQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQABABAEAAIACAAIADgBIgDAMIgJABQgIAAgEgCg");
	this.shape_14.setTransform(44.125,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAoIgNAAIABgMIACgrIABgYIALAAIAMAAIgBASIgDArIAAASIgKAAg");
	this.shape_15.setTransform(38.85,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAsIgMAAIACgXIACgiIAAgbIATgDIAMgBQAIAAAIADQAHABAEAEQAFAFACAGQACAGAAAHQAAAGgCAGQgBAFgFAEQgDAFgFACQgFACgFAAIgGAAIgFgCIgFgCIgEgDIgBAQIAAARIgMAAgAgIgaIgBAFIAAAEIAAAFQAAAFABADQABADAEABQACACACAAQADAAADgCIAEgEQACgEAAgFQAAgGgEgEQgDgDgGgBIgIABg");
	this.shape_16.setTransform(33,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_17.setTransform(76.525,3.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_18.setTransform(76.525,3.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_19.setTransform(76.525,3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},46).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_17,p:{x:76.525}}]},6).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_18,p:{x:76.525}},{t:this.shape_17,p:{x:80.075}}]},14).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_19},{t:this.shape_18,p:{x:80.075}},{t:this.shape_17,p:{x:83.625}}]},11).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_19},{t:this.shape_18,p:{x:80.075}},{t:this.shape_17,p:{x:83.625}}]},12).to({state:[]},1).wait(45));

	// Layer_3
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(10,-10.95);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween3("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},45).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_5}]},23).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({_off:true,x:10,y:-10.95},21).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},21).to({_off:true,x:0,y:0},23).wait(46));

	// nowplaying
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDAtIgJgBIgHgBIgIgCIAAgHIgBgKIANAEIAKABIAFgBIAEgCIADgDIABgDIABgEIABgHIgEADIgEACIgFADIgGAAQgHAAgGgEQgGgDgDgGQgDgGAAgGQAAgJADgHQADgHAGgEQAGgFAHgCQAHgCAIAAIALABIASACIgBAUIgBAVIgBACIAAAUIgBAHIgCAGIgEAEIgFADIgIACIgJABIgGAAgAgDgZQgEACgCAFQgCAEAAAEIABAFQABADACACIAGABQADAAADgCQAEgDABgGQABgFAAgLIgGAAQgFAAgDABg");
	this.shape_20.setTransform(70.775,2.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAfIgNAAIABgQIABgPQAAgGgDgCQgCgDgEAAQgDAAgDACQgDADgBAEIgDANIgBAUIgLAAIgNAAQACgOABgQIABgdIAMAAIAMAAIgBAIIADgEIAEgCIADgCIAFgBIAGgBIAIABIAHADIAFAEIACAFIABAGIgBAKIgBAUIAAAMIgLAAg");
	this.shape_21.setTransform(62.775,1.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAApIgNAAIABgMIABgMIABgQIAAgTIALAAIAMAAIgBASIgBASIAAAXIgLAAgAACgaIgLAAIAAgLIAAgDIALAAIAMAAIgBADIAAAIIAAADIgLAAg");
	this.shape_22.setTransform(56.875,0.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAsIgFAAIgFgBIgCgSIAGADIAFAAIAEAAIADgCIADgCIABgDIACgEIgLggIgKgcIANAAIALAAIAEAQIAEARIABAJIABgFIABgEIACgGIAEgLIAGgQIALAAIAMAAIgLAZIgVAvIgDAGIgDAEIgEACIgHACIgHABIgFAAg");
	this.shape_23.setTransform(51.425,2.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAdQgFgCgDgEQgCgEAAgFIAAgFIAEgGIAEgDIAIgEIAMgDIAFAAIADgBIACgCIABgBIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgDABQgJgBgPAGIABgHIABgHQARgFALAAQAHAAAGACQAGACADADQADADAAAHIgBAOIgBAeIgMAAIgLAAIABgbIgDACIgEACIgEABIgDACIgCABIgBADQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQABABAEAAIACAAIADgBIgDAMIgJABQgIAAgEgCg");
	this.shape_24.setTransform(44.125,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAoIgNAAIABgMIACgrIABgYIALAAIAMAAIgBASIgDArIAAASIgKAAg");
	this.shape_25.setTransform(38.85,0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAsIgMAAIACgXIACgiIAAgbIATgDIAMgBQAIAAAIADQAHABAEAEQAFAFACAGQACAGAAAHQAAAGgCAGQgBAFgFAEQgDAFgFACQgFACgFAAIgGAAIgFgCIgFgCIgEgDIgBAQIAAARIgMAAgAgIgaIgBAFIAAAEIAAAFQAAAFABADQABADAEABQACACACAAQADAAADgCIAEgEQACgEAAgFQAAgGgEgEQgDgDgGgBIgIABg");
	this.shape_26.setTransform(33,2.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_27.setTransform(76.525,3.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_28.setTransform(76.525,3.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAALIgLAAIABgVIALAAIALAAIgBAVg");
	this.shape_29.setTransform(76.525,3.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_27,p:{x:76.525}}]},6).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_28,p:{x:76.525}},{t:this.shape_27,p:{x:80.075}}]},14).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_29},{t:this.shape_28,p:{x:80.075}},{t:this.shape_27,p:{x:83.625}}]},11).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_29},{t:this.shape_28,p:{x:80.075}},{t:this.shape_27,p:{x:83.625}}]},12).to({state:[]},1).wait(90));

	// Layer_1
	this.instance_6 = new lib.Tween1("synched",0);

	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(10,-10.95);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween3("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},21).to({state:[{t:this.instance_8}]},23).to({state:[]},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:10,y:-10.95},21).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},21).to({_off:true,x:0,y:0},23).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-30.1,107.5,49.3);


(lib.playpause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.play();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.play(), 3);

	this.instance_1 = new lib.pause();
	this.instance_1.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.pause(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,155);


// stage content:
(lib._250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.restart_music = new lib.replay();
	this.restart_music.name = "restart_music";
	this.restart_music.setTransform(635.65,466.6,1,1,0,0,0,77.5,77.5);
	new cjs.ButtonHelper(this.restart_music, 0, 1, 2, false, new lib.replay(), 3);

	this.startMusic = new lib.playpause();
	this.startMusic.name = "startMusic";
	this.startMusic.setTransform(837,466.6,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startMusic},{t:this.restart_music}]}).wait(1));

	// Layer_5
	this.instance = new lib.מוזיקה2תוויםpngcopy();
	this.instance.setTransform(380,763,0.1404,0.1404);

	this.instance_1 = new lib.מוזיקה5תו();
	this.instance_1.setTransform(1364,822,0.0674,0.0674);

	this.instance_2 = new lib.מוזיקה5תוpngcopy();
	this.instance_2.setTransform(528,823,0.1006,0.1006);

	this.instance_3 = new lib.מוזיקה5תו();
	this.instance_3.setTransform(655,802,0.0674,0.0674);

	this.instance_4 = new lib.מוזיקה2תוויםpngcopy();
	this.instance_4.setTransform(760,802,0.1404,0.1404);

	this.instance_5 = new lib.מוזיקה5תוpngcopy();
	this.instance_5.setTransform(928,783,0.1006,0.1006);

	this.instance_6 = new lib.מוזיקה5תו();
	this.instance_6.setTransform(1033,842,0.0674,0.0674);

	this.instance_7 = new lib.מוזיקה2תווים();
	this.instance_7.setTransform(1163,756,0.1504,0.1504);

	this.Icon_mc = new lib.SpotifyIcon();
	this.Icon_mc.name = "Icon_mc";
	this.Icon_mc.setTransform(91.95,818.35,3.2853,3.2853,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Icon_mc},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.Show = new lib.Title1_Animcopy2();
	this.Show.name = "Show";
	this.Show.setTransform(647.85,9);

	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(720.5,63.55,1,1,0,0,0,722.1,63.5);

	this.instance_9 = new lib.bganim();
	this.instance_9.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.Show}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(715.9,434.9,1013.0000000000001,465.1);
// library properties:
lib.properties = {
	id: '95A122535FC9764FA43D77F90E12D3C5',
	width: 1440,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bganim.jpg?1631427602626", id:"bganim"},
		{src:"images/מוזיקה2תווים.png?1631427602626", id:"מוזיקה2תווים"},
		{src:"images/מוזיקה2תוויםpngcopy.png?1631427602626", id:"מוזיקה2תוויםpngcopy"},
		{src:"images/מוזיקה5תו.png?1631427602626", id:"מוזיקה5תו"},
		{src:"images/מוזיקה5תוpngcopy.png?1631427602626", id:"מוזיקה5תוpngcopy"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['95A122535FC9764FA43D77F90E12D3C5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;