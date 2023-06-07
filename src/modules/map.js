const map = L.map('map').setView([53.891648, 25.303462], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    center: [
        53.891648, 
        25.303462
      ],
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([53.891648, 25.303462]).addTo(map);
const marker2 = L.marker([53.891741, 25.303519]).addTo(map);
const marker3 = L.marker([53.891633967815714, 25.304059931370258]).addTo(map);
const marker4 = L.marker([53.89153746078612, 25.303522330963546]).addTo(map);
const marker5 = L.marker([53.89166321232616, 25.30312285250748]).addTo(map);

export { map }