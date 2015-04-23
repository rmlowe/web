var timeout;

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("mytext").addEventListener("input", function() {
		if (timeout) {
			window.clearTimeout(timeout);
		}
		timeout = window.setTimeout(function() {
			alert("The text is: " + document.getElementById("mytext").value);
		}, 5000);
	})
})
