const selectedCountry = document.querySelector('#country_selector');

selectedCountry.addEventListener('change', function(e){
    fetch('https://corona.lmao.ninja/v2/countries/' + selectedCountry.value)
        .then(response =>response.json())
        .then(data => {
            e.preventDefault();
            document.querySelector('#country').innerHTML = data.country + ' '.toLocaleString();
            document.querySelector('#active-cases').innerHTML = data.active.toLocaleString();
            document.querySelector('#today-cases').innerHTML = data.todayCases.toLocaleString();
            document.querySelector('#total-cases').innerHTML = data.cases.toLocaleString();
            document.querySelector('#recovered').innerHTML = data.recovered.toLocaleString();
            document.querySelector('#today-deaths').innerHTML = data.todayDeaths.toLocaleString();
            document.querySelector('#deaths').innerHTML = data.deaths.toLocaleString();
        })
    .catch(err => alert('Country not available. Please enter another country.'))
})