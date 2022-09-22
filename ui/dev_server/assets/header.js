document.addEventListener("DOMContentLoaded", function() {

    const form = document.forms["search_form"];
    form.onsubmit = function(e) {
        const searchBtn = document.getElementById("searchBtn");
        if (!searchBtn.classList.contains('collapsed')) {
            // Search input has just been opened, don't search.
            return false;
        }
        return document.getElementById("search_query").value !== "";
    }

    const formMobile = document.forms["search_form_2"];
    formMobile.onsubmit = function(e) {
        return document.getElementById("search_query_2").value !== "";
    }
})
