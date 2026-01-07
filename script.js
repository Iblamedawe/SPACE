function orszagokListazasa() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const craft = data.craft;
        const select = document.getElementById('name');
        const option = document.createElement('option');
        option.value = craft;
        option.textContent = craft;
        select.appendChild(option);
    });
}