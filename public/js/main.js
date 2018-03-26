$(document).ready(function() {
    // Getting references for the API input and api container. Also creating a table body for API list.
    var apiInput = $("#apiInput");
    var apiList = $("tbody");
    var apiContainer = $(".api-container");

    // Adding event listern to the from to create a new API.
    $(document).on("submit", "#api-form", handleApiFormSubmit);

    // Retrieves the initial list of APIs
    getApi();

    function handleApiFormSubmit(event) {
        event.preventDefault();
        if (!apiInput.val().trim()) {
            return;
        }
    }
}) 