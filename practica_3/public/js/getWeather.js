const formClima = document.getElementById('formClima');
const buscar = document.getElementById('buscar');
const mensaje1 = document.getElementById('mensaje-1');
const mensaje2 = document.getElementById('mensaje-2');

formClima.addEventListener('submit', (event) => {
    event.preventDefault();

    const busqueda = buscar.value;
    mensaje1.textContent = 'Cargando...';
    mensaje2.textContent = '';

    fetch('http://api.weatherstack.com/current?access_key=0c42d18dd4a2c1a1aa3579510c8574a0&query=' + busqueda)
        .then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    mensaje1.textContent = data.error.info;
                } else {
                    mensaje1.textContent = data.location.name;
                    mensaje2.textContent = data.current.weather_descriptions[0] + ", " + data.current.temperature + "°C";
                }
            })
        })
})