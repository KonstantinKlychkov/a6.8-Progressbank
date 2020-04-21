
var progress = 0;

function add1percent() {
	if (progress <=99) {
		progress += 1;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	} else {
		progress = 100;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	}
	
};

function add3percent() {
	if (progress <=97) {
		progress += 3;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	} else {
		progress = 100;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	}
};

function add7percent() {
	if (progress <=93) {
		progress += 7;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	} else {
		progress = 100;
		$("#progressbar").attr({style: "width: " +progress + "%"});
	}
};

function init() {
	$("#plus1perc").click(add1percent);
	$("#plus3perc").click(add3percent);
	$("#plus7perc").click(add7percent);
};

$(document).ready(init);