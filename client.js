$('#ledon-button').click(function() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:1337/LEDon',
        success: function (data){
        	for(key in data){
        		console.log(key);
        	}
        }
    });
});