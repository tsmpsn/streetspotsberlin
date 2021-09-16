let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: berlin,
        zoom: 10,
    });
    console.log("this ran");
}