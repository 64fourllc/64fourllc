"use strict";

const GOOGLE_HREF = 'https://www.google.com/search?q=flight+status+';

const airportData = [
    { code: "ABR", name: "Aberdeen, South Dakota", airlineCodes: ["DL"], shortName: "Aberdeen" },
    { code: "ABQ", name: "Albuquerque, New Mexico", airlineCodes: ["DL"], shortName: "Albuquerque" },
    { code: "AMS", name: "Amsterdam, Netherlands", airlineCodes: ["DL", "KL"], shortName: "Amsterdam" },
    { code: "ANC", name: "Anchorage, Alaska", airlineCodes: ["DL"], shortName: "Anchorage" },
    { code: "ATW", name: "Appleton, Wisconsin", airlineCodes: ["DL"], shortName: "Appleton" },
    { code: "AVL", name: "Asheville, North Carolina", airlineCodes: ["DL", "G4"], shortName: "Asheville" },
    { code: "ATL", name: "Atlanta, Georgia", airlineCodes: ["DL", "F9", "NK"], shortName: "Atlanta" },
    { code: "AUS", name: "Austin, Texas", airlineCodes: ["DL", "WN"], shortName: "Austin" },
    { code: "BWI", name: "Baltimore, Maryland", airlineCodes: ["DL", "WN"], shortName: "Baltimore" },
    { code: "BJI", name: "Bemidji, Minnesota", airlineCodes: ["DL"], shortName: "Bemidji" },
    { code: "BIL", name: "Billings, Montana", airlineCodes: ["DL"], shortName: "Billings" },
    { code: "BIS", name: "Bismarck, North Dakota", airlineCodes: ["DL"], shortName: "Bismarck" },
    { code: "BOI", name: "Boise, Idaho", airlineCodes: ["DL"], shortName: "Boise" },
    { code: "BOS", name: "Boston, Massachusetts", airlineCodes: ["DL", "B6", "SY"], shortName: "Boston" },
    { code: "BZN", name: "Bozeman, Montana", airlineCodes: ["DL"], shortName: "Bozeman" },
    { code: "BRD", name: "Brainerd, Minnesota", airlineCodes: ["DL"], shortName: "Brainerd" },
    { code: "BKG", name: "Branson, Missouri", airlineCodes: ["DL"], shortName: "Branson" },
    { code: "BUF", name: "Buffalo, New York", airlineCodes: ["DL"], shortName: "Buffalo" },
    { code: "BTV", name: "Burlington, Vermont", airlineCodes: ["DL"], shortName: "Burlington" },
    { code: "YYC", name: "Calgary, Canada", airlineCodes: ["DL"], shortName: "Calgary" },
    { code: "CUN", name: "Cancun, Mexico", airlineCodes: ["DL", "SY"], shortName: "Cancun" },
    { code: "CID", name: "Cedar Rapids, Iowa", airlineCodes: ["DL"], shortName: "Cedar Rapids" },
    { code: "CWA", name: "Central Wisconsin (Wausau & Stevens Point)", airlineCodes: ["DL"], shortName: "Central WI" },
    { code: "CHS", name: "Charleston, South Carolina", airlineCodes: ["DL"], shortName: "Charleston" },
    { code: "CLT", name: "Charlotte, North Carolina", airlineCodes: ["DL", "AA"], shortName: "Charlotte" },
    { code: "MDW", name: "Chicago, Illinois: Midway", airlineCodes: ["DL", "WN"], shortName: "Chi Midway" },
    { code: "ORD", name: "Chicago, Illinois: O'Hare", airlineCodes: ["DL", "AA", "SY", "UA"], shortName: "Chi O'Hare" },
    { code: "CVG", name: "Cincinnati, Ohio", airlineCodes: ["DL"], shortName: "Cincinnati" },
    { code: "CLE", name: "Cleveland, Ohio", airlineCodes: ["DL"], shortName: "Cleveland" },
    { code: "COS", name: "Colorado Springs, Colorado", airlineCodes: ["DL"], shortName: "CO Springs" },
    { code: "CMH", name: "Columbus, Ohio", airlineCodes: ["DL"], shortName: "Columbus" },
    { code: "DAL", name: "Dallas, Texas: Love", airlineCodes: ["DL", "WN"], shortName: "Dallas Love" },
    { code: "DFW", name: "Dallas–Fort Worth, Texas", airlineCodes: ["DL", "AA", "F9"], shortName: "Dallas DFW" },
    { code: "DEN", name: "Denver, Colorado", airlineCodes: ["DL", "F9", "SY", "UA", "WN"], shortName: "Denver" },
    { code: "DSM", name: "Des Moines, Iowa", airlineCodes: ["DL"], shortName: "Des Moines" },
    { code: "DTW", name: "Detroit, Michigan", airlineCodes: ["DL"], shortName: "Detroit" },
    { code: "DUB", name: "Dublin, Ireland", airlineCodes: ["DL", "EI"], shortName: "Dublin" },
    { code: "DLH", name: "Duluth, Minnesota", airlineCodes: ["DL"], shortName: "Duluth" },
    { code: "EAU", name: "Eau Claire, Wisconsin", airlineCodes: ["SY"], shortName: "Eue Claire" },
    { code: "YEG", name: "Edmonton, Canada", airlineCodes: ["WS"], shortName: "Edmonton" },
    { code: "ESC", name: "Escanaba, Michigan", airlineCodes: ["DL"], shortName: "Escanaba" },
    { code: "FAI", name: "Fairbanks, Alaska", airlineCodes: ["DL"], shortName: "Fairbanks" },
    { code: "FAR", name: "Fargo, North Dakota", airlineCodes: ["DL"], shortName: "Fargo" },
    { code: "XNA", name: "Fayetteville, North Carolina", airlineCodes: ["DL"], shortName: "Fayetteville" },
    { code: "FLL", name: "Fort Lauderdale, Florida", airlineCodes: ["DL"], shortName: "Fort Lauderdale" },
    { code: "RSW", name: "Fort Myers, Florida", airlineCodes: ["DL"], shortName: "Fort Myers" },
    { code: "VPS", name: "Fort Walton Beach / Destin, Florida", airlineCodes: ["DL"], shortName: "Fort Walton Bch" },
    { code: "FWA", name: "Fort Wayne, Indiana", airlineCodes: ["DL"], shortName: "Fort Wayne" },
    { code: "FRA", name: "Frankfurt, Germany", airlineCodes: ["DE", "LH"], shortName: "Frankfurt" },
    { code: "GFK", name: "Grand Forks, North Dakota", airlineCodes: ["DL"], shortName: "Grand Forks" },
    { code: "GRR", name: "Grand Rapids, Michigan", airlineCodes: ["DL"], shortName: "Grand Rapids" },
    { code: "GTF", name: "Great Fall, Montana", airlineCodes: ["DL"], shortName: "Great Falls" },
    { code: "GRB", name: "Green Bay, Wisconsin", airlineCodes: ["DL"], shortName: "Green Bay" },
    { code: "GPT", name: "Gulfport / Biloxi, Mississippi", airlineCodes: ["DL"], shortName: "Gulfport" },
    { code: "HRL", name: "Harlingen (South Padre), Texas", airlineCodes: ["DL"], shortName: "South Padre" },
    { code: "BDL", name: "Hartford, Connecticut", airlineCodes: ["DL"], shortName: "Hartford" },
    { code: "HIB", name: "Hibbing, Minnesota", airlineCodes: ["DL"], shortName: "Hibbing" },
    { code: "HNL", name: "Honolulu, Hawaii", airlineCodes: ["DL"], shortName: "Honolulu" },
    { code: "IAH", name: "Houston, Texas: Bush", airlineCodes: ["DL", "UA"], shortName: "Houston Bush Intl" },
    { code: "HOU", name: "Houston, Texas: Hobby", airlineCodes: ["SY"], shortName: "Houston Hobby" },
    { code: "IND", name: "Indianapolis, Indiana", airlineCodes: ["DL"], shortName: "Indianapolis" },
    { code: "INL", name: "International Falls, Minnesota", airlineCodes: ["DL"], shortName: "International Falls" },
    { code: "IMT", name: "Iron Mountain, Michigan", airlineCodes: ["DL"], shortName: "Iron Mountain" },
    { code: "IWD", name: "Ironwood (Gogebic County), Michigan", airlineCodes: ["DL"], shortName: "Ironwood" },
    { code: "JAC", name: "Jackson Hole, Wyoming", airlineCodes: ["DL"], shortName: "Jackson Hole" },
    { code: "JAX", name: "Jacksonville, Florida", airlineCodes: ["DL"], shortName: "Jacksonville" },
    { code: "FCA", name: "Kalispell, Montana", airlineCodes: ["DL"], shortName: "Kalispell" },
    { code: "MCI", name: "Kansas City, Missouri", airlineCodes: ["DL", "WN"], shortName: "Kansas City" },
    { code: "TYS", name: "Knoxville, Tennessee", airlineCodes: ["G4"], shortName: "Knoxville" },
    { code: "LAS", name: "Las Vegas, Nevada", airlineCodes: ["DL", "NK", "SY", "WN"], shortName: "Las Vegas" },
    { code: "LIR", name: "Liberia, Costa Rica", airlineCodes: ["DL"], shortName: "Liberia (CR)" },
    { code: "LHR", name: "London, United Kingdom", airlineCodes: ["DL"], shortName: "London" },
    { code: "LAX", name: "Los Angeles, California", airlineCodes: ["DL", "SY"], shortName: "Los Angl LAX" },
    { code: "SJD", name: "Los Cabos, Mexico", airlineCodes: ["DL"], shortName: "Los Cabos" },
    { code: "SDF", name: "Louisville, Kentucky", airlineCodes: ["DL"], shortName: "Louisville" },
    { code: "LBB", name: "Lubbock, Texas", airlineCodes: ["DL"], shortName: "Lubbock" },
    { code: "MSN", name: "Madison, Wisconsin", airlineCodes: ["DL"], shortName: "Madison" },
    { code: "MEM", name: "Memphis, Tennessee", airlineCodes: ["DL"], shortName: "Memphis" },
    { code: "MEX", name: "Mexico City, Mexico", airlineCodes: ["DL"], shortName: "Mexico City" },
    { code: "MIA", name: "Miami, Florida", airlineCodes: ["DL", "AA", "SY"], shortName: "Miami" },
    { code: "MKE", name: "Milwaukee, Wisconsin", airlineCodes: ["DL"], shortName: "Milwaukee" },
    { code: "MOT", name: "Minot, North Dakota", airlineCodes: ["DL"], shortName: "Minot" },
    { code: "MSO", name: "Missoula, Montana", airlineCodes: ["DL"], shortName: "Missoula" },
    { code: "MBJ", name: "Montego Bay, Jamaica", airlineCodes: ["DL"], shortName: "Montego Bay" },
    { code: "YUL", name: "Montreal, Canada", airlineCodes: ["DL", "SY", "AC"], shortName: "Montreal" },
    { code: "MYR", name: "Myrtle Beach, South Carolina", airlineCodes: ["DL"], shortName: "Myrtle Beach" },
    { code: "BNA", name: "Nashville, Tennessee", airlineCodes: ["DL", "SY", "WN"], shortName: "Nashville" },
    { code: "MSY", name: "New Orleans, Louisiana", airlineCodes: ["DL", "SY"], shortName: "New Orleans" },
    { code: "JFK", name: "New York, New York", airlineCodes: ["DL", "SY"], shortName: "New York JFK" },
    { code: "LGA", name: "New York, New York", airlineCodes: ["DL", "AA"], shortName: "New York LGA" },
    { code: "EWR", name: "Newark, New Jersey", airlineCodes: ["DL", "UA"], shortName: "Newark" },
    { code: "ORF", name: "Norfolk, Virginia", airlineCodes: ["DL"], shortName: "Norfolk" },
    { code: "OAK", name: "Oakland, California", airlineCodes: ["SY"], shortName: "Oakland" },
    { code: "OKC", name: "Oklahoma City, Oklahoma", airlineCodes: ["DL"], shortName: "Oklahoma City" },
    { code: "OMA", name: "Omaha, Nebraska", airlineCodes: ["DL"], shortName: "Omaha" },
    { code: "ONT", name: "Ontario, Canada", airlineCodes: ["DL"], shortName: "Ontario" },
    { code: "MCO", name: "Orlando, Florida", airlineCodes: ["DL", "F9", "SY", "WN"], shortName: "Orlando" },
    { code: "PSP", name: "Palm Springs, California", airlineCodes: ["DL"], shortName: "Palm Springs" },
    { code: "CDG", name: "Paris, France", airlineCodes: ["DL", "AF"], shortName: "Paris" },
    { code: "PSC", name: "Pasco, Washington", airlineCodes: ["DL"], shortName: "Pasco" },
    { code: "PHL", name: "Philadelphia, Pennsylvania", airlineCodes: ["DL", "AA", "SY"], shortName: "Philadelphia" },
    { code: "PHX", name: "Phoenix, Arizona", airlineCodes: ["DL", "AA", "WN"], shortName: "Phoenix Sky H" },
    { code: "AZA", name: "Phoenix-Mesa, Arizona", airlineCodes: ["G4"], shortName: "Phoenix Mesa" },
    { code: "PIT", name: "Pittsburgh, Pennsylvania", airlineCodes: ["DL"], shortName: "Pittsburgh" },
    { code: "PWM", name: "Portland, Maine", airlineCodes: ["DL"], shortName: "Portland (ME)" },
    { code: "PDX", name: "Portland, Oregon", airlineCodes: ["DL", "AS", "SY"], shortName: "Portland (OR)" },
    { code: "PVD", name: "Providence, Rhode Island", airlineCodes: ["DL"], shortName: "Providence" },
    { code: "PVR", name: "Puerto Vallarta, Mexico", airlineCodes: ["DL"], shortName: "Puerto Vallarta" },
    { code: "PUJ", name: "Punta Cana, Dominican Republic", airlineCodes: ["DL"], shortName: "Punta Cana (DR)" },
    { code: "PGD", name: "Punta Gorda, Florida", airlineCodes: ["DL"], shortName: "Punta Gorda" },
    { code: "RDU", name: "Raleigh-Durham, North Carolina", airlineCodes: ["DL"], shortName: "Raleigh-Durham" },
    { code: "RAP", name: "Rapid City, South Dakota", airlineCodes: ["DL"], shortName: "Rapid City" },
    { code: "YQR", name: "Regina, Canada", airlineCodes: ["WS"], shortName: "Regina" },
    { code: "RNO", name: "Reno, Nevada", airlineCodes: ["DL"], shortName: "Reno" },
    { code: "KEF", name: "Reykjavik, Iceland", airlineCodes: ["DL", "FI"], shortName: "Reykjavik (IS)" },
    { code: "RHI", name: "Rhinelander, Wisconsin", airlineCodes: ["DL"], shortName: "Rhinelander" },
    { code: "RIC", name: "Richmond, Virginia", airlineCodes: ["DL"], shortName: "Richmond" },
    { code: "RST", name: "Rochester, Minnesota", airlineCodes: ["DL"], shortName: "Rochester (MN)" },
    { code: "ROC", name: "Rochester, New York", airlineCodes: ["DL"], shortName: "Rochester (NY)" },
    { code: "ROW", name: "Roswell, New Mexico", airlineCodes: ["DL"], shortName: "Roswell" },
    { code: "SMF", name: "Sacramento, California", airlineCodes: ["DL"], shortName: "Sacramento" },
    { code: "SLC", name: "Salt Lake City, Utah", airlineCodes: ["DL"], shortName: "Salt Lake City" },
    { code: "SAT", name: "San Antonio, Texas", airlineCodes: ["DL"], shortName: "San Antonio" },
    { code: "SAN", name: "San Diego, California", airlineCodes: ["DL", "SY"], shortName: "San Diego" },
    { code: "SFO", name: "San Francisco, California", airlineCodes: ["DL", "SY", "UA"], shortName: "San Francisco" },
    { code: "SJC", name: "San Jose, California", airlineCodes: ["DL"], shortName: "San Jose (CA)" },
    { code: "SJU", name: "San Juan / Carolina, Puerto Rico", airlineCodes: ["DL"], shortName: "San Juan (PR)" },
    { code: "SNA", name: "Santa Ana (Orange County), California", airlineCodes: ["DL"], shortName: "Los Angl John Wayne" },
    { code: "SRQ", name: "Sarasota, Flordia", airlineCodes: ["DL"], shortName: "Sarasota" },
    { code: "YXE", name: "Saskatoon, Canada", airlineCodes: ["DL"], shortName: "Saskatoon" },
    { code: "CIU", name: "Sault Ste. Marie, Michigan", airlineCodes: ["DL"], shortName: "Sault Ste Marie" },
    { code: "SAV", name: "Savannah, Georgia", airlineCodes: ["DL"], shortName: "Savannah" },
    { code: "SEA", name: "Seattle / Tacoma, Washington", airlineCodes: ["DL", "AS", "SY"], shortName: "Seattle" },
    { code: "ICN", name: "Seoul, South Korea", airlineCodes: ["DL"], shortName: "Seoul" },
    { code: "FSD", name: "Sioux Falls, South Dakota", airlineCodes: ["DL"], shortName: "Sioux Falls" },
    { code: "SBN", name: "South Bend, Indiana", airlineCodes: ["DL"], shortName: "South Bend" },
    { code: "GEG", name: "Spokane, Washington", airlineCodes: ["DL"], shortName: "Spokane" },
    { code: "STL", name: "St. Louis, Missouri", airlineCodes: ["DL", "WN"], shortName: "St Louis" },
    { code: "PIE", name: "St. Petersburg, Florida", airlineCodes: ["DL"], shortName: "St Petersburg" },
    { code: "SYR", name: "Syracuse, New York", airlineCodes: ["DL"], shortName: "Syracuse" },
    { code: "TPA", name: "Tampa, Florida", airlineCodes: ["DL"], shortName: "Tampa" },
    { code: "TVF", name: "Thief River Falls, Minnesota", airlineCodes: ["DL"], shortName: "Thief River Falls" },
    { code: "HND", name: "Tokyo, Japan", airlineCodes: ["DL"], shortName: "Tokyo" },
    { code: "YYZ", name: "Toronto, Canada", airlineCodes: ["DL", "AC"], shortName: "Toronto" },
    { code: "TVC", name: "Traverse City, Michigan", airlineCodes: ["DL"], shortName: "Traverse City" },
    { code: "TUS", name: "Tucson, Arizona", airlineCodes: ["DL"], shortName: "Tucson" },
    { code: "YVR", name: "Vancouver, Canada", airlineCodes: ["DL"], shortName: "Vancouver" },
    { code: "IAD", name: "Washington, D.C.: Dulles", airlineCodes: ["DL", "SY", "UA"], shortName: "Wash Dulles Intl" },
    { code: "DCA", name: "Washington, D.C.: National", airlineCodes: ["DL", "AA"], shortName: "Wash Reagan Natl" },
    { code: "PBI", name: "West Palm Beach, Florida", airlineCodes: ["DL"], shortName: "West Palm Beach" },
    { code: "ICT", name: "Wichita, Kansas", airlineCodes: ["DL"], shortName: "Wichita" },
    { code: "XWA", name: "Williston, North Dakota", airlineCodes: ["DL"], shortName: "Williston" },
    { code: "YWG", name: "Winnipeg, Canada", airlineCodes: ["DL"], shortName: "Winnipeg" },

]


