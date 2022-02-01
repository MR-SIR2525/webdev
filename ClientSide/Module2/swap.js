function swapImage(image)
{
    var largeImage = document.getElementById('large_image');
    largeImage.src = image;
    swapText(image);
}

//Write a function or update the show image function to randomize the text that accompanies each image
function swapText(img_name)
{
    if (img_name.includes("stoplight")) {
        quote = "Here is a zoomed-in shot of a traffic light, currently displaying red. " +
                 "A beer bottle appears to be in the background.";
    }
    else if (img_name.includes("Audi-R8")) {
        quote = "This is a backside-view of a super car known as the Audi R8. " + 
                "It appears to be early morning in the city here.";
    }
    else if (img_name.includes("face-thing")) {
        quote = "A smiling face goes a long way, but this face is a little unsettling. Author is unknown.";
    }
    else if (img_name.includes("truck-in-desert")) {
        quote = "A nice view of a rocky desert with a Mercedes Sprinter van.";
    }
    else if (img_name.includes("ground-view-of-plane")) {
        quote = "Street-level view looking up at an airplane in the city.";
    }
    
    qt = document.getElementById("imgdesc");

    //Building string to send back
    qt.innerHTML = quote;
}