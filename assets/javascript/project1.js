//javascript for edemam api/ cooking

// cook button click functionality
$("#cook-button").on("click", function (event) {
  //if statement to prevent blank search
  if ($("#search").val().trim() !== "") {
    event.preventDefault();
    // gets value for food variable from input box
    var food = $("#search").val().trim()
    // gets url for ajax call and inputs food variable
    var queryURL = "https://api.edamam.com/search?q=" + food + "&app_id=dbf4510b&app_key=f6b010164002a524ec934d0070183bf6"
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // after call gets response
      .then(function (response) {

        // THIS WILL CHANGE
        //displays 1st result from recipe call
        $("#results-display").text(response.hits[0].recipe.url)
        // displays first image from recipe call
        $("#results-display").append("<img src='" + response.hits[0].recipe.image + "' >")


        // Log the 10 responses from the call
        console.log(response);


      });

    // javascript for yelp/finding a restaraunt

  }
});
// on click functionality for book button
$("#book-button").on("click", function (event) {
  if ($("#search").val().trim() !== "") {
    event.preventDefault();
    // displays location search
    $("#locationSearch").show();

  }
});
// on click functionality for city search
$("#cityButton").on("click", function (event) {
  if ($("#inputCity").val().trim() !== "") {

    event.preventDefault();
    //creating variables for food and city
    var food = $("#search").val().trim()
    var city = $("#inputCity").val().trim()


    // url for ajax call to yelp api, uses city and food variables to complete search
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + food + "&location=" + city
    // ajax call to yelp
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        Authorization: "Bearer f_OWbSivdwPfDyl30viNm1pnNTDjKRkxJILe56UtQARE0RCvNNOoDY11kZPHD3XBxpDDsHLcQ4gUlUfE_-CxM89He8J5bEgGByTO56_pk-LILybh25BE7NgrRLQsXXYx",

      },
      dataType: 'json',


    })

      .then(function (response) {

        // THIS WILL CHANGE
        // display information from first result of call, displays name, phone address business rating and an image
        $("#results-display").text(response.businesses[0].name);
        $("#results-display").append(response.businesses[0].phone);
        $("#results-display").append(response.businesses[0].location.address1);
        $("#results-display").append("<img src='" + response.businesses[0].image_url + "' />");
        $("#results-display").append(response.businesses[0].rating);



        // Log the resulting object
        console.log(response);


      })
  }
});
