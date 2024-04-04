let map = L.map("map").setView([42.99623748389423, 12.505893042084288], 6);
const bottone = document.getElementById("bottone") 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function visualizzaNegozi(){
    for(let i=0; i < negozi.length; i++){
        let negozio = negozi[i];
        let lat = negozio.latitude;
        let long = negozio.longitude;
        let city = negozio.city;
        let address = negozio.address
        let marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup(`<b>${city}</b><br>${address}`);
    }
}

bottone.onclick = visualizzaNegozi;