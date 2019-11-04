# giphyAction
- A Preview:
![Giphygif](/giphy.gif)

# giphy
- Link to the Giphy Action page:
[GiphyAction] (https://dimz13.github.io/giphyAction/.)


### Linked to Gif In Action From Basic Portfolio

## How it works
  - This page will allow user to click on the buttons to search and display gifs
  - User can add a button of their favorite comic book character, using the text box and "add a comic"    button.
  - The generated gifs can be aninmated by a click of the mouse on the image.
  - Ten images will be displayed for each button click.
  - Enjoy watching you favourite character. I particularly love the Calvin and Hobbes dance!!

    

## Tools Used

- [Visual Studio Code](#vscode)
- [Chrome Browser](#chrome)
- [GitLab](https://ucb.bootcampcontent.com/)
- [GitHub](https://github.com/)
- [W3Schools](https://www.w3schools.com/default.asp)
- [SlackForum] (#slackforum)
- [StackOver Flow](https://stackoverflow.com/)



## Core Technologies Used
 - [HTML] (#html)
 - JavaScript
 - JQuery
 - BootStrap CSS Framework

## Challenges in getting this to work:
 - The pausing gif part was a bit difficult to implement. Finally got a solution:
 - Initial idea was to compare the state of image and change to animate or still url
 - Implemented by checking the actual url itself. Code block below:
 ```jQuery
 $(document).on("click", ".gif", function (event) {
    var gifImageUrl = $(this).attr("image-animate");
    var stillImageUrl = $(this).attr("image-still");
    if ($(this).attr("src") == stillImageUrl) {
        $(this).attr("src", gifImageUrl);
    } else {
        $(this).attr("src", stillImageUrl);
    }

});
```


