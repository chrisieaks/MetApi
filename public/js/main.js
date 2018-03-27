$(document).ready(function() {
    // Getting references for the API input and API container. Also creating a table body for API list.
    var apiInput = $("#apiInput");
    var apiList = $("tbody");
    var apiContainer = $(".api-container");

    // Adding event listern to the form to search for a new API.
    $(document).on("submit", "#api-form", handleApiSearchSubmit);

    // Our initial API array
    var api = [];
    
    // Retrieves the initial list of APIs.
    getApi();

    // Function to reset the API displayed with new APIs from the database.
    function initializeApi() {
        apiContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i <api.length; i++) {
            rowsToAdd.push(createNewRow(api[i]));
        }
        apiContainer.prepend(rowsToAdd);
        }
    // Function grabs API from the database and updates the view. 
        function getApi() {
            $.get("/api/api". function(data) {
                api = data;
                initializeRows();
            });
        }