class AirportAirline {
    constructor(code) {
        this.code = code;
    
        this.departureLink;
        this.arrivalLink;
    } 
}   

class Airport {
    constructor(code, airlineCodes, name, shortName) {
        this.name = name;
        this.code = code;
        this.airlineCodes = airlineCodes;
        this.shortName = shortName? shortName : name;

        // this.airlineLinks = [];
        this.airlines = [];
        this.airportDiv;
    }
}

// Convert static airport data in this file into a sorted array of airport objects
const airports = airportData.map(airport => new Airport(airport.code, airport.airlineCodes, airport.name, airport.shortName));
airports.sort((a, b) => a.shortName.localeCompare(b.shortName));


// From the static HTML page, get the document container for all flights
const airportListDiv = document.getElementById("airport-list");


// Cycle through array of airports and create HTML elements for each one

airports.forEach((airport) => {

    const airportDiv = document.createElement("div");
    airport.airportDiv = airportDiv; // Store the overall <DIV> for the airport for subsequent hiding or unhiding
    airportDiv.id = airport.shortName;
    airportDiv.setAttribute("class", "airport-item");
    airportListDiv.appendChild(airportDiv);

    const airportNameDiv = document.createElement("div");
    airportNameDiv.setAttribute("class", "airport-name");
    airportNameDiv.textContent = airport.name + "\u00A0\u00A0\u00A0" + airport.code;
    airportDiv.appendChild(airportNameDiv);

    airport.airlineCodes.forEach((airlineCode) => {
        airport.airlines.push(new AirportAirline(airlineCode));
    });

    const airportLinkSetDiv = document.createElement("div");
    airportLinkSetDiv.setAttribute("class", "airport-link-set");
    airportDiv.appendChild(airportLinkSetDiv);

    //const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    ["departures", "arrivals"].forEach((direction) => {
        let airportLinksDiv = document.createElement("div");
        airportLinksDiv.setAttribute("class", `airport-${direction}-links`);
        airportLinkSetDiv.appendChild(airportLinksDiv);
        
        const theLabel = document.createElement('span');
        // theLabel.textContent = direction.charAt(0).toUpperCase() + direction.slice(1) + ':';
        airportLinksDiv.appendChild(theLabel);
        
        airport.airlines.forEach((airline) => {

            const airportLink = document.createElement("a");
            if (direction == "departures") {
                airportLink.href = GOOGLE_HREF + airline.code + "+MSP+" + airport.code;
                airline.departureLink = airportLink;
            }
            else {
                airportLink.href = GOOGLE_HREF + airline.code + "+" + airport.code + "+MSP";
                airline.arrivalLink = airportLink;
            }
            airportLink.textContent = airline.code;
            airportLink.target = "_blank";
            airportLink.rel = "noopener noreferrer";
            airportLinksDiv.appendChild(airportLink);

        })

    });

})

