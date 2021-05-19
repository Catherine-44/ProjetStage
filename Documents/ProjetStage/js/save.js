// google Maps API
function initialize() {

    var styleSilver = [
        {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        }
    ];

    //var image = 'images/ico-marker.png';
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(48.8589507, 2.2775172),
        styles: styleSilver,
        disableDefaultUI: true,
        mapTypeControl: false,
        scrollwheel: false,
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: -33, lng: 151}
    });

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    var input = /** @type {HTMLInputElement} */(
        document.getElementById('testmap'));

    // Create the autocomplete helper, and associate it with
    // an HTML text input box.
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var image = 'images/ico-marker.png';

    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        icon:image,
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

    // Get the full place details when the user selects a place from the
    // list of suggestions.
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
        }

        // Set the position of the marker using the place ID and location.
        marker.setPlace(/** @type {!google.maps.Place} */ ({
            placeId: place.place_id,
            location: place.geometry.location
        }));
        marker.setVisible(true);

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address + '</div>');
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);





// sauvegarde formulaire

function verifier() {
    var email, erreur, valid;

    email = document.getElementById('formemail').value;
    if(email === "")
    {
        erreur = "Champ non valide";
        var erreurChamp = document.getElementById("champ");
        erreurChamp = document.createElement("champ");
        erreurChamp.innerHTML = erreur;
        erreurChamp.style.color = "red";
        erreurChamp.style.padding = "8px 0 0 0";
        erreurChamp.style.margin = "0";

    } else{
        valid = "Champ valide";
        var coolChamp =  document.getElementById("champ");
        coolChamp.innerHTML = valid;
        coolChamp.style.color = "green";
        coolChamp.style.padding = "8px 0 0 0";
        coolChamp.style.margin = "0";
    }
}


