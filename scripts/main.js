$(function() {
	
	var $ul = $("<ul>");
	for (var i = 0; i < sessionsLength(); i++) {
		var session = getSession(i);
		var speaker = getSpeaker(session.speakerIds[0]);
		var results = document.getElementById("sessions");
		var custom = {
			id: session.id,
			title: session.title,
			speakerId: speaker.id,
			speakerName: speaker.name,
			track: session.track,
			from: formatTime(session.starts),
			to: formatTime(session.ends),
			duration: getTimeDifference(session.ends, session.starts)
		}
		$ul.append(tmpl("sessionTemplate", custom));
	}
	
	$("#sessions").append($ul);
});

function sessionsLength() {
	return TrondheimDC.sessions.length;
}

function getSession(id) {
	return TrondheimDC.sessions[id];
}

function speakerLength() {
	return TrondheimDC.speakers.length;
}

function getSpeaker(id) {
	for (var i = 0; i < speakerLength(); i++) {
		if (TrondheimDC.speakers[i] && TrondheimDC.speakers[i].id == id)
			return TrondheimDC.speakers[i];
	}
}

function formatTime(time) {
	var h = time.getHours();
	var m = time.getMinutes();
	if (h < 10) h = "0" + h;
	if (m < 10) m = "0" + m;
	return h + ":" + m;
}

function getTimeDifference(t1, t2) {
	var diff = Math.abs(t1 - t2);
	return Math.floor((diff/1000)/60);
}

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();