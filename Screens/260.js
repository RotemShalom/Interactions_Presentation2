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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



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
	this.shape.graphics.f("#FFFFFF").s().p("AApCEIAAiqQAAgUgKgJQgKgKgVAAIhsAAIAAg2IBwAAQAiAAAYAMQAYALAMAWQAMAVAAAfIAACmgAhtCEIAAhbQAAgmAQgRIA2AAQgEATAAAdIAABig");
	this.shape.setTransform(727.025,25.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6CDQgbgFgXgIIANgyQAVAFAWAEQAVADAQAAQAfAAAQgPQAQgOAAgbIAAhoIhNAAQgKAZAAAZIAAANQAKADAOgBIAAAtQgNACgOABQgSAAgQgFQgRgEgMgIIAAgXQAAgVAEgUQAEgTAJgNIgcAAIAAg2IDpAAIAACUQAAApgRAbQgRAbgcANQgdAMgjAAQgXAAgagDg");
	this.shape_1.setTransform(697.625,26.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhzB0IAOgzQAfAMAdAFQgIgIgGgJQgFgLgDgKIgoiyIBFAAIAmC5QADAQAFAKQASgGAJgPQAIgPABgVIAAiaIBEAAIAACWQAAAmgPAbQgRAbgcANQgdAOgmAAQg1AAgzgTg");
	this.shape_2.setTransform(667.8,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0CpIBWjRIiNAAIAAiAIBGAAIAABKICRAAIAAAsIhYDbg");
	this.shape_3.setTransform(642.55,22.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiBCDIAAg2IAPABQAgAAAAgiIAAg/QAAgOAEgRQAEgRAHgMIgpAAIAAg2ICFAAQA0AAAaAaQAbAZAAAxIAACjIhFAAIAAipQAAgUgJgKQgJgKgSAAIghAAIgFAaQgCAPAAANIAABKQAAAbgKATQgJATgSAKQgSAKgZAAQgQAAgSgDg");
	this.shape_4.setTransform(614.475,26.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyB7QgbgQgPgcQgQgcAAglIAAgPQAAgTAHgUQAIgWAKgMIAEgCIAAgBIgiAHIgOgxQAbgJAjgEQAkgFAdAAQA9AAAiAhQAgAgABA9IAAAZQgBAlgOAcQgPAcgbAQQgbAPgjAAQghAAgagPgAgag9QgNATAAAlIAAAUQAAATAGAQQAHAPALAHQAKAJAOAAQAPAAALgJQAMgHAFgPQAHgQAAgTIAAgZQAAgigNgSQgNgTgYAAQgXAAgMAUg");
	this.shape_5.setTransform(575,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYCEIAAitQAAgSgKgJQgJgJgSAAIhQAAIAAg2IBVAAQAfAAAXAMQAXAKANAVQAMAVgBAdIAACqg");
	this.shape_6.setTransform(548.75,25.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7B5QgagOgOgZQgPgaAAgiIAAiaIBFAAIAACiQAAAQAGAMQAFAMALAGQAKAHANAAQANAAALgHQAKgGAGgMQAGgMAAgQIAAhLQAAgigeAAQgJAAgOADIgHgsQAMgGAOgFQAPgEANAAQAXAAARAKQARAKAJAUQAJASAAAbIAABIQAAAigPAaQgOAZgaAOQgaAPgiAAQghAAgagPg");
	this.shape_7.setTransform(524.975,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWCEIAAjRIgXAAIAAg2IBbAAIAAEHg");
	this.shape_8.setTransform(501.725,25.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVCyIAAktIgYAAIAAg2IBbAAIAAFjg");
	this.shape_9.setTransform(487.275,30.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAICHIAAg1IAvAAIAAhoQAAgbgLgOQgLgPgUAAQgRAAgKAPQgLAOgDAcIgPCcIhFAAIARiTQACgSAHgQQAHgQAKgJIACgDIAAgBIgUAFQgMADgIAEIgPgyQAZgJAjgGQAhgGAeAAQA7AAAgAfQAgAfgBA7IAACUg");
	this.shape_10.setTransform(454.6,25.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglCEIgbgEIAAg0QAPACARAAQAPAAAIgJQAGgHABgSIAAh7IgvAAIAAg2IByAAIAAC2QAAAbgJATQgJATgTAKQgRAKgZAAQgMAAgLgCg");
	this.shape_11.setTransform(429.8,26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhsCyIAAi4QAAglAPgTIA4AAQgFATABAeIAAC/gAgOAiQAagCAPgPQAPgRAAgcIAAhfIiYAAIAAg2IDdAAIAACUQAAAjgPAZQgPAagdAOQgcANgmACg");
	this.shape_12.setTransform(407.25,30.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWCEIAAjRIgXAAIAAg2IBbAAIAAEHg");
	this.shape_13.setTransform(384.375,25.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAACEIAAjRIhxAAIAAg2IDiAAIAAA2IguAAIAADRg");
	this.shape_14.setTransform(365.25,25.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApCEIAAiqQAAgUgKgJQgKgKgVAAIhsAAIAAg2IBwAAQAiAAAYAMQAYALAMAWQAMAVAAAfIAACmgAhtCEIAAhbQAAgmAQgRIA2AAQgEATAAAdIAABig");
	this.shape_15.setTransform(338.625,25.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAICHIAAg1IAvAAIAAhoQAAgbgLgOQgLgPgUAAQgRAAgKAPQgLAOgDAcIgPCcIhFAAIARiTQACgSAIgQQAHgQAJgJIACgDIAAgBIgUAFQgMADgIAEIgPgyQAZgJAjgGQAhgGAeAAQA7AAAgAfQAgAfgBA7IAACUg");
	this.shape_16.setTransform(298,25.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzB7QgbgQgOgcQgQgcAAglIAAgPQAAgTAIgUQAHgWALgMIADgCIAAgBIgjAHIgMgxQAagJAkgEQAigFAeAAQA9AAAiAhQAgAgAAA9IAAAZQAAAlgOAcQgPAcgbAQQgaAPgkAAQghAAgbgPgAgag9QgNATAAAlIAAAUQAAATAGAQQAGAPALAHQALAJAOAAQAPAAALgJQALgHAHgPQAFgQABgTIAAgZQAAgigNgSQgNgTgYAAQgXAAgMAUg");
	this.shape_17.setTransform(268.25,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWCEIAAjRIgXAAIAAg2IBbAAIAAEHg");
	this.shape_18.setTransform(246.075,25.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_19.setTransform(230.975,20.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_20.setTransform(215.525,20.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAICHIAAg1IAvAAIAAhoQAAgbgLgOQgLgPgUAAQgRAAgKAPQgLAOgDAcIgPCcIhFAAIASiTQABgSAHgQQAIgQAJgJIACgDIAAgBIgUAFQgMADgIAEIgPgyQAZgJAjgGQAhgGAeAAQA7AAAgAfQAgAfgBA7IAACUg");
	this.shape_21.setTransform(193.6,25.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiBCDIAAg2IAPABQAgAAAAgiIAAg/QAAgOAEgRQAEgRAHgMIgpAAIAAg2ICFAAQA0AAAaAaQAbAZAAAxIAACjIhFAAIAAipQAAgUgJgKQgJgKgSAAIghAAIgFAaQgCAPAAANIAABKQAAAbgKATQgJATgSAKQgSAKgZAAQgQAAgSgDg");
	this.shape_22.setTransform(163.075,26.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.check_btncopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhJBMIAIgbQAYAJAUACQgFgFgEgHQgEgHgDgIIgbh5IAlAAIAbB9QACANAEAIQAPgFAIgLQAHgKAAgSIAAhmIAmAAIAABlQAAAYgLASQgKAQgSAJQgTAJgXAAQggAAgigNg");
	this.shape.setTransform(122.75,20.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBXIAAgdIBZAAIAAhRQAAgRgJgJQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_1.setTransform(106.55,20.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_2.setTransform(93.125,20.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBXIAAh1QAAgNgHgHQgIgHgMAAIg3AAIAAgdIA5AAQATAAAOAHQAOAHAIANQAHANAAASIAABzg");
	this.shape_3.setTransform(80.975,20.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAlAAIAAAyIBkAAIAAAYIg8CWg");
	this.shape_4.setTransform(58.9,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBRQgRgLgJgSQgKgSAAgYIAAgNQgBgKADgKQADgKAFgJQAFgIAFgFIACgCIAAAAIgMACIgOAEIgIgbQASgGAWgDQAXgDASAAQAaAAASAKQATAJAJATQAKASAAAaIAAASQAAAYgKASQgJASgSALQgRAKgWAAQgWAAgRgKgAgWgtQgKAOAAAaIAAAPQAAAPAFALQAEALAJAHQAJAGALAAQALAAAJgGQAJgHAFgLQAFgLAAgPIAAgSQAAgYgLgOQgKgNgTAAQgRAAgKAOg");
	this.shape_5.setTransform(40.975,20.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_6.setTransform(26.375,20.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgB1IAAjMIgxAAQgDAHgCAMQgDAKAAAKIAAASQAGACANAAIAAAbIgNABQgNAAgKgDQgKgCgJgFIAAgaQAAgOADgPQAEgOAFgIIgTAAIAAgeICJAAIAADqg");
	this.shape_7.setTransform(12.925,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AuyjHIdlAAIAAGPI9lAAg");
	this.shape_8.setTransform(67.725,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#086372").s().p("AuyDIIAAmPIdlAAIAAGPg");
	this.shape_9.setTransform(67.725,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#73BEBA").s().p("AuyDIIAAmPIdlAAIAAGPg");
	this.shape_10.setTransform(67.725,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-4.5,191.5,48.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:444.1,regY:26.8,x:724.4,y:26.2,alpha:0.1597},0).wait(1).to({x:671.75,y:25.6,alpha:0.3056},0).wait(1).to({x:624.15,y:25.05,alpha:0.4375},0).wait(1).to({x:581.5,y:24.6,alpha:0.5556},0).wait(1).to({x:543.9,y:24.2,alpha:0.6597},0).wait(1).to({x:511.35,y:23.8,alpha:0.75},0).wait(1).to({x:483.75,y:23.5,alpha:0.8264},0).wait(1).to({x:461.2,y:23.25,alpha:0.8889},0).wait(1).to({x:443.7,y:23.05,alpha:0.9375},0).wait(1).to({x:431.15,y:22.95,alpha:0.9722},0).wait(1).to({x:423.65,y:22.85,alpha:0.9931},0).wait(1).to({regX:371.5,regY:22.2,x:348.5,y:18.2,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.9,-14,835,100.9);


(lib._1008 = function(mode,startPosition,loop,reversed) {
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
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_4
	this.innerMovie = new lib.an_Video({'id': 'innerMovie', 'src':'videos/60%20sec%20publich%20-11.1.21.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.innerMovie.name = "innerMovie";
	this.innerMovie.setTransform(491.15,252.25,3.6,3,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.innerMovie).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.6,-199.2,1443.6,903);


// stage content:
(lib._260 = function(mode,startPosition,loop,reversed) {
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
		//this.stop();
		
		// Save the root because do not recognize this in func
		//var saveRoot = this;
		
		// Add Listner to stage
		//canvas.addEventListener("click", moveFrame);
		
		//function moveFrame(e)
		//{
		//                if(saveRoot.totalFrames - 1 != saveRoot.currentFrame)
		 //               {
		 //                               // Move one frame foword
		 //                               saveRoot.gotoAndStop(saveRoot.currentFrame + 1);
		 //               }
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.playBtn = new lib.check_btncopy();
	this.playBtn.name = "playBtn";
	this.playBtn.setTransform(729.25,808.85,1,1,0,0,0,67.7,20);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 2, false, new lib.check_btncopy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playBtn).wait(1));

	// מעברון_תוכן
	this.movie = new lib._1008();
	this.movie.name = "movie";
	this.movie.setTransform(772.5,517,0.656,0.6064,0,0,0,571.2,355.2);

	this.timeline.addTween(cjs.Tween.get(this.movie).wait(1));

	// Layer_1
	this.Show = new lib.Title1_Animcopy2();
	this.Show.name = "Show";
	this.Show.setTransform(647.85,9);

	this.instance = new lib.Symbol5();
	this.instance.setTransform(720.5,63.55,1,1,0,0,0,722.1,63.5);

	this.instance_1 = new lib.bganim();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.Show}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(715.9,434.9,1013.0000000000001,465.1);
// library properties:
lib.properties = {
	id: '64C9B4E96FE8484AB2D863C5958F45F4',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bganim.jpg?1631427703455", id:"bganim"},
		{src:"components/lib/jquery-3.4.1.min.js?1631427703455", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1631427703455", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1631427703455", id:"an.Video"}
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
an.compositions['64C9B4E96FE8484AB2D863C5958F45F4'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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