// Set up place to store up to ten keyboard-activated links
// airportLinkShortcuts = [];

// Get the input field and output paragraph
const inputField = document.getElementById("filterInput");
let quickAirlines = [];
// Add an event listener for the 'input' event
inputField.addEventListener("input", function (event) {
    let airportDiv;
    // if (event.target.value == "") {
    //     airports.forEach((airport) => {
    //         airportDiv = document.getElementById(airport.shortName);
    //         airportDiv.style.display = 'flex';
    //     });   
    //     return;       
    // }

    let lowerCaseInput = event.target.value.toLowerCase();
    quickAirlines = [];
    airports.forEach((airport) => {
        airportDiv = airport.airportDiv;
        if ((airport.code + '|' + airport.name + '|' + airport.shortName).toLowerCase().includes(lowerCaseInput))  {
            airportDiv.style.display = 'flex';
            airport.airlines.forEach((airline) => {
                if (quickAirlines.length < 10 && lowerCaseInput.length > 0) {
                    airline.departureLink.textContent = quickAirlines.length + '-' + airline.code;
                    airline.arrivalLink.textContent =   quickAirlines.length + '-' + airline.code;
                    quickAirlines.push(airline);
                }
                else {
                    airline.departureLink.textContent = airline.code;
                    airline.arrivalLink.textContent = airline.code;

                }
            });
        }
        else {
            airportDiv.style.display = 'none';
        }
    });
    
    

});

