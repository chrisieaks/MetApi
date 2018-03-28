$(document).ready(function(){
    $('.change-api').on('click', function(event){
        let id = $(this).data('id');
        let newApi = $(this).data();

        
        $.ajax('/api/api/' + id, {
            type: 'PUT',
            data: newApi
        }).then(function(){
            console.log('Did it work');
            location.reload();
        });
    });

    $('.api-create').on('click', function(event){
        event.preventDefault();
        let newApi = {
            name: $('#api-text').val().trim()
        };
        $.ajax('/api/api', {
            type: 'POST',
            data: newApi
        }).then(function(){
            console.log('Api added');
            location.reload();
        });
    });
});


        // Route that grabs the information from the database and sends it in an ojbect file and handlebars runs the logic
        // Look at cats or hamburgers