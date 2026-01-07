const select = document.getElementById('craftSel');
const astroCards = document.getElementById('astroCards');
var firstLoad = true;
function orszagokListazasa(filter) {
    astroCards.innerHTML = '';
    fetch('http://api.open-notify.org/astros.json')
    .then( response =>{
                if(!response.ok) console.log('Hiba történt!');
                return response.json();
            })
    .then(data => {
        var name = data.name;
        data.people.forEach( person => {
            console.log(`${person.name} - ${person.craft}`);
            if(filter === 'all' || person.craft === filter)
            astroCards.innerHTML += `
            <div class="astroCard">
                <h2>${person.name}</h2>
                <p>Űrállomás: ${person.craft}</p>
            </div>`;
        });
        if(firstLoad){
            firstLoad = false;
            var stations = data.people.map(person => person.craft);
            stations = [...new Set(stations)];
            stations.forEach( station => {
                craftSel.innerHTML += `<option value="${station}">${station}</option>`;
            });
            document.getElementById('population').innerText = data.number;
        }
    });
}
document.getElementById('craftSel').addEventListener('change', (event) => {orszagokListazasa(event.target.value);});
orszagokListazasa('all');