// Event listener for button click

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
  // Check the current state and toggle
  if (toggleButton.textContent === 'Departures') {
    toggleButton.textContent = 'Arrivals';
    toggleButton.classList.add('arrivals'); // Change style
  } else {
    toggleButton.textContent = 'Departures';
    toggleButton.classList.remove('arrivals'); // Revert style
  }

  let departureLinks = document.querySelectorAll('.airport-departures-links');
  departureLinks.forEach((element) => {
      if (toggleButton.textContent == 'Arrivals') {
          element.style.display = 'none';
      }
      else {
          element.style.display = 'flex';
      }
  });

    let arrivalLinks = document.querySelectorAll('.airport-arrivals-links');
    arrivalLinks.forEach((element) => {
        if (toggleButton.textContent == 'Departures') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'flex';
        }
    });
    
});

// Cause any digit keypress to follow one of the numbered quick links (Enter = 0)
document.addEventListener('keydown', (event) => {
    const digit = event.key === 'Enter' ? 0 : parseInt(event.key, 10);
    if (isNaN(digit)) {
        return;
    }

    event.preventDefault();
    if (digit >= quickAirlines.length) {
        return;
    }
    
    window.open (toggleButton.textContent === 'Departures' ? quickAirlines[digit].departureLink.href : quickAirlines[digit].arrivalLink.href);
  
  });



