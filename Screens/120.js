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
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AhXCEIAAg+QAMACAJAAQAxgBARgrIAAhrIg7AAIAAg1IB9AAIAACEQAAAWAFAVIARBXIhAAAIgPhCIgBAAQgEATgJAQQgMAQgQAJQgRAJgUAAIgRgBg");
	this.shape.setTransform(730.1,26.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZCEIAAitQgBgSgJgJQgLgJgRAAIhPAAIAAg2IBUAAQAfAAAXAMQAXAKAMAVQAMAVAAAdIAACqg");
	this.shape_1.setTransform(708.8,25.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_2.setTransform(689.875,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZCEIAAitQgBgSgJgJQgLgJgRAAIhPAAIAAg2IBUAAQAfAAAXAMQAXAKAMAVQAMAVAAAdIAACqg");
	this.shape_3.setTransform(671,25.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApCEIAAiqQAAgUgKgJQgKgKgVAAIhsAAIAAg2IBwAAQAiAAAYAMQAYALAMAWQAMAVAAAfIAACmgAhtCEIAAhbQAAgmAQgRIA2AAQgEATAAAdIAABig");
	this.shape_4.setTransform(646.925,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Title1copy2, new cjs.Rectangle(630.6,-10,112.39999999999998,70.1), null);


(lib.Symbol29copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(6,1,1).p("AAAAAIiJh9ACJB+IiJh+ICKh9AiIB+ICIh+");
	this.shape.setTransform(16,12.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29copy, new cjs.Rectangle(-0.7,-3,33.5,31.1), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#049E9A").ss(6,1,1).p("AiUgOIAXCMIESj7");
	this.shape.setTransform(14.875,12.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-3,-3,35.8,31.1), null);


(lib.Symbol8copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(3,122,133,0)").s().p("AmeDmIAAnLIM9AAIAAHLg");
	this.shape.setTransform(1382.35,288.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#037B86").ss(2,1,1).p("AAbhKIAsAmIhPAeIgRBRIgsgmIARhRg");
	this.shape_1.setTransform(-43.65,17.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#037A85").s().p("AhFAlIARhRIBOgeIAsAmIhPAeIgQBRg");
	this.shape_2.setTransform(-43.65,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#037A85").s().p("AgbBlIA1iBIhXAAIAAhIIAiAAIAAAtIBZAAIAAAWIg2CGg");
	this.shape_3.setTransform(60.25,26.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#037A85").s().p("AgeBJQgPgJgJgRQgIgQgBgWIAAgMQAAgIADgJQACgKAFgHQAEgIAFgEIACgCIAAAAIgMACIgMADIgHgYQAQgFAUgDQAVgDAQAAQAYAAAQAJQARAJAIAQQAJARAAAXIAAAQQAAAWgJAQQgIARgQAJQgQAJgUAAQgTAAgQgJgAgUgoQgJAMAAAXIAAAOQAAANAFALQAEAKAHAFQAJAGAJAAQALAAAHgGQAJgFAEgKQAEgLAAgNIAAgPQAAgWgJgNQgKgMgRAAQgOAAgKANg");
	this.shape_4.setTransform(44.1,28.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#037A85").s().p("AgwBPIAAgfIAKABQAQAAALgJQALgJAEgPIAAhEIgjAAIAAgaIBDAAIAABPQAAAMADANIAKA0IgeAAIgKgqIgBAAQgBAMgHAKQgGAKgLAFQgLAGgMAAIgIAAg");
	this.shape_5.setTransform(29.7,28.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#037A85").s().p("AgDAsIAAg9IgaAAIAAgaIA7AAIAABXg");
	this.shape_6.setTransform(19.55,25.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#037A85").s().p("AAVBOIAAhpQAAgLgHgHQgHgGgLAAIgxAAIAAgaIAzAAQARAAANAGQANAGAGAMQAHAMAAAQIAABng");
	this.shape_7.setTransform(8.575,28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#037A85").s().p("AAdBOIAAhjQAAgQgHgGQgIgIgPAAIg9AAIAAgaIA/AAQAdAAARAPQAQAPAAAcIAABhgAg+BOIAAg1QAAgNACgHQACgHAFgFIAaAAQgDAKAAATIAAA4g");
	this.shape_8.setTransform(-5.65,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#037B86").ss(3,1,1).p("AAfBHIBuAAAAdBFIipiL");
	this.shape_9.setTransform(-32.875,21.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,6.4,1475.6000000000001,305.20000000000005);


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


(lib.pit_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#086372").s().p("AgeBwIA7iQIhhAAIAAhQIAlAAIAAA0IBkAAIAAAXIg8CVg");
	this.shape.setTransform(103.7,17.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#086372").s().p("AgjBWQgRgDgPgFIAHgbQAOAEAOACQAOACALAAQAVAAAMgLQAMgKgBgVIAAhMIg7AAQgDAIgCALQgDAKAAAKIAAALQAGACANAAIAAAaIgNABQgNAAgKgCQgKgDgJgFIgBgSQAAgPAEgNQADgOAGgJIgTAAIAAgdICTAAIAABjQABAagKASQgLARgSAIQgSAJgXAAQgOAAgQgDg");
	this.shape_1.setTransform(85.8,20.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#086372").s().p("AhTBXIAAgeIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgMADgMQADgMAGgIIgeAAIAAgdIBUAAQAjAAARAQQARARAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAAKIAAA2QAAAZgMANQgNAOgYAAIgTgBg");
	this.shape_2.setTransform(65.825,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#086372").s().p("AAXBXIAAh1QAAgNgHgHQgIgHgMAAIg3AAIAAgdIA5AAQATAAAOAHQAOAGAIAOQAHANAAASIAABzg");
	this.shape_3.setTransform(49.125,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#086372").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_4.setTransform(37.125,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#086372").s().p("AgIB2IAAjOIgSAAIAAgcIA1AAIAADqg");
	this.shape_5.setTransform(27.825,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AqkjHIVJAAIAAGPI1JAAg");
	this.shape_6.setTransform(67.675,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#73BEBA").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_7.setTransform(67.675,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_8.setTransform(67.675,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#086372").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_9.setTransform(67.675,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.5,137.4,48.1);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAhBXIAAhuQAAgRgJgJQgIgIgRAAIhDAAIAAgdIBFAAQAhAAASAQQASARAAAgIAABsgAhFBXIAAg8QAAgOACgIQADgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape.setTransform(223.75,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhTBXIAAgdIAKAAQALgBAGgFQAFgHAAgMIAAgvQAAgMADgMQADgMAGgIIgeAAIAAgdIBUAAQAjAAARAQQARARAAAhIAABrIglAAIAAhuQAAgSgIgHQgHgJgRAAIgWAAIgGATQgCALAAAKIAAA1QAAAagMANQgNAOgYAAIgTgBg");
	this.shape_1.setTransform(204.125,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BUQgZgGgWgKIAAicIAkAAIAACHQAOAHAPACQAPAEANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOATQgOARgYAKQgYAIgdABQgXgBgYgFgAgaAgQAEgFACgKQACgLAAgMIAAhSIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_2.setTransform(183.025,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_3.setTransform(165.275,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhIBXIAAgeIBYAAIAAhQQAAgRgIgJQgIgIgSAAIgtAAIAAgdIAvAAQAhAAASAQQASARAAAgIAABNIAUADIAAAcg");
	this.shape_4.setTransform(153.3,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhBXIAAhuQAAgRgIgJQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAgIAABsgAhFBXIAAg8QAAgOADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_5.setTransform(136.05,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAhBXIAAhuQAAgRgIgJQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAgIAABsgAhFBXIAAg8QAAgOADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_6.setTransform(110.4,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXBXIgQgCIAAgdQAKACALAAQALAAAGgGQAEgGAAgNIAAhcIgfAAIAAgcIBEAAIAAB7QAAAZgNAOQgNAOgXAAIgOgCg");
	this.shape_7.setTransform(94.775,23.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag/BRIAGgbQAXAFARAAQAWAAAKgKQAMgLAAgUIAAhMIhTAAIAAgdIB4AAIAABiQAAAngVATQgUATgkAAQgWAAgcgHg");
	this.shape_8.setTransform(80.9,23.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_9.setTransform(68.175,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXBXIgQgCIAAgdQAKACALAAQALAAAGgGQAEgGAAgNIAAhcIgfAAIAAgcIBEAAIAAB7QAAAZgNAOQgNAOgXAAIgOgCg");
	this.shape_10.setTransform(57.625,23.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAhBXIAAhuQAAgRgIgJQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAgIAABsgAhFBXIAAg8QAAgOACgIQADgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_11.setTransform(43.6,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Aw3D6IAAnzMAhvAAAIAAHzg");
	this.shape_12.setTransform(133.7,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(25.7,-2.7,216,50), null);


(lib.Symbol13copy31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdBVQgNgGgIgLQgHgMgBgQQABgOAHgMQAIgLAOgFQgMgGgHgKQgGgKAAgNQgBgQAIgLQAGgLANgGQAMgFAPAAQAQAAAMAFQANAGAHALQAGALAAAQQAAANgGAKQgHAKgLAGQAOAFAHAMQAIALgBAOQABAQgIAMQgHALgOAGQgNAGgRAAQgQAAgNgGgAgOANQgGAEgEAGQgDAHAAAJQAAANAIAHQAHAIAMAAQANAAAHgIQAIgHAAgNQAAgJgDgHQgEgGgGgEQgGgDgJAAQgHAAgHADgAgRg7QgGAHAAAMQAAAMAGAHQAHAHAKAAQAMAAAGgHQAHgHAAgMQAAgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape.setTransform(332.95,113.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgoBZIBGiZIhbAAIAAgYIB7AAIAAARIhGCgg");
	this.shape.setTransform(332.875,113.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(1,83,86,0.898)").s().p("AqYH+QhkAAAAhkIAAkCIuEiyIOEiXIAAjoQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape.setTransform(288,144.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121.5,93.3,333,101.89999999999999);


(lib.Symbol13copy14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeBRQgOgJgHgRQgHgPAAgUIAAgLQAAgcAJgVQAKgXATgNQAUgNAdgBIAEAAIAAAaIgCAAQgSAAgNAGQgMAHgHALQgGALgCAPQAHgIAJgDQAJgEAKAAQARAAALAJQAMAHAFANQAGAOAAAPQAAASgHAOQgGAOgOAHQgNAJgSgBQgSAAgNgJgAgQAAQgIAGgEAIIAAAKQAAANAEAJQAFAKAGAFQAHAFAHAAQAIAAAHgFQAGgEADgIQAEgIAAgKQAAgLgDgHQgEgJgGgEQgGgEgKAAQgIgBgIAFg");
	this.shape.setTransform(333.15,143.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgbBUQgNgGgIgMQgIgLgBgQIAdAAQACANAHAGQAIAIALgBQAOAAAHgJQAHgKAAgRQAAgPgIgKQgIgIgOAAQgHAAgEABQgFABgDACIgHAFIgYgFIAKhZIBfAAIAAAaIhGAAIgFAqQAFgDAHgCQAIgCAHAAQARAAAMAHQAMAHAGAOQAGAMAAASQAAARgGAOQgHAOgNAHQgNAIgTAAQgOAAgNgGg");
	this.shape.setTransform(333.225,143.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAMBZIAAgoIhLAAIgBgSIBMh3IAYAAIAHAAIAABxIAWAAIAAAYIgWAAIAAAogAAKgrIgqBEIAsAAIAAhIg");
	this.shape.setTransform(331.175,147.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdBVQgNgFgIgMQgIgLAAgQIAeAAQAAAHAEAGQADAGAHAEQAGADAIAAQAOAAAHgIQAIgHAAgNQAAgPgIgHQgJgHgOAAIgSAAIAAgQIAAgHIASAAQANAAAIgHQAHgIAAgMQAAgMgGgHQgHgHgNAAQgHAAgGADQgGADgEAFQgDAGAAAHIgfAAQAAgOAIgLQAHgLANgGQANgGAQAAQARAAANAFQAMAGAIALQAHAMAAAQQAAALgHALQgHALgNAFQAPAFAHALQAHALAAAOQAAAQgHAMQgIAMgOAGQgOAGgQAAQgQAAgNgGg");
	this.shape.setTransform(332.725,143.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgyBPIAAgSIAyg3IANgPQAFgHACgGQACgFAAgFQAAgLgGgHQgHgHgJAAQgNAAgHAIQgGAIAAANIgbAAQAAgOAGgMQAHgLAMgHQAMgGAQAAQAPAAALAFQALAFAGAKQAFAKAAANQAAAOgIANQgIANgQAQIghAlIBHAAIAAAVg");
	this.shape.setTransform(332.975,126.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol13copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAHBZIAAiNIgrAPIAAgZIBFgaIAEAAIAACxg");
	this.shape.setTransform(331.575,128.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#015356").s().p("AxaH+QhkAAAAhkIAAszQAAhkBkAAMAi1AAAQBkAAAABkIAAMzQAABkhkAAg");
	this.shape_1.setTransform(333,144.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(211.5,93.3,243,101.89999999999999);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,216,51,0)").ss(1,1,1).p("EgrzgKiMBXnAAAIAAVFMhXnAAAg");
	this.shape.setTransform(280.375,67.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D77E07","#D44300"],[0,1],-280.3,0,280.4,0).s().p("EgrzAKjIAA1FMBXnAAAIAAVFg");
	this.shape_1.setTransform(280.375,67.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,562.8,136.9);


(lib.check_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AApBXIhGhjQgFAEgDAGQgDAGABAHIAABMIgkAAIAAg8QAAgXAIgOQAHgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape.setTransform(97.55,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_1.setTransform(81.725,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BUQgZgFgWgLIAAicIAkAAIAACHQAOAGAPAEQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOATQgOARgYAKQgYAIgdABQgXAAgYgGgAgaAgQAEgFACgKQACgKAAgNIAAhSIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_2.setTransform(65.075,20.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_3.setTransform(47.325,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBXIAAh1QAAgNgHgHQgIgHgMAAIg3AAIAAgdIA5AAQATAAAOAHQAOAGAIAOQAHANAAASIAABzg");
	this.shape_4.setTransform(35.175,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AqkjHIVJAAIAAGPI1JAAg");
	this.shape_5.setTransform(67.675,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#086372").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_6.setTransform(67.675,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#73BEBA").s().p("AqkDIIAAmPIVJAAIAAGPg");
	this.shape_7.setTransform(67.675,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.5,137.4,48.1);


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
	this.instance.setTransform(629.5,22.2,1,1,0,0,0,371.5,22.2);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:687.4,regY:26.1,x:900.5,y:25.5,alpha:0.1597},0).wait(1).to({x:859.5,y:24.9,alpha:0.3056},0).wait(1).to({x:822.45,y:24.35,alpha:0.4375},0).wait(1).to({x:789.25,y:23.9,alpha:0.5556},0).wait(1).to({x:760,y:23.5,alpha:0.6597},0).wait(1).to({x:734.65,y:23.1,alpha:0.75},0).wait(1).to({x:713.15,y:22.8,alpha:0.8264},0).wait(1).to({x:695.6,y:22.55,alpha:0.8889},0).wait(1).to({x:682,y:22.35,alpha:0.9375},0).wait(1).to({x:672.25,y:22.25,alpha:0.9722},0).wait(1).to({x:666.4,y:22.15,alpha:0.9931},0).wait(1).to({regX:371.5,regY:22.2,x:348.5,y:18.2,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,893.9,100.9);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(8,99,114,0)").s().p("AheBpIAAjRIC9AAIAADRg");
	this.shape.setTransform(623.55,22.8);

	this.instance = new lib.Symbol29();
	this.instance.setTransform(10.35,8.9,0.7,0.7,0,0,0,14.8,12.7);

	this.instance_1 = new lib.Symbol29copy();
	this.instance_1.setTransform(10.35,8.9,0.7,0.7,0,0,0,14.8,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,635.2,35.4);


(lib.show_pit = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApIEGIAAoLISRAAIAAILg");
	this.shape.setTransform(58.45,26.175);

	this.instance = new lib.Symbol18();
	this.instance.setTransform(-1206,-210.05,1,1,0,0,0,108,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1288.3,-237.6,1405.2,290);


(lib.FBcopy6 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// כפתרון פתרון
	this.pit_btn = new lib.pit_btn();
	this.pit_btn.name = "pit_btn";
	this.pit_btn.setTransform(-307.25,131.75);
	this.pit_btn._off = true;
	new cjs.ButtonHelper(this.pit_btn, 0, 1, 2, false, new lib.pit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pit_btn).wait(2).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApNFUQgKAAAAgKIAAqTQAAgKAKAAISbAAQAKAAAAAKIAAKTQAAAKgKAAg");
	this.shape.setTransform(995,-273.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_1.setTransform(-181.775,150.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCATIgNBvIgbAAIANhsQACgNAFgLQAGgKAHgFIADgDIgBAAIgQAEIgSAFIgGgVQARgFAVgEQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_2.setTransform(-200.225,150.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgVgKIAAibIAbAAIAACNQAOAGAPADQAQADAOAAQAUAAARgGQARgGAJgMQAKgNAAgSIAAhiIAaAAIAABlQAAAYgOARQgNARgWAIQgWAIgaAAQgWAAgWgFgAgXAlQAFgGADgKQADgKAAgMIAAhWIAZAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_3.setTransform(-221.5,150.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_4.setTransform(-238.7,146.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BPIAFgUQAXAHASAAQAXAAANgMQANgMAAgWIAAhVIhYAAIAAgVIB0AAIAABjQgBAlgTATQgTASgjAAQgVAAgcgIg");
	this.shape_5.setTransform(-251.25,150.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_6.setTransform(-263.9,146.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BPIAFgUQAXAHASAAQAXAAANgMQANgMAAgWIAAhVIhYAAIAAgVIB0AAIAABjQAAAlgUATQgUASghAAQgXAAgbgIg");
	this.shape_7.setTransform(-283.9,150.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeB1IAAjTIhVAAIAAgWIBvAAIAADpg");
	this.shape_8.setTransform(-299.525,153.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApBXIhGhjQgFAEgDAGQgDAFABAJIAABLIgkAAIAAg8QAAgYAIgNQAHgOAQgIIgmg2IAqAAIAuBDIAkhDIApAAIg2BiIA1BLg");
	this.shape_9.setTransform(-180.65,109.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_10.setTransform(-201.375,109.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBXIhGhjQgFAEgCAGQgDAFAAAJIAABLIgjAAIAAg8QAAgYAHgNQAIgOAQgIIgmg2IApAAIAvBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_11.setTransform(-226.95,109.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAlAAIAAAzIBkAAIAAAXIg8CWg");
	this.shape_12.setTransform(-245.05,106.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_13.setTransform(-258.275,109.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkBWQgQgDgPgFIAIgbQANAEAOACQAOACALAAQAVAAALgLQANgKAAgVIAAhMIg8AAQgEAIgCALQgCAKAAAKIAAALQAGACANAAIAAAaIgNABQgNAAgKgCQgKgDgJgFIgBgSQABgPADgNQADgOAGgJIgUAAIAAgdICVAAIAABjQgBAagJASQgLARgSAIQgSAJgWAAQgPAAgRgDg");
	this.shape_14.setTransform(-272.25,109.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_15.setTransform(-290.8,109.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBmQgGgFAAgJQAAgIAGgGQAGgFAIAAQAJAAAGAFQAGAGAAAIQAAAJgGAFQgFAGgKAAQgIAAgGgGgAgPAqIgEiVIAmAAIgECVg");
	this.shape_16.setTransform(-303.825,107.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBRQgQgKgKgQQgJgRAAgVIAAhoIAmAAIAABsQgBALAFAKQAFAJAHAFQAIAFAKAAQAKAAAJgFQAIgFAEgJQAFgKAAgLIAAg1QAAgNgFgHQgHgGgKAAQgIAAgJAEIgEgZQAHgEAIgDQAKgDAIAAQAOAAALAHQAKAGAGAMQAGAMAAARIAAA0QAAAVgJARQgJAQgQAKQgRAJgWAAQgVAAgQgJg");
	this.shape_17.setTransform(-216,100.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhJBMIAJgbQAXAJAUACQgGgFgDgHQgFgHgCgHIgbh6IAlAAIAbB8QACAOAFAIQAOgFAHgKQAJgLgBgRIAAhnIAlAAIAABlQAAAYgKARQgKASgSAIQgTAJgXAAQghAAghgNg");
	this.shape_18.setTransform(-235.65,100.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-258.275,y:109.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-201.375,y:109.2}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_10,p:{x:-263.725,y:100.2}},{t:this.shape_13,p:{x:-249.175,y:100.1}},{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

	// Layer_4
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBeIAzh9IhUAAIAAg+IAXAAIAAAsIBWAAIAAAOIg1CBg");
	this.shape_19.setTransform(-160.775,216.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBIIAAhZQAAgTgIgIQgIgIgRAAIggAAIAAB8IgWAAIAAiPIA2AAQAbAAAPAOQAOAOgBAbIAABYg");
	this.shape_20.setTransform(-174.65,218.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzBIIAAgSIBMAAIhVh9IAaAAIAlA6IAgg6IAaAAIgsBNIAmA3IAAALg");
	this.shape_21.setTransform(-189.275,218.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAoIAAg9IgaAAIAAgSIAxAAIAABPg");
	this.shape_22.setTransform(-200.475,215.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIAeIAAgqIAAgRIARAAIAAAQIgDArgAgYAeIAAgpIAAgSIARAAIAAAQIgDArg");
	this.shape_23.setTransform(-213.675,210.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaBCQgOgIgIgOQgIgQABgTIAAgOQAAgJACgKQADgJAEgIQAFgHAGgEIABAAIAAgBIgaAGIgEgRQAPgEARgDQASgCAPAAQATAAAPAIQAOAHAIAPQAIAPAAAVIAAAQQAAATgIAQQgHAOgOAIQgOAJgSgBQgRABgNgJgAgQgxQgIAGgEALQgFALAAAPIAAAPQAAANAFAMQAEAKAJAGQAIAFALAAQALAAAJgFQAJgGAEgKQAFgMABgNIAAgQQgBgOgFgMQgEgKgJgGQgJgFgNAAQgJAAgJAFg");
	this.shape_24.setTransform(-226.05,218.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpBIIAAgVIAHAAQARAAALgKQAKgKADgQIAAhEIgfAAIAAgTIA2AAIAABKQAAALACALIAKAvIgVAAIgJgoIgBAAQgBALgHAJQgFAKgLAGQgKAGgNAAIgFgBg");
	this.shape_25.setTransform(-238.975,218.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCBIIAAh8IgRAAIAAgTIAnAAIAACPg");
	this.shape_26.setTransform(-247.625,218.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAaBIIAAhjQAAgMgHgHQgHgGgMAAIgvAAIAAgTIAwAAQAOAAALAGQALAFAGAKQAFAKAAAPIAABhg");
	this.shape_27.setTransform(-257.475,218.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAeIAAgqIAAgRIARAAIAAAQIgDArgAgYAeIAAgpIAAgSIARAAIAAAQIgDArg");
	this.shape_28.setTransform(-266.925,210.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag6BIIAAgSIBNAAIAAhHQAAgTgIgIQgIgIgTAAIgiAAIAAgTIAkAAQAbAAAOAOQAOANABAbIAABGIARABIAAASg");
	this.shape_29.setTransform(-283.8,218.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbBCQgNgIgIgOQgHgQAAgTIAAgOQgBgJADgKQADgJAEgIQAFgHAFgEIACAAIAAgBIgaAGIgEgRQAPgEASgDQARgCAOAAQAUAAAPAIQAOAHAIAPQAIAPAAAVIAAAQQAAATgHAQQgIAOgOAIQgOAJgSgBQgRABgOgJgAgQgxQgHAGgFALQgFALAAAPIAAAPQAAANAFAMQAEAKAJAGQAJAFAKAAQAMAAAIgFQAJgGAEgKQAGgMAAgNIAAgQQAAgOgGgMQgEgKgJgGQgJgFgNAAQgJAAgJAFg");
	this.shape_30.setTransform(-298.65,218.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAoIAAg9IgaAAIAAgSIAxAAIAABPg");
	this.shape_31.setTransform(-310.825,215.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCBIIAAh8IgRAAIAAgTIAnAAIAACPg");
	this.shape_32.setTransform(-318.125,218.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4BIIAAiPIBxAAIAACPgAgiA2IBFAAIAAhqIhFAAg");
	this.shape_33.setTransform(-329.275,218.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(78,200,207,0.2)").s().p("A7uC5QgoAAAAgoIAAkhQAAgoAoAAMA3dAAAQAoAAAAAoIAAEhQAAAogoAAg");
	this.shape_34.setTransform(-239.45,218.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).wait(2));

	// Layer_1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#036F79").s().p("A9IPAQgKAAAAgKIAA9rQAAgKAKAAMA6RAAAQAKAAAAAKIAAdrQAAAKgKAAg");
	this.shape_35.setTransform(-239.5,148.95);
	this.shape_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1).to({_off:false},0).wait(1).to({x:-239.6,y:147.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427.1,-307.9,1482.1,552.9);


(lib.empty_mccopy4 = function(mode,startPosition,loop,reversed) {
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
	this.butt = new lib.Symbol3copy();
	this.butt.name = "butt";
	this.butt.setTransform(-281.25,-68.45);
	new cjs.ButtonHelper(this.butt, 0, 1, 2, false, new lib.Symbol3copy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.butt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.empty_mccopy4, new cjs.Rectangle(-282.2,-69.4,562.7,136.9), null);


(lib.Symbol41copy = function(mode,startPosition,loop,reversed) {
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
	this.hitObject = new lib.empty_mccopy4();
	this.hitObject.name = "hitObject";
	this.hitObject.setTransform(0,2.6);

	this.timeline.addTween(cjs.Tween.get(this.hitObject).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41copy, new cjs.Rectangle(0,0,0,0), null);


// stage content:
(lib._120 = function(mode,startPosition,loop,reversed) {
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

	// מעברון
	this.Show = new lib.Title1_Animcopy2();
	this.Show.name = "Show";
	this.Show.setTransform(647.85,9);

	this.timeline.addTween(cjs.Tween.get(this.Show).wait(1));

	// Layer_3
	this.instance = new lib.Symbol5();
	this.instance.setTransform(720.5,63.55,1,1,0,0,0,722.1,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.check_btn = new lib.check_btn();
	this.check_btn.name = "check_btn";
	this.check_btn.setTransform(988.25,852.1,1,1,0,0,0,67.7,20);
	new cjs.ButtonHelper(this.check_btn, 0, 1, 2, false, new lib.check_btn(), 3);

	this.check3 = new lib.Symbol23();
	this.check3.name = "check3";
	this.check3.setTransform(883.9,664.7,1,1,0,0,0,10.4,8.8);

	this.check2 = new lib.Symbol23();
	this.check2.name = "check2";
	this.check2.setTransform(883.9,549.7,1,1,0,0,0,10.4,8.8);

	this.check1 = new lib.Symbol23();
	this.check1.name = "check1";
	this.check1.setTransform(883.9,435.7,1,1,0,0,0,10.4,8.8);

	this.check0 = new lib.Symbol23();
	this.check0.name = "check0";
	this.check0.setTransform(883.9,319.7,1,1,0,0,0,10.4,8.8);

	this.check7 = new lib.Symbol23();
	this.check7.name = "check7";
	this.check7.setTransform(1109.9,723.7,1,1,0,0,0,10.4,8.8);

	this.check6 = new lib.Symbol23();
	this.check6.name = "check6";
	this.check6.setTransform(1109.9,605.7,1,1,0,0,0,10.4,8.8);

	this.check5 = new lib.Symbol23();
	this.check5.name = "check5";
	this.check5.setTransform(1109.9,487.7,1,1,0,0,0,10.4,8.8);

	this.check4 = new lib.Symbol23();
	this.check4.name = "check4";
	this.check4.setTransform(1109.9,368.7,1,1,0,0,0,10.4,8.8);

	this.hint = new lib.Symbol8copy2();
	this.hint.name = "hint";
	this.hint.setTransform(227.8,139.35,1,1,0,0,0,42.7,21.8);

	this.show_pit = new lib.show_pit();
	this.show_pit.name = "show_pit";
	this.show_pit.setTransform(1569.85,591.85,1,1,0,0,0,58.5,26.2);

	this.feedback4 = new lib.FBcopy6();
	this.feedback4.name = "feedback4";
	this.feedback4.setTransform(751,502.7,1,1,0,0,0,187.5,96);

	this.drag5 = new lib.Symbol13copy31();
	this.drag5.name = "drag5";
	this.drag5.setTransform(195.95,708.7,1,1,0,0,0,333.2,141.9);

	this.drag4 = new lib.Symbol13copy30();
	this.drag4.name = "drag4";
	this.drag4.setTransform(451.05,708.7,1,1,0,0,0,333.2,141.9);

	this.drag3 = new lib.Symbol13copy14();
	this.drag3.name = "drag3";
	this.drag3.setTransform(195.95,595.45,1,1,0,0,0,333.2,141.9);

	this.drag0 = new lib.Symbol13copy12();
	this.drag0.name = "drag0";
	this.drag0.setTransform(451.05,595.45,1,1,0,0,0,333.2,141.9);

	this.drag6 = new lib.Symbol13copy11();
	this.drag6.name = "drag6";
	this.drag6.setTransform(195.95,481.35,1,1,0,0,0,333.2,141.9);

	this.drag7 = new lib.Symbol13copy10();
	this.drag7.name = "drag7";
	this.drag7.setTransform(454.7,481.3,1,1,0,0,0,333.2,141.9);

	this.drag2 = new lib.Symbol13copy7();
	this.drag2.name = "drag2";
	this.drag2.setTransform(195.95,367.65,1,1,0,0,0,333.2,141.9);

	this.drag1 = new lib.Symbol13copy();
	this.drag1.name = "drag1";
	this.drag1.setTransform(451.05,367.65,1,1,0,0,0,333.2,141.9);

	this.target5 = new lib.Symbol41copy();
	this.target5.name = "target5";
	this.target5.setTransform(1242.5,536.35,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target3 = new lib.Symbol41copy();
	this.target3.name = "target3";
	this.target3.setTransform(744.85,710.75,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target2 = new lib.Symbol41copy();
	this.target2.name = "target2";
	this.target2.setTransform(744.85,597.35,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target6 = new lib.Symbol41copy();
	this.target6.name = "target6";
	this.target6.setTransform(1242.5,652.35,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target7 = new lib.Symbol41copy();
	this.target7.name = "target7";
	this.target7.setTransform(1242.5,770.15,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target1 = new lib.Symbol41copy();
	this.target1.name = "target1";
	this.target1.setTransform(744.85,482.15,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target4 = new lib.Symbol41copy();
	this.target4.name = "target4";
	this.target4.setTransform(1242.5,418.55,0.4247,0.6957,0,0,0,1.3,4.1);

	this.target0 = new lib.Symbol41copy();
	this.target0.name = "target0";
	this.target0.setTransform(744.85,369.95,0.4247,0.6957,0,0,0,1.3,4.1);

	this.instance_1 = new lib.Symbol13copy21("synched",0);
	this.instance_1.setTransform(957,710.7,1,1,0,0,180,121.1,143.9);

	this.instance_2 = new lib.Symbol13copy21("synched",0);
	this.instance_2.setTransform(957,597.45,1,1,0,0,180,121.1,143.9);

	this.instance_3 = new lib.Symbol13copy21("synched",0);
	this.instance_3.setTransform(957,483.35,1,1,0,0,180,121.1,143.9);

	this.instance_4 = new lib.Symbol13copy21("synched",0);
	this.instance_4.setTransform(957,369.65,1,1,0,0,180,121.1,143.9);

	this.instance_5 = new lib.Symbol13copy21("synched",0);
	this.instance_5.setTransform(1028.95,770.75,1,1,0,0,0,121.1,143.9);

	this.instance_6 = new lib.Symbol13copy21("synched",0);
	this.instance_6.setTransform(1028.95,653.35,1,1,0,0,0,121.1,143.9);

	this.instance_7 = new lib.Symbol13copy21("synched",0);
	this.instance_7.setTransform(1028.95,536,1,1,0,0,0,121.1,143.9);

	this.instance_8 = new lib.Symbol13copy21("synched",0);
	this.instance_8.setTransform(1028.95,418.65,1,1,0,0,0,121.1,143.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApmFUQgoAAAAgoIAApXQAAgIABgGQAHgaAgAAICrAAIAAFTIM9AAIAAlTIDlAAQAgAAAGAaQACAGAAAIIAAJXQAAAogoAAg");
	this.shape.setTransform(1575.85,500.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(3,122,133,0)").s().p("AmeDmIAAlTIAAh4IM9AAIAAB4IAAFTg");
	this.shape_1.setTransform(1572.9,477.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.target0},{t:this.target4},{t:this.target1},{t:this.target7},{t:this.target6},{t:this.target2},{t:this.target3},{t:this.target5},{t:this.drag1},{t:this.drag2},{t:this.drag7},{t:this.drag6},{t:this.drag0},{t:this.drag3},{t:this.drag4},{t:this.drag5},{t:this.feedback4},{t:this.show_pit},{t:this.hint},{t:this.check4},{t:this.check5},{t:this.check6},{t:this.check7},{t:this.check0},{t:this.check1},{t:this.check2},{t:this.check3},{t:this.check_btn}]}).wait(1));

	// Layer_1
	this.instance_9 = new lib.bganim();
	this.instance_9.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(715.9,434.9,1016.6999999999999,465.1);
// library properties:
lib.properties = {
	id: '7C0A46359C981F4D8E61CEEFFBC26188',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bganim.jpg?1631426375386", id:"bganim"}
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
an.compositions['7C0A46359C981F4D8E61CEEFFBC26188'] = {
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