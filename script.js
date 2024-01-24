function fetchcutecat() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function() {
        if (xhrRequest.status >= 200 && xhrRequest.status < 300) {
            var responseJSON = JSON.parse(xhrRequest.response);
            var imageUrl = responseJSON[0].url; // Access the URL from the response
            $('#get-image').attr('src', imageUrl);
        } else {
            console.error('Request failed with status:', xhrRequest.status);
        }
    };

    xhrRequest.onerror = function() {
        console.error('Request failed');
    };

    xhrRequest.open('GET', 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', true);
    xhrRequest.send();
}

$(document).ready(function() {
    $('#get-cat-img-btn').click(fetchcutecat);
});
