$(document).ready(function() {
    var submitForm = $("form.create-form");
    var nameInput = $("input#apiName");
    var urlInput = $("input#apiUrl");
    var tagInput = $("input#apiTag");
    var priceRadio = $("[name=free]:checked");
    var clientServerRadio = $("[name=clientServer]:checked");

    submitForm.on("submit", function(event) {
        event.preventDefault();
        console.log('we here');
        var userData = {
            name: nameInput.val().trim(),
            url: urlInput.val().trim(),
            tags: tagInput.val().trim(),
            free: priceRadio.val().trim(),
            clientServer: clientServerRadio.val().trim()
        };

        if (!userData.name || !userData.url || !userData.tags) {
            return;
        }
        submitApi(userData.name, userData.url, userData.tags, userData.free, userData.clientServer);
    })

    function submitApi(name, url, tags, free, clientServer) {
        console.log('post submit')
        $.post("/api/submit", {
            name: name,
            url: url,
            tags: tags,
            free: free,
            clientServer: clientServer
        })
        .then(function(data) {
            console.log(data);
            window.location.href = '/';
        })
        .catch(handleLoginErr);
    }
    
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
})