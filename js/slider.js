window.onload = rotate;

var adImages = new Array("https://dribbble.s3.amazonaws.com/users/4467/screenshots/257352/abraham-lewis.jpg","https://dribbble.s3.amazonaws.com/users/4467/screenshots/245651/robot.jpg","https://dribbble.s3.amazonaws.com/users/4467/screenshots/212240/brainoid.jpg");
var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout("rotate()", 3 * 500);
}
