var topics =["pitbulls", " springer spaniels", "huskies", "golden retrievers", "german shepherds", "labrador retrievers", "poodles", "corgis", "pugs"];


function displayGifs() {
    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=Nw5lA3Ejuwid3qAs4ML6Ch0hOJBWoLaH&limit=10";

   
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
        // $("#gifs-view").text(JSON.stringify(response));
        var results = response.data;
        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);
            $("#gifs-view").prepend(p);
            $("#gifs-view").prepend(gifImage);
          
            }
        }
    });  

}  
    


    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("topic");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
        }
      }

      $("#find-gif").on("click", function(event) {
        event.preventDefault();
        var topic = $("#gif-input").val().trim();
        topics.push(topic);
        renderButtons();
    });  
    
 

    $(document).on("click", ".topic", displayGifs);  
    
    
    
    
    
    
    renderButtons();