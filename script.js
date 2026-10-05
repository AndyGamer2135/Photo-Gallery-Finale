function upDate(previewPic) {
	console.log("Image selected.");
	console.log("Alt text:", previewPic.alt);
	console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Image deselected.");

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Adding keyboard access to the gallery.");

    let images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabIndex;
