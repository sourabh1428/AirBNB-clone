const checkin=document.getElementById("checkIn");
const checkout=document.getElementById("checkOut");
const searchBTN=document.getElementById("searchBTN");
const noOfRes=document.getElementById("noOfRes");
const cardHandler=document.getElementById("cardHandler");
const getLoc=document.getElementById("getLoc");
const myHero=document.getElementById("myHero");




let ind;
let out;




checkin.addEventListener("change", function(event) {
    ind=event.target.value;

});
checkout.addEventListener("change",function(event){
    out=event.target.value;
})

searchBTN.addEventListener("click",async function(){
    //call that async function
    const loc=getLoc.value;
    const ng=document.getElementById("getGuest").value;
    const ans= await fetchData(loc,ind,out,ng);

   await  attachFiles(ans);
});


async function loadMapScenario(locations) {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AijxcPIw3vQXRWNdE2PmnIH8oRqYwVZFISTNDWPsvZUHmsvEAgMrXqhnAM4GctUP',
        zoom: 8
    });

    await console.log(locations);

    // Loop through the locations and add markers to the map
    locations.forEach(function (location) {
        var loc = new Microsoft.Maps.Location(location.lat, location.lng);
        var pin = new Microsoft.Maps.Pushpin(loc, { title: location.city });
        map.entities.push(pin);
    });

    if (locations.length > 0) {
        var centerLocation = new Microsoft.Maps.Location(locations[0].lat, locations[0].lng);

        // Set the view to focus on the center location
        map.setView({
            center: centerLocation,
            zoom: 11
        });
    }
}

async function attachFiles(res) {
    const results = res.results;
    let locations = [];

    for (let i = 0; i < results.length; i++) {
        locations.push({
            lat: results[i].lat,
            lng: results[i].lng,
            city: results[i].name
        });
    }

    await loadMapScenario(locations);
    noOfRes.innerText = results.length + " + properties in " + getLoc.value;
    
    results.map((res) => {
        createNewCard(res);
    });
}

// async function createMyMap(res){
//     const lat=await res.lat;
//     const lng=await res.lng;
//     console.log(lat,lng);
// }



async function createNewCard(objk){
    let newCard=document.createElement("div");
    newCard.classList="card";
    let res= await objk;

    newCard.innerHTML=`<div class="cardl"><img id="cardImg" src=${res.images[0]} alt=""></div><div class="cardr"><div><p class="cardType">${res.type}</p><h1 id="hotelName">${res.name}</h1></div><div><ul id="hotelAmenities"><li>${res.previewAmenities[0]}</li><li>${res.previewAmenities[1]}</li><li>${res.previewAmenities[2]}</li></ul></div><div class="cardrb"><div><p id="hotelRatings">${res.rating}</p><img src="./searchimg/star (2).svg" alt=""><div><p class="cardRev" id="Reviews">${ res.reviewsCount}</p><p class="cardRev">Reviews</p></div></div><p id="hotelPrice">${res.price.rate}$</p></div></div></div>`;
    
     cardHandler.append(newCard);

}




async function fetchData(location, startDate, endDate, noOfGuest) {
  const url =
    `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${startDate}&checkout=${endDate}&adults=${noOfGuest}&children=0&infants=0&pets=0&page=1&currency=INR`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "df765ec1bemsh0d5e9644fb85c11p16bf0djsn69bac089d648",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  
} catch (error) {
    const newele=document.createElement("div");
    newele.classList="errorClass";
    newele.innerText=error;
    myHero.append(newele);
  }
}

//YYYY-MM-DD

