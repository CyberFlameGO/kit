/* Projects that import the GeoNet header must contain the following JS so that
the search inputs function. This is on top of the standard
GeoNet Bootstrap.js file (which also needs to be present).
Note: This is just an example using jQuery, any implemenation will work so
long as the element ids/classes match */

// Search form on header
$("#search_form").submit(function(e)   {

    const searchBtn = document.getElementById("searchBtn");
    if (!searchBtn.classList.contains('collapsed')) {
        // Search input has just been opened, don't search.
        return false;
    }
    return $("#search_query").val()!='';
});

// Search form on mobile header
$("#search_form_2").submit(function(e) {
    return $("#search_query_2").val()!='';
})