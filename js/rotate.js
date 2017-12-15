window.onload = rotate;

var adImages = new Array("http://a3.mzstatic.com/us/r30/Purple71/v4/c1/c9/c4/c1c9c4fb-168e-944d-25c8-2d9a7fb55b06/screen696x696.jpeg","http://a3.mzstatic.com/us/r30/Purple62/v4/a2/e2/70/a2e270ef-0661-7300-3f1c-61b324c60c62/screen696x696.jpeg","http://a4.mzstatic.com/us/r30/Purple62/v4/d5/0a/96/d50a96ce-dcef-023a-7c50-084fd760d180/screen696x696.jpeg");
var thisAd = 0;

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout("rotate()", 3 * 500);
}
