const callSpacexData = "https://api.spacexdata.com/v4/launches/";

async function fetchSpacexData() {
    try {
        const response = await fetch(callSpacexData);
        const launches = await response.json();
        displayData(launches);

    } catch (error) {
        console.log(error);
    }
}

fetchSpacexData();

function displayData(launches) {
    console.log(launches);

    const launchDetails = document.querySelector(".product-cards");

    const upcomingDates = document.querySelector(".upcoming-dates");

    let calendar = "";
    let html = "";

    for (let i = 0; i < launches.length; i++) {


        if (launches[i].upcoming === false) {
            continue;
        }

        let launchDet = "Sorry, no details available";

        if (launches[i].details) {
            launchDet = launches[i].details;
        }

        let replaceImageUrl = "images/rocket_cartoon.webp";

        if (launches[i].links.patch.small) {

            replaceImageUrl = launches[i].links.patch.small;
        }


        calendar += `<div class="upcomingDates">
                        <p>${launches[i].date_local}</p>
                    </div>`;

        html += `<div class="details">                 
                    <img src="${replaceImageUrl}">
                    <h3>${launches[i].name}</h3>
                    <p class="flightNumber">Flight number: ${launches[i].flight_number}</p>
                    <p class="launch-date">${launches[i].date_local}</p>
                    <p class="detail-button">${launchDet}</p>
                </div>`;
                
    }
    launchDetails.innerHTML = html;
    upcomingDates.innerHTML = calendar;
}

