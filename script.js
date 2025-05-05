fetch("https://api.sampleapis.com/countries/countries")
  .then(response => response.json())
  .then(data => {
    const countries = {};
    data.forEach((country, index) => {
      countries[`countries_${country.id}`] = country;
    });

    console.log(countries);
  })
  .catch(err => console.log(`Hiba történt: ${err}`));


   