fetch("https://api.sampleapis.com/countries/countries")
  .then(response => response.json())
  .then(data => {
    const countries = {};
    data.forEach((country, index) => {
      countries[`country_${country.id}`] = country;
    });

    console.log(countries);

    //betöltő függvény hívás
    LoadCards(countries)
  })
  .catch(err => console.log(`Hiba történt: ${err}`));

  function LoadCards(countries){
    const cardContainer = document.getElementById("card-container");


    //hiba kezelés
    if(!countries || Object.keys(countries).length === 0){
        return;
    }


    //végig megyünk az országokon
    for(const key in countries){

        //új kártya
        const card = document.createElement("div"); //div létrehozása

        card.classList.add("card"); //card osztály hozzárendelése a div hez

        card.innerHTML = `
        <h2>${countries[key].name}</h2>
        <img src="${countries[key].media.flag}" alt="${countries[key].name}_Zaszló">
        <p><strong>Főváros:</strong> ${countries[key].capital}</p>
        <p><strong>Pénznem:</strong> ${countries[key].currency}</p>
        <p><strong>Rövidítés:</strong> ${countries[key].abbrevitation}</p>`;

        //kártya hozzáadása a containerhez

        cardContainer.appendChild(card);
    }

  }


   