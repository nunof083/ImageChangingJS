var currentIndex = 1;

// I'm using this function to be cleaner and not to have to repeat it on the other functions.
function classHandler() {
    $(".image-box, .image-not-displayed").removeClass("image-box").addClass("image-not-displayed");
    $("#image" + currentIndex).removeClass("image-not-displayed").addClass("image-box");
    $(".selected, .not-selected").removeClass("selected").addClass("not-selected");
    $("#ball" + currentIndex).removeClass("not-selected").addClass("selected");
}

// This function is used with the variable IntervalImage (setInterval) to change the image automatically.
function changeImage() {
    classHandler();

    if (currentIndex > 4) {
        currentIndex = 1;
    } else {
        currentIndex++;
    }
}

var intervalImage = setInterval(changeImage, 2000);

//if arrow clicked, stops changing image automatically.
function stopInterval() {
    $('#arrow').click(clearInterval(intervalImage));
}

// This one is to change the images on the left side.
function changeImageArrowLeft() {
    if (currentIndex > 1) {       //this let us go to the first image, and if it goes under, it goes to the fifth image.
        currentIndex--;
    } else {
        currentIndex = 5;
    }

    classHandler();
    stopInterval();
}

// This is to change on the right.
function changeImageArrowRight() {
    if (currentIndex < 5) {        //this let us go to the fifth image, and if it goes up, it goes to the first image.
        currentIndex++;
    } else {
        currentIndex = 1;
    }

    classHandler();
    stopInterval();
}
