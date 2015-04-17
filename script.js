var timeout;

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("mytext").addEventListener("input", function() {
		if (timeout) {
			window.clearTimeout(timeout);
		}
		timeout = window.setTimeout(function() {
			alert("hi");
		}, 5000);
	})
})
