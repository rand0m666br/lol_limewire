let playbtn = document.getElementsByTagName("img")[0];
playbtn.onclick = function() {
	let main = document.getElementById("main");
	let play = document.getElementById("play");
	play.style.display = "none";
	main.style.display = "block";
	toca();
}

let audio = new Audio('audio.mp3');
function toca() {
	audio.currentTime = 0;
	audio.play();
	openFullscreen();

	setInterval(toca, 11800);
}

let elem = document.getElementById("main");
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
}