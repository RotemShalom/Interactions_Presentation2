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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.t1copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1C3741").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCATIgNBvIgbAAIANhtQACgMAFgLQAGgKAHgFIADgDIgBAAIgQAEIgSAFIgGgVQARgFAVgEQAVgEAQAAQAjAAATATQASATAAAjIAABmg");
	this.shape.setTransform(666.975,113.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C3741").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_1.setTransform(648.725,113.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C3741").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_2.setTransform(634.975,113.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C3741").s().p("AAvBWIhMhpQgQAKAAAXIAABIIgaAAIAAg+QAAgXAHgNQAIgOAQgIIglgzIAeAAIA1BKIAqhKIAeAAIg3BgIA2BLg");
	this.shape_3.setTransform(614.5,113.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C3741").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCATIgNBvIgbAAIANhtQACgMAFgLQAGgKAHgFIADgDIgBAAIgQAEIgSAFIgGgVQARgFAVgEQAVgEAQAAQAjAAATATQASATAAAjIAABmg");
	this.shape_4.setTransform(594.775,113.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C3741").s().p("Ag9BWIAAgWIBcAAIhniVIAfAAIAtBFIAmhFIAfAAIg1BcIAuBBIAAAOg");
	this.shape_5.setTransform(577.125,113.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C3741").s().p("AhEBMIAHgUQAZAKAVABQgMgNgDgQIgdh9IAcAAIAbB+IAEAPIAEAMQASgFAKgMQAKgMAAgVIAAhnIAbAAIAABnQAAAXgKAQQgJAQgSAJQgRAIgVAAQgeAAgggMg");
	this.shape_6.setTransform(559.45,114.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3741").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_7.setTransform(546.35,110.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C3741").s().p("AAnBWIAAhrQAAgWgJgKQgKgKgUAAIgmAAIgBCVIgbAAIAAirIBCAAQAhAAAQAQQARAQAAAiIAABpg");
	this.shape_8.setTransform(526.25,113.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C3741").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_9.setTransform(511.975,113.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C3741").s().p("Ag+B1IAAh9QAAgNACgIIAFgPIAWAAQgCAGAAAIIgBAUIAAB/gAgHAiQANAAALgGQALgGAFgLQAHgLgBgOIAAhQIhpAAIAAgWICFAAIAABmQAAAUgKAQQgJAQgRAJQgRAIgVABg");
	this.shape_10.setTransform(498.8,116.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C3741").s().p("AAfBWIAAh3QAAgOgIgIQgJgIgOAAIg5AAIAAgWIA6AAQARAAANAGQANAHAHAMQAHAMAAARIAAB1g");
	this.shape_11.setTransform(481.5,113.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C3741").s().p("AgOBpQgFgFAAgGQAAgHAFgFQAEgEAHAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgHAAQgHAAgEgEgAgRAvQAAgOADgJQACgJAFgHQAFgHAJgJIAFgFIALgMQAEgFADgHQACgGAAgJQAAgPgIgJQgIgJgPAAQgIAAgHAEQgIADgEAHQgFAGAAAKIgcAAQAAgQAJgMQAHgMAOgHQAOgGAQAAQATAAAMAHQAOAHAGAMQAIANgBARQAAAMgEALQgGALgIAJQgHAJgLAKQgIAHgDAJQgDAJAAAMg");
	this.shape_12.setTransform(467.65,111.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#086372").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhEAAIAAgdIBGAAQAhAAATARQARAQAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_13.setTransform(667.55,62.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#086372").s().p("AhDB2IAAh7QAAgPACgIQADgIAEgGIAeAAQgDALAAAWIAAB/gAgIAcQATgBALgMQAMgMAAgUIAAhGIhoAAIAAgdICNAAIAABjQAAAVgKARQgKARgSAJQgSAJgXABg");
	this.shape_14.setTransform(648.875,65.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#086372").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAzIBjAAIAAAXIg8CWg");
	this.shape_15.setTransform(631.4,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_16.setTransform(617.825,58.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#086372").s().p("AAFBXIAAiQIhNAAIAAgdICQAAIAAAdIgdAAIAACQg");
	this.shape_17.setTransform(605.5,62.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_18.setTransform(591.725,58.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#086372").s().p("AAoBXIhGhjQgEAEgDAGQgCAFgBAJIAABLIgjAAIAAg8QAAgYAIgNQAHgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_19.setTransform(570.6,62.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_20.setTransform(549.875,62.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_21.setTransform(523.325,62.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#086372").s().p("Ag0BUQgZgGgWgKIAAicIAkAAIAACIQAOAGAPADQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOASQgOATgYAIQgYAJgdAAQgXABgYgGgAgaAgQAEgFACgLQACgJAAgMIAAhTIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_22.setTransform(502.225,63);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#086372").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_23.setTransform(484.475,62.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_24.setTransform(472.5,62.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#086372").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_25.setTransform(453.825,62.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#086372").s().p("AAWB2IAAjNIhQAAIAAgdIB1AAIAADqg");
	this.shape_26.setTransform(436.825,65.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_27.setTransform(414.55,62.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#086372").s().p("AAEBZIAAgdIAlAAIAAhMQABgUgKgLQgIgLgQABQgMgBgIAKQgIALgDASIgLBsIglAAIAMhnQABgMAGgLQAFgKAGgGIACgCIAAgBIgPAEIgPAEIgIgbQAQgFAWgEQAWgEATAAQAlAAATAUQAUATAAAmIAABkg");
	this.shape_28.setTransform(396.45,62.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#086372").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAzIBjAAIAAAXIg9CWg");
	this.shape_29.setTransform(378.95,60.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#086372").s().p("AhJBXIAAgeIBZAAIAAhQQAAgSgJgIQgHgIgSAAIgtAAIAAgdIAvAAQAhAAASARQASAQAAAfIAABPIAVACIAAAcg");
	this.shape_30.setTransform(363.05,62.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#086372").s().p("AgIB2IAAjNIgSAAIAAgdIA1AAIAADqg");
	this.shape_31.setTransform(349.625,65.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#086372").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_32.setTransform(329.2,62.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#086372").s().p("AAEBZIAAgdIAlAAIAAhMQABgUgKgLQgIgLgQABQgMgBgJAKQgHALgDASIgLBsIglAAIAMhnQACgMAFgLQAFgKAGgGIACgCIAAgBIgPAEIgPAEIgIgbQARgFAVgEQAWgEATAAQAlAAATAUQAVATgBAmIAABkg");
	this.shape_33.setTransform(310.15,62.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#086372").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_34.setTransform(294.925,58.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#086372").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_35.setTransform(285.525,62.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#086372").s().p("AhIBMIAIgbQAXAJATACQgEgFgFgHQgDgHgCgHIgch6IAlAAIAbB8QACAOAFAIQAOgFAIgKQAIgLAAgRIAAhnIAlAAIAABlQAAAYgKASQgLARgSAIQgSAJgYAAQghAAgggNg");
	this.shape_36.setTransform(271.65,62.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#086372").s().p("AAFBXIAAiQIhNAAIAAgdICQAAIAAAdIgdAAIAACQg");
	this.shape_37.setTransform(255.2,62.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1copy, new cjs.Rectangle(244.9,38,433.80000000000007,99.19999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7B5QgagOgOgZQgPgaAAgiIAAiaIBFAAIAACiQAAAQAGAMQAFAMALAGQAKAHANAAQANAAALgHQAKgGAGgMQAGgMAAgQIAAhLQAAgigeAAQgJAAgOADIgHgsQAMgGAOgFQAPgEANAAQAXAAARAKQARAKAJAUQAJASAAAbIAABIQAAAigPAaQgOAZgaAOQgaAPgiAAQghAAgagPg");
	this.shape.setTransform(727.325,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_1.setTransform(703.425,20.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBLIAAhgIgpAAIAAg1IBtAAIAACVg");
	this.shape_2.setTransform(687.975,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAICHIAAg1IAuAAIAAhoQAAgbgKgOQgLgPgTAAQgSAAgLAPQgKAOgCAcIgRCcIhDAAIAQiTQADgSAGgQQAIgQAIgJIAEgDIAAgBIgVAFQgMADgIAEIgQgyQAagJAjgGQAigGAcAAQA8AAAgAfQAfAfABA7IAACUg");
	this.shape_3.setTransform(666.05,25.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZCEIAAitQgBgSgJgJQgLgJgRAAIhPAAIAAg2IBUAAQAfAAAXAMQAXAKAMAVQANAVAAAdIAACqg");
	this.shape_4.setTransform(639.15,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Title1copy2, new cjs.Rectangle(81.9,-10,661.1,70.1), null);


(lib.FBcopy4 = function(mode,startPosition,loop,reversed) {
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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+BrIgRAAIAAjVIBLAAQAmAAAUAPQAWAPgBAdQABAPgIAMQgHAMgQAGQASAEAJANQAIAMAAARQAAAfgUAQQgUAQgmAAgAghBGIAjAAQAQAAAIgHQAIgIAAgMQAAgcgeAAIglAAgAghgQIAdAAQAQAAAJgHQAJgGgBgNQAAgOgIgGQgIgGgRAAIgdAAg");
	this.shape.setTransform(1005.8,-271.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBrIAAjVIAuAAIBdAAIAAAmIhdAAIAAA0IBTAAIAAAkIhTAAIAABXg");
	this.shape_1.setTransform(988.35,-271.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApNFUQgKAAAAgKIAAqTQAAgKAKAAISbAAQAKAAAAAKIAAKTQAAAKgKAAg");
	this.shape_2.setTransform(995,-273.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBXIhGhjQgFAEgDAGQgCAFAAAIIAABMIgkAAIAAg8QAAgYAHgNQAIgOAQgJIgmg1IApAAIAvBDIAkhDIApAAIg2BiIA1BLg");
	this.shape_3.setTransform(205.25,-74.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTBWIAAgdIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgLADgNQADgMAGgIIgeAAIAAgdIBUAAQAjAAARARQARAQAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgCg");
	this.shape_4.setTransform(184.525,-74.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBXIhGhjQgEAEgDAGQgCAFgBAIIAABMIgjAAIAAg8QAAgYAHgNQAIgOAQgJIgmg1IAqAAIAuBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_5.setTransform(158.95,-74.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAlAAIAAAzIBkAAIAAAXIg9CWg");
	this.shape_6.setTransform(140.85,-77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_7.setTransform(127.625,-74.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBWQgQgDgOgFIAHgbQANAEAOACQAOACAKAAQAWAAALgLQAMgKAAgVIAAhMIg7AAQgEAIgCALQgCAKAAAKIAAALQAGACANAAIAAAaIgNABQgNAAgKgCQgKgDgJgFIAAgSQgBgPAEgNQADgOAGgJIgUAAIAAgdICVAAIAABjQAAAagLASQgKARgSAIQgSAJgWAAQgPAAgRgDg");
	this.shape_8.setTransform(113.65,-74.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_9.setTransform(95.1,-74.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBmQgGgFAAgJQAAgIAGgGQAGgFAIAAQAJAAAGAFQAGAGAAAIQAAAJgGAFQgFAGgKAAQgIAAgGgGgAgPAqIgEiVIAmAAIgECVg");
	this.shape_10.setTransform(82.075,-76.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEBZIAAgdIAlAAIAAhMQAAgUgJgLQgIgLgQABQgMgBgJALQgHAKgDASIgLBsIglAAIAMhnQABgMAGgLQAEgKAHgGIACgCIAAgBIgPAEIgPAFIgJgbQASgHAVgDQAWgEATAAQAlAAATAUQAVATgBAmIAABkg");
	this.shape_11.setTransform(222.5,-47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhABXIAAgdIBUAAIhhiQIAqAAIAnA/IAgg/IAqAAIg0BeIAqA9IAAASg");
	this.shape_12.setTransform(204.25,-46.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBxIA7iQIhhAAIAAhQIAmAAIAAAyIBjAAIAAAYIg9CWg");
	this.shape_13.setTransform(187.9,-49.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFBZIAAgdIAkAAIAAhMQABgUgJgLQgJgLgQABQgNgBgHALQgJAKgCASIgMBsIgkAAIAMhnQABgMAFgLQAGgKAGgGIADgCIgBgBIgPAEIgPAFIgIgbQAQgHAXgDQAVgEATAAQAlAAAUAUQATATAAAmIAABkg");
	this.shape_14.setTransform(170,-47);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgRgJgJQgIgIgRAAIhDAAIAAgdIBFAAQAhAAASARQASAQAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_15.setTransform(151.3,-46.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBGAAQAhAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPACgIQADgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_16.setTransform(304.95,-87.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBXIAAgeIAKAAQALAAAGgFQAFgHAAgMIAAgvQAAgMADgMQADgMAGgIIgeAAIAAgdIBUAAQAjAAARAQQARARAAAhIAABrIglAAIAAhuQAAgRgIgJQgHgIgRAAIgWAAIgGATQgCALAAALIAAA1QAAAZgMANQgNAOgYAAIgTgBg");
	this.shape_17.setTransform(285.325,-87.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BUQgZgGgWgKIAAicIAkAAIAACIQAOAFAPAEQAPADANAAQAUAAAQgGQAQgGAJgMQAJgNAAgSIAAhdIAkAAIAABhQAAAagOATQgOARgYAKQgYAIgdABQgXAAgYgGgAgaAgQAEgFACgLQACgJAAgMIAAhTIAjAAIAABLQAAAOgDAMQgEAMgGAIg");
	this.shape_18.setTransform(264.225,-87.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhIBXIAAgeIBYAAIAAhQQAAgSgIgIQgIgIgSAAIgtAAIAAgdIAvAAQAhAAASAQQASARAAAfIAABOIAUADIAAAcg");
	this.shape_19.setTransform(234.5,-87.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASAQQASARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_20.setTransform(217.25,-87.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgJgIQgIgIgRAAIhDAAIAAgdIBEAAQAiAAASAQQASARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAFgHIAdAAQgDAMAAAVIAAA/g");
	this.shape_21.setTransform(191.6,-87.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBXIgQgCIAAgcQAKABALAAQALAAAGgGQAEgGAAgNIAAhbIgfAAIAAgdIBEAAIAAB7QAAAZgNAOQgNANgXAAIgOgBg");
	this.shape_22.setTransform(175.975,-87.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/BRIAGgbQAWAFASAAQAWAAAKgKQAMgLAAgUIAAhMIhUAAIAAgdIB5AAIAABiQAAAngVATQgUATgkAAQgXAAgbgHg");
	this.shape_23.setTransform(162.1,-87.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJBXIAAiQIgRAAIAAgdIA1AAIAACtg");
	this.shape_24.setTransform(149.375,-87.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXBXIgQgCIAAgcQAKABALAAQALAAAGgGQAEgGAAgNIAAhbIgfAAIAAgdIBEAAIAAB7QAAAZgNAOQgNANgXAAIgOgBg");
	this.shape_25.setTransform(138.825,-87.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_26.setTransform(124.8,-87.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAhBXIAAhuQAAgSgIgIQgJgIgRAAIhEAAIAAgdIBFAAQAiAAATAQQARARAAAfIAABtgAhFBXIAAg7QAAgPADgIQACgHAEgHIAeAAQgDAMAAAVIAAA/g");
	this.shape_27.setTransform(99.15,-87.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDAxIAAhEIgdAAIAAgdIBBAAIAABhg");
	this.shape_28.setTransform(84.425,-91.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAoBXIhGhjQgEAEgDAGQgCAGgBAHIAABMIgjAAIAAg8QAAgXAIgOQAHgOAQgJIgmg1IApAAIAvBDIAjhDIAqAAIg2BiIA1BLg");
	this.shape_29.setTransform(70.75,-87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:127.625,y:-74.95}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_7,p:{x:246.475,y:-87.9}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer_4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C6420C").s().p("A8cBIQgpAAAAgQIAAhvQAAgQApAAMA45AAAQApAAAAAQIAABvQAAAQgpAAg");
	this.shape_30.setTransform(142.225,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C6420C").s().p("A8cBIQgpAAAAgQIAAhwQAAgPApAAMA45AAAQApAAAAAPIAABwQAAAQgpAAg");
	this.shape_31.setTransform(190.975,11.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#036F79").s().p("A9IPAQgKAAAAgKIAA9rQAAgKAKAAMA6RAAAQAKAAAAAKIAAdrQAAAKgKAAg");
	this.shape_32.setTransform(141,-71.3);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1).to({_off:false},0).wait(1).to({x:189.75,y:-69.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-307.9,1101.5,334.5);


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
	this.instance.setTransform(709.5,22.2,1,1,0,0,0,371.5,22.2);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:684.3,regY:25.9,x:964.6,y:25.3,alpha:0.1597},0).wait(1).to({x:911.95,y:24.7,alpha:0.3056},0).wait(1).to({x:864.35,y:24.15,alpha:0.4375},0).wait(1).to({x:821.7,y:23.7,alpha:0.5556},0).wait(1).to({x:784.1,y:23.3,alpha:0.6597},0).wait(1).to({x:751.55,y:22.9,alpha:0.75},0).wait(1).to({x:723.95,y:22.6,alpha:0.8264},0).wait(1).to({x:701.4,y:22.35,alpha:0.8889},0).wait(1).to({x:683.9,y:22.15,alpha:0.9375},0).wait(1).to({x:671.35,y:22.05,alpha:0.9722},0).wait(1).to({x:663.85,y:21.95,alpha:0.9931},0).wait(1).to({regX:371.5,regY:22.2,x:348.5,y:18.2,alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.9,-14,835,100.9);


(lib.a1copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_44 = function() {
		this.stop();
		
		this.check_btn.addEventListener("click" ,  checkAns);
		
		
		function checkAns(e)
		{
		    var input = myBox.value;
		    
			if(input == "מצלמה")
			{
				showFb(true);
			}
			else
			{
				showFb(false);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// k1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#73BEBA").ss(2,1,1).p("AByhtIAADbIjjAAIAAjbg");
	this.shape.setTransform(-507.8,-31.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1CA4AE").s().p("AhxBuIAAjbIDjAAIAADbg");
	this.shape_1.setTransform(-507.8,-31.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_2.setTransform(827.525,169.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_3.setTransform(813.65,166.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_4.setTransform(801.875,165.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C3741").s().p("AAbBpIAAi9IhNAAIAAgUIBlAAIAADRg");
	this.shape_5.setTransform(791.075,171.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_6.setTransform(771.6,166.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_7.setTransform(756.025,169.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C3741").s().p("AggBMIABgTQAIACALAAQALAAAEgHQAGgFgBgOIAAhbIgdAAIAAgUIA2AAIAABxQAAAWgKALQgLALgTAAQgMAAgNgDg");
	this.shape_8.setTransform(743.3,169.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_9.setTransform(734.7,169.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_10.setTransform(721.875,169.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C3741").s().p("AADBPIAAgUIAoAAIAAhKQAAgVgKgLQgJgLgSAAQgMABgIAJQgJAKgCARIgMBkIgYAAIAMhhQABgMAFgJQAFgJAHgGIACgCIAAAAIgPAEIgQAEIgGgTQAPgEATgEQATgDAPAAQAgAAAQARQARAQAAAgIAABcg");
	this.shape_11.setTransform(698.975,168.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPABAdIAABggAg6BOIAAg1QAAgMACgHIAEgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_12.setTransform(682.6,169.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C3741").s().p("AAcBOIAAhsQAAgMgIgIQgHgHgNAAIgzAAIAAgUIA0AAQAQAAALAGQAMAGAGALQAGALAAAPIAABqg");
	this.shape_13.setTransform(667.475,169.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C3741").s().p("AgJBdQgEgEAAgGQAAgGAEgEQADgEAGAAQAHAAAEAEQADAEABAGQgBAGgDAEQgEAEgHAAQgGAAgDgEgAgKApIgCiJIAZAAIgDCJg");
	this.shape_14.setTransform(658.05,167.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_15.setTransform(638.425,169.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C3741").s().p("AgCBOIAAiHIgSAAIAAgUIApAAIAACbg");
	this.shape_16.setTransform(626.45,169.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C3741").s().p("AAbBpIAAi9IhNAAIAAgUIBlAAIAADRg");
	this.shape_17.setTransform(615.575,171.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C3741").s().p("AgcBbQgNgFgJgMQgIgMgBgSIAXAAQACARAKAIQAJAJAPAAQALAAAIgGQAIgFAEgKQAFgKAAgNQAAgMgFgKQgEgKgJgEQgJgGgLAAQgHAAgGACQgFABgEACIgJAGIgUgEIAKhfIBiAAIAAAWIhNAAIgGA1QAGgEAIgCQAIgDAJAAQASAAANAIQAMAIAHAOQAHAOAAAUQAAASgGAPQgHAOgOAIQgOAIgTAAQgPAAgNgGg");
	this.shape_18.setTransform(595.875,167.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C3741").s().p("AAMBgIAAihIgwASIAAgXIBFgZIAEAAIAAC/g");
	this.shape_19.setTransform(578.575,167.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_20.setTransform(555.225,169.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C3741").s().p("AggBMIABgTQAIACALAAQALAAAEgHQAFgFAAgOIAAhbIgdAAIAAgUIA2AAIAABxQAAAWgKALQgLALgTAAQgMAAgNgDg");
	this.shape_21.setTransform(538.8,169.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_22.setTransform(529.925,165.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C3741").s().p("AgCBOIAAiHIgSAAIAAgUIApAAIAACbg");
	this.shape_23.setTransform(522.05,169.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_24.setTransform(509.225,169.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_25.setTransform(485.675,169.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_26.setTransform(473.7,169.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C3741").s().p("AgdBNQgNgDgNgEIAFgSQALAEAMACIAWABQAUAAAMgLQAMgKAAgVIAAhLIg9AAQgEAHgDALQgCAMAAAKIAAANIAHABIANABIAAAUQgQAAgKgCQgJgCgJgFIgBgTQAAgNADgNQAEgNAFgIIgTAAIAAgUIB+AAIAABbQABAWgJAOQgJAPgPAIQgPAHgTAAQgMAAgOgCg");
	this.shape_27.setTransform(461.5,169.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C3741").s().p("AACAsIAAhDIgbAAIAAgUIAzAAIAABXg");
	this.shape_28.setTransform(448.525,165.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_29.setTransform(436.575,169.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_30.setTransform(414.9,169.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIAqAAIAACbg");
	this.shape_31.setTransform(402.5,169.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C3741").s().p("AALBOIAAiHIhIAAIAAgUIB7AAIAAAUIgaAAIAACHg");
	this.shape_32.setTransform(392,169.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C3741").s().p("Ag9BFIAGgTQAXAJASABQgKgLgDgPIgahxIAZAAIAZBzIADANIAEAKQAQgDAJgMQAJgLAAgSIAAheIAYAAIAABdQAAAUgIAQQgJAOgQAIQgPAHgUABQgagBgdgKg");
	this.shape_33.setTransform(376.425,169.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIATAAIgBAMIgBASIAAA3g");
	this.shape_34.setTransform(361.45,169.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIArAAIAACbg");
	this.shape_35.setTransform(342.35,169.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_36.setTransform(331.825,169.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgCASIAAA3g");
	this.shape_37.setTransform(316.7,169.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAFgNIAUAAIgCAMIAAASIAAA3g");
	this.shape_38.setTransform(294.15,169.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1C3741").s().p("AhJBNIAAgUIAKABQALAAAFgGQAFgGAAgMIAAgxQAAgMAEgLQADgMAFgIIgdAAIAAgUIBIAAQAeABAQAPQAPAOAAAeIAABfIgZAAIAAhgQAAgVgIgJQgJgIgTgBIgVAAQgFAIgCAKQgDALAAAMIAAA0QAAAVgKALQgKAMgTAAIgQgCg");
	this.shape_39.setTransform(276.875,169.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_40.setTransform(258.675,169.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C3741").s().p("AgDBOIAAiHIgSAAIAAgUIArAAIAACbg");
	this.shape_41.setTransform(243.45,169.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_42.setTransform(232.925,169.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg4AAIAAgUIA5AAQAeAAAPAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_43.setTransform(217.8,169.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_44.setTransform(196.35,166.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1C3741").s().p("AgsBLQgUgEgSgJIAAiNIAXAAIAAB/QANAGAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgMAAgQIAAhZIAXAAIAABbQAAAWgLAQQgMAPgUAHQgUAHgYABQgTgBgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABJQAAANgDAKQgDAKgGAHg");
	this.shape_45.setTransform(178.625,169.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1C3741").s().p("AAqBOIhEhfQgOAJAAAVIAABBIgYAAIAAg5QAAgUAHgMQAHgMAOgHIghgvIAbAAIAvBDIAmhDIAbAAIgyBXIAyBEg");
	this.shape_46.setTransform(159.625,169.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1C3741").s().p("AgXBlIA3iGIhaAAIAAhDIAZAAIAAAvIBcAAIAAAPIg5CLg");
	this.shape_47.setTransform(143.75,166.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1C3741").s().p("AAjBOIAAhhQAAgUgJgJQgJgJgTAAIg5AAIAAgUIA6AAQAdAAAQAPQAPAPAAAdIAABggAg6BOIAAg1QAAgMABgHIAGgNIAUAAIgCAMIgBASIAAA3g");
	this.shape_48.setTransform(128.8,169.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1C3741").s().p("AgsBLQgUgFgSgIIAAiNIAXAAIAACAQANAFAOADQAOADANAAQASAAAOgGQAPgFAJgLQAJgLAAgRIAAhZIAXAAIAABcQAAAVgLAQQgMAOgUAIQgUAHgYAAQgTAAgVgEgAgVAhQAFgFACgJQADgJAAgLIAAhOIAWAAIAABKQAAAMgDAKQgDAKgGAHg");
	this.shape_49.setTransform(825.375,127.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1C3741").s().p("AACArIAAhBIgbAAIAAgVIAzAAIAABWg");
	this.shape_50.setTransform(809.875,124);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1C3741").s().p("AADBPIAAgTIAoAAIAAhMQAAgUgKgLQgJgLgSAAQgMAAgIALQgJAJgCARIgMBkIgYAAIAMhhQABgLAFgKQAFgJAHgGIACgBIAAgBIgPADIgQAFIgGgTQAPgFATgDQATgDAPAAQAgAAAQAQQARARAAAgIAABcg");
	this.shape_51.setTransform(797.775,127.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1C3741").s().p("AACArIAAhBIgbAAIAAgVIAzAAIAABWg");
	this.shape_52.setTransform(784.575,124);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C3741").s().p("AgYBlIA4iGIhaAAIAAhDIAYAAIAAAvIBdAAIAAAPIg5CLg");
	this.shape_53.setTransform(767.65,125.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1C3741").s().p("Ag/BOIAAgUIBUAAIAAhNQAAgUgJgJQgJgJgUAAIglAAIAAgUIAnAAQAdAAAQAPQAPAPAAAdIAABLIATACIAAATg");
	this.shape_54.setTransform(753.575,127.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1C3741").s().p("AgJBdQgEgEgBgGQABgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgDgEgAgKApIgCiJIAYAAIgCCJg");
	this.shape_55.setTransform(743,125.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},30).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).wait(1));

	// input
	this.myBox = new lib.an_TextInput({'id': 'myBox', 'value':'הכנס תשובה כאן', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.myBox.name = "myBox";
	this.myBox.setTransform(539.45,59.85,1.6279,1.7977,0,0,0,50.3,11);
	this.myBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myBox).wait(44).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#024E4B").ss(1,1,1).p("As+jXIZ9AAIAAGuI59AAg");
	this.shape_56.setTransform(539.175,60.4);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(44).to({_off:false},0).wait(1));

	// Layer_3
	this.feedback = new lib.FBcopy4();
	this.feedback.name = "feedback";
	this.feedback.setTransform(296.9,538.3,1,1,0,0,0,187.5,96);
	this.feedback._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedback).wait(44).to({_off:false},0).wait(1));

	// check_btn
	this.check_btn = new lib.check_btn();
	this.check_btn.name = "check_btn";
	this.check_btn.setTransform(376.7,60.35,1,1,0,0,0,67.7,20);
	this.check_btn._off = true;
	new cjs.ButtonHelper(this.check_btn, 0, 1, 2, false, new lib.check_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.check_btn).wait(44).to({_off:false},0).wait(1));

	// k1
	this.instance = new lib.t1copy();
	this.instance.setTransform(521.85,-20.35,1,1,0,0,0,355.3,54.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:-0.35,alpha:1},14,cjs.Ease.get(1)).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.2,-43,1684.6000000000001,274.9);


// stage content:
(lib._220 = function(mode,startPosition,loop,reversed) {
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

	// תוכן
	this.window1 = new lib.a1copy();
	this.window1.name = "window1";
	this.window1.setTransform(439.25,119.6);

	this.timeline.addTween(cjs.Tween.get(this.window1).wait(1));

	// Layer_3
	this.Show = new lib.Title1_Animcopy2();
	this.Show.name = "Show";
	this.Show.setTransform(647.85,9);

	this.instance = new lib.Symbol5();
	this.instance.setTransform(720.5,63.55,1,1,0,0,0,722.1,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Show}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.bganim();
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639,434.9,1089.9,465.1);
// library properties:
lib.properties = {
	id: '7C0A46359C981F4D8E61CEEFFBC26188',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bganim.jpg?1631427126404", id:"bganim"},
		{src:"components/lib/jquery-3.4.1.min.js?1631427126404", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1631427126404", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1631427126404", id:"an.TextInput"}
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