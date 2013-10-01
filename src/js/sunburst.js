'use strict';

var Sunburst = (function() {
	
	var _drawTriangle = function(ctx, fatness, maxDimen) {
		var xPos = (fatness/100) * maxDimen;
		var xNeg = -1 * xPos;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(maxDimen*Math.sqrt(2), xNeg);
		ctx.lineTo(maxDimen*Math.sqrt(2), xPos);
		ctx.fill();
	};

	var _sunburst = function(canvas, options) {
		var $$ = function(val, deflt) {
			if('undefined'===typeof val) { return deflt; }
			return val;
		};
		
		var ctx = canvas.getContext('2d');
		ctx.save();
		
		options = $$(options, {});
		var bars = $$(options.bars, 36);
		var fatness = $$(options.fatness, 5);
		var color = $$(options.color, 'black');
		var backcolor = $$(options.backcolor, 'white');
		
		var width = canvas.width;
		var height = canvas.height;
		var maxDimen = (height > width ? height : width);
		
		ctx.translate(width/2,height/2);
		ctx.fillStyle = backcolor;
		ctx.fillRect(-1* (width/2),-1 * (height/2),width,height);
		ctx.fillStyle = color;
		for(var i = 0; i < bars; i++) {
			ctx.save();
			ctx.rotate(i*(Math.PI*2/bars));
			_drawTriangle(ctx, fatness, maxDimen);
			ctx.restore();
		}
		
		ctx.restore();
	};
		
	return {Draw : _sunburst};
})();

var init = function(){
	var canvas = document.getElementById('burst');
	canvas.width = document.body.clientWidth * 3;
	canvas.height = document.body.clientHeight * 3;
	canvas.style.position = 'fixed';
	canvas.style.left = -(document.body.clientWidth) + 'px';
	canvas.style.top = -(document.body.clientHeight) + 'px';

	Sunburst.Draw(canvas,{
	  bars: 24,
	  fatness: 10,
	  color: 'rgba(253, 236, 0, 1.0)',
	  backcolor: 'rgba(238, 114, 0, 1.0)'
	});
};

init();

window.onresize = function(){
	init();
};

