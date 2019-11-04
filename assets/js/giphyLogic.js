function giphyLogic(){

    
// Initial array of comics
var comics = ["TinTin", "Calvin and Hobbes", "Batman"];

// Function display gifs for each button into the div
function displayComicInfo() {
    var comic = $(this).attr("data-name");
    console.log(comic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + comic + "&rating=g&limit=10&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";
    $("#comic-view").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response)
        var results = response.data;
        var images = [];
        var image_s = [];

        for (var i = 0; i < results.length; i++) {
            var comicDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            images.push(results[i].images.original.url);
            image_s.push(results[i].images.original_still.url);
            var imageComic = $("<img>");
            imageComic.addClass("gif");
            imageComic.attr("src", image_s[i]);
            imageComic.attr("image-animate", images[i])
            imageComic.attr("image-still", image_s[i]);
            comicDiv.append(p);
            comicDiv.append(imageComic);
            $("#comic-view").prepend(comicDiv);
        }
        
    });
}

// Function for adding buttons for new comic added
function renderButtons() {

    // Clearing
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of comics
    for (var i = 0; i < comics.length; i++) {

        // Then dynamically generating buttons for each comic in the array

        var myButton = $("<button>");
        // Adding a class of comic to our button
        myButton.addClass("comic");
        // Adding a data-attribute
        myButton.attr("data-name", comics[i]);
        // Providing the initial button text
        myButton.text(comics[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(myButton);
    }
}

// This function handles events where one button is clicked
$("#add-comic").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var comic = $("#comic-input").val().trim();
    console.log("TextBox input", comic)
    // Adding the comic from the textbox to our array
    comics.push(comic);
    console.log(comics);
    
    // Calling renderButtons which handles the processing of our comic array
    renderButtons();
});

// Function for displaying the comic gifs

$(document).on("click", ".comic", displayComicInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();

$(document).on("click", ".gif", function (event) {
    var gifImageUrl = $(this).attr("image-animate");
    var stillImageUrl = $(this).attr("image-still");
    if ($(this).attr("src") == stillImageUrl) {
        $(this).attr("src", gifImageUrl);
    } else {
        $(this).attr("src", stillImageUrl);
    }

});

}

