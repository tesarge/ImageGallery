// JavaScript Document

//Make img tag a variable
var img = document.getElementsByTagName("img");
//Make caption id tag a variable
var caption = document.getElementById("caption");

function imgHover(hover)
{
    for (var i = 0; i< img.length; i++)//Resets with new hover
    {
        img[i].addEventListener("mouseover", function()
        {
            var alt = this.alt; //Sets variable alt equal to selected items alt
            caption.textContent = alt; //Sets caption tag to display image alt
        })
    }

}
function imgClick(image)
{
    //Undo previous border style
    for (var i = 0; i< img.length; i++)//Resets with new click
    {
        img[i].addEventListener("click", function()
        {
            image.style.border = "none";//Sets border style to none when clicked
        })
    }

    //Create variable for large image
    var large = document.getElementById('largeImage');

    //Set selected thumbnail as large image
    large.src = image.src;

    //Add border to selected thumbnail
    
    image.addEventListener("click", function()
    {
        image.style.border = "2px solid tomato";//Sets border style to solid white 2px when clicked
    });
}