//Cadmiel Torres de Lima

function initMap() {
    var myLatLng = { lat: -23.5505199, lng: -46.6333094 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Caçapava'
    });
}