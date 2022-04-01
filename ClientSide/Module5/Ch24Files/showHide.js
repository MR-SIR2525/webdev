//intended to be used by "24code04.html"
//added by me ↓
document.getElementById("myButton").addEventListener("click", function ()
{
    elevation = document.getElementById("elevation");
    photos = document.getElementById("photos");

    if (elevation.style.display == 'block')
    {
        elevation.style.display = 'none';
        photos.style.display = 'block';
        document.getElementById("myButton").innerText = "Show Elevation"

    }
    else 
    {
        photos.style.display = 'none';
        elevation.style.display = 'block';
        document.getElementById("myButton").innerText = "Show Photos"
    }
} );



// //elevation listeners
// document.getElementById("eShow").addEventListener("click", function () 
// {
//     this.style.display = 'none';
//     document.getElementById("eHide").style.display = 'block';
//     document.getElementById("elevation").style.display = 'block';
// } );

// document.getElementById("eHide").addEventListener("click", function () 
// {
//     this.style.display = 'none';
//     document.getElementById("eShow").style.display = 'block';
//     document.getElementById("elevation").style.display = 'none';
// } );

// //photos event listeners
// document.getElementById("pShow").addEventListener("click", function () 
// {
//     this.style.display = 'none';
//     document.getElementById("pHide").style.display = 'block';
//     document.getElementById("photos").style.display = 'block';

// } );

// document.getElementById("pHide").addEventListener("click", function () 
// {
//     this.style.display = 'none';
//     document.getElementById("pShow").style.display = 'block';
//     document.getElementById("photos").style.display = 'none';
// } );
