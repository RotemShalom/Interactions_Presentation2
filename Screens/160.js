(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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
// helper functions:

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


(lib.Symbol2copy17 = function(mode,startPosition,loop,reversed) {
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

	// fb
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKDhIAAlbIiTAAIAAhmIETAAIAAHBg");
	this.shape.setTransform(-133.85,263.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACQGTIAAoxQAAhCgmglQgngnhDAAIkOAAIAAhmIESAAQBTAAA8AfQA8AeAgA4QAgA5AABPIAAIog");
	this.shape_1.setTransform(-188.875,281.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9GTIAAq/Il+AAIAAhmIKDAAIAABmIiGAAIAAK/g");
	this.shape_2.setTransform(-256.675,281.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsEABQADgBAFAAIX4AAQAGAAACABg");
	mask.setTransform(378.15,-80.125);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2copy17, new cjs.Rectangle(-676.6,173.2,569.5,209.7), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhxoAGHIAAsNMDjRAAAIAAMNg");
	mask.setTransform(722.075,41.325);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#259494","#175A5A"],[0,1],-720.9,0,721,0).s().p("EhwoAGQIAAsfMDhSAAAIAAMfg");
	this.shape.setTransform(720.55,38.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.4,2.3,1441.9,76), null);


(lib.k1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiHC6IAAlyIEPAAIAAFyg");
	this.shape.setTransform(397.625,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(20));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Aj5GQIDZsfIEaAAIAAMfg");
	var mask_graphics_2 = new cjs.Graphics().p("AlyGQIDZsfIIMAAIAAMfg");
	var mask_graphics_3 = new cjs.Graphics().p("AnrGQIDZsfIL+AAIAAMfg");
	var mask_graphics_4 = new cjs.Graphics().p("ApkGQIDZsfIPwAAIAAMfg");
	var mask_graphics_5 = new cjs.Graphics().p("AreGQIDasfITjAAIAAMfg");
	var mask_graphics_6 = new cjs.Graphics().p("AtXGQIDZsfIXWAAIAAMfg");
	var mask_graphics_7 = new cjs.Graphics().p("AvQGQIDZsfIbIAAIAAMfg");
	var mask_graphics_8 = new cjs.Graphics().p("AxJGQIDZsfIe7AAIAAMfg");
	var mask_graphics_9 = new cjs.Graphics().p("AzCGQIDZsfMAitAAAIAAMfg");
	var mask_graphics_10 = new cjs.Graphics().p("A08GQIDasfMAmfAAAIAAMfg");
	var mask_graphics_11 = new cjs.Graphics().p("A21GQIDZsfMAqSAAAIAAMfg");
	var mask_graphics_12 = new cjs.Graphics().p("A4uGQIDZsfMAuEAAAIAAMfg");
	var mask_graphics_13 = new cjs.Graphics().p("A6nGQIDZsfMAx2AAAIAAMfg");
	var mask_graphics_14 = new cjs.Graphics().p("A8hGQIDasfMA1pAAAIAAMfg");
	var mask_graphics_15 = new cjs.Graphics().p("A+aGQIDasfMA5bAAAIAAMfg");
	var mask_graphics_16 = new cjs.Graphics().p("EggTAGQIDZsfMA9OAAAIAAMfg");
	var mask_graphics_17 = new cjs.Graphics().p("EgiMAGQIDZsfMBBAAAAIAAMfg");
	var mask_graphics_18 = new cjs.Graphics().p("EgkFAGQIDZsfMBEyAAAIAAMfg");
	var mask_graphics_19 = new cjs.Graphics().p("Egl+AGQIDZsfMBIkAAAIAAMfg");
	var mask_graphics_20 = new cjs.Graphics().p("Egn4AGQIDasfMBMXAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:373.35,y:38.15}).wait(1).to({graphics:mask_graphics_2,x:359.425,y:38.15}).wait(1).to({graphics:mask_graphics_3,x:345.525,y:38.15}).wait(1).to({graphics:mask_graphics_4,x:331.6,y:38.15}).wait(1).to({graphics:mask_graphics_5,x:317.675,y:38.15}).wait(1).to({graphics:mask_graphics_6,x:303.8,y:38.15}).wait(1).to({graphics:mask_graphics_7,x:289.875,y:38.15}).wait(1).to({graphics:mask_graphics_8,x:275.95,y:38.15}).wait(1).to({graphics:mask_graphics_9,x:262.05,y:38.15}).wait(1).to({graphics:mask_graphics_10,x:248.125,y:38.15}).wait(1).to({graphics:mask_graphics_11,x:234.2,y:38.15}).wait(1).to({graphics:mask_graphics_12,x:220.275,y:38.15}).wait(1).to({graphics:mask_graphics_13,x:206.375,y:38.15}).wait(1).to({graphics:mask_graphics_14,x:192.45,y:38.15}).wait(1).to({graphics:mask_graphics_15,x:178.525,y:38.15}).wait(1).to({graphics:mask_graphics_16,x:164.65,y:38.15}).wait(1).to({graphics:mask_graphics_17,x:150.725,y:38.15}).wait(1).to({graphics:mask_graphics_18,x:136.8,y:38.15}).wait(1).to({graphics:mask_graphics_19,x:122.9,y:38.15}).wait(1).to({graphics:mask_graphics_20,x:108.975,y:38.15}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJCNIAAguIBFAAIAAh4QAAgggQgRQgRgRgeAAQgYAAgPAQQgPAQgFAdIgVCrIhFAAIAXikQADgSAJgRQAJgRAMgJIAFgDIAAgBIgcAFIgeAIIgPgrQAfgKAqgGQApgGAiAAQBHAAAlAfQAlAfAAA8IAACfg");
	this.shape_1.setTransform(273.1,41.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/C6IAAjDQAAgXAFgMQAFgNAHgLIA4AAQgGATAAAiIAADJgAgRAsQAkgBAXgTQAUgSAAghIAAhwIjCAAIAAguIEJAAIAACdQAAAjgTAaQgSAbgiAOQgiAOgtABg");
	this.shape_2.setTransform(238.65,47.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjCFQgtgJgqgRIAAj3IBEAAIAADYQAZAJAcAFQAcAFAYAAQAmAAAfgJQAdgKARgTQARgUAAgdIAAiUIBEAAIAACbQAAApgbAcQgaAdgtAOQgsAOg3AAQgrAAgugIgAgyAzQAIgIAEgQQAEgRAAgTIAAiDIBDAAIAAB4QAAAWgHAUQgHASgNAMg");
	this.shape_3.setTransform(198.725,42.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBOIAAhsIg3AAIAAguIB8AAIAACag");
	this.shape_4.setTransform(166.25,36.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJCNIAAguIBEAAIAAh4QABgggRgRQgQgRgeAAQgYAAgPAQQgQAQgDAdIgWCrIhFAAIAXikQACgSAKgRQAJgRANgJIAEgDIgBgBIgcAFIgdAIIgPgrQAfgKAqgGQApgGAjAAQBGAAAlAfQAlAfAAA8IAACfg");
	this.shape_5.setTransform(128.8,41.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah/C6IAAjDQAAgXAFgMQAEgNAIgLIA4AAQgGATAAAiIAADJgAgRAsQAlgBAWgTQAUgSAAghIAAhwIjBAAIAAguIEHAAIAACdQABAjgTAaQgSAbgiAOQgiAOgtABg");
	this.shape_6.setTransform(94.3,47.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6CyIBwjkIi2AAIAAh/IBFAAIAABRIC8AAIAAAlIhxDtg");
	this.shape_7.setTransform(62.95,38.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKCJIAAjjIiRAAIAAguIEPAAIAAAuIg4AAIAADjg");
	this.shape_8.setTransform(34.075,42.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AidCJIAAguIATABQAVAAAKgKQALgJAAgVIAAhLQAAgSAGgTQAGgTAKgNIg4AAIAAguICeAAQBBAAAgAaQAhAaAAA1IAACpIhGAAIAAiuQAAgcgOgNQgPgNgeAAIgrAAQgGANgFARQgDARAAARIAABVQAAAogYAVQgYAVgrAAQgRAAgVgCg");
	this.shape_9.setTransform(0.6,42.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,0,429.7,78.2);


(lib.bg1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#333333","#000000"],[0.525,1],-575.4,-372.8,575.4,372.6).s().p("EhwfBGUMAAAiMnMDg/AAAMAAACMng");
	this.shape.setTransform(720,450);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#ECECEC","#CCCCCC"],[0,0.545,1],-575.4,-372.7,575.3,372.7).s().p("EhwfBGUMAAAiMnMDg/AAAMAAACMng");
	this.shape_1.setTransform(720,450);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0,0,1440,900), null);


// stage content:
(lib._160 = function(mode,startPosition,loop,reversed) {
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

	// mahavaron
	this.instance = new lib.k1();
	this.instance.setTransform(1246.9,34.4,1,1,0,0,0,141.1,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// show
	this.window6 = new lib.Symbol2copy17();
	this.window6.name = "window6";
	this.window6.setTransform(1179.85,485.6,1,1,0,0,0,252.5,282.4);

	this.timeline.addTween(cjs.Tween.get(this.window6).wait(1));

	// bg
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(721.95,81.45,1,1,0,0,0,722.5,84.7);

	this.instance_2 = new lib.bg1();
	this.instance_2.setTransform(721,450,1,1,0,0,0,720,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(713.7,445.1,803.3,454.9);
// library properties:
lib.properties = {
	id: 'DCDC50E5B3D3C24BB1D27FA0E56C2ABA',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['DCDC50E5B3D3C24BB1D27FA0E56C2ABA'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;