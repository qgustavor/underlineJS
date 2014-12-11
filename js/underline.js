window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
	  window.setTimeout(callback, 1000 / 60);
	};
})();

var myUnderlines = [];
window.onload = function() {
	var underlineElements = document.querySelectorAll(".underline");
    for(var n = 0; n < underlineElements.length; n++) {

    	var element = underlineElements[n];

    	var underlineStyles = {
    		'text-underline-color': '#fd471e',
    		'text-underline-position': 0.15, // could be ratio or px 
    		'text-underline-skip': true,
    		'text-underline-width': 'auto' // could be auto or px or ratio
    	}


    	var elementStyles = getElementStyles(element);
    	// single line or multiple line?
		if (elementStyles.height > elementStyles.lineHeight) {
			// multiple lines
			console.log('multiple lines');
    		var myUnderline = new MultipleUnderline(element, underlineStyles, elementStyles);
		} else {
			// single line
    		var myUnderline = new SingleUnderline(element, underlineStyles, elementStyles);
		}
    	myUnderlines.push(myUnderline);
    }
}


function animate() {	

	for(var i = 0; i < myUnderlines.length; i++) {
	    var myUnderline = myUnderlines[i];
		// update
		myUnderline.update();

		// clear
	    myUnderline.clear();
		
		// draw stuff
	    myUnderline.draw();
	}

	
	// request new frame
	requestAnimFrame(function() {
	  animate();
	});
}
animate();
