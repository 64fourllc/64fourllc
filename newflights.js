"use strict";


const airportData = [
    { code: "ABR", name: "Aberdeen, South Dakota", airlines: ["DL"], shortName: "Aberdeen" },
    { code: "ABQ", name: "Albuquerque, New Mexico", airlines: ["DL"], shortName: "Albuquerque" },
    { code: "AMS", name: "Amsterdam, Netherlands", airlines: ["DL", "KL"], shortName: "Amsterdam" },
    { code: "ANC", name: "Anchorage, Alaska", airlines: ["DL"], shortName: "Anchorage" },
    { code: "ATW", name: "Appleton, Wisconsin", airlines: ["DL"], shortName: "Appleton" },
    { code: "AVL", name: "Asheville, North Carolina", airlines: ["DL", "G4"], shortName: "Asheville" },
    { code: "ATL", name: "Atlanta, Georgia", airlines: ["DL", "F9", "NK"], shortName: "Atlanta" },
    { code: "AUS", name: "Austin, Texas", airlines: ["DL", "WN"], shortName: "Austin" },
    { code: "BWI", name: "Baltimore, Maryland", airlines: ["DL", "WN"], shortName: "Baltimore" },
    { code: "BJI", name: "Bemidji, Minnesota", airlines: ["DL"], shortName: "Bemidji" },
    { code: "BIL", name: "Billings, Montana", airlines: ["DL"], shortName: "Billings" },
    { code: "BIS", name: "Bismarck, North Dakota", airlines: ["DL"], shortName: "Bismarck" },
    { code: "BOI", name: "Boise, Idaho", airlines: ["DL"], shortName: "Boise" },
    { code: "BOS", name: "Boston, Massachusetts", airlines: ["DL", "B6", "SY"], shortName: "Boston" },
    { code: "BZN", name: "Bozeman, Montana", airlines: ["DL"], shortName: "Bozeman" },
    { code: "BRD", name: "Brainerd, Minnesota", airlines: ["DL"], shortName: "Brainerd" },
    { code: "BKG", name: "Branson, Missouri", airlines: ["DL"], shortName: "Branson" },
    { code: "BUF", name: "Buffalo, New York", airlines: ["DL"], shortName: "Buffalo" },
    { code: "BTV", name: "Burlington, Vermont", airlines: ["DL"], shortName: "Burlington" },
    { code: "YYC", name: "Calgary, Canada", airlines: ["DL"], shortName: "Calgary" },
    { code: "CUN", name: "Cancun, Mexico", airlines: ["DL", "SY"], shortName: "Cancun" },
    { code: "CID", name: "Cedar Rapids, Iowa", airlines: ["DL"], shortName: "Cedar Rapids" },
    { code: "CWA", name: "Central Wisconsin (Wausau & Stevens Point)", airlines: ["DL"], shortName: "Central WI" },
    { code: "CHS", name: "Charleston, South Carolina", airlines: ["DL"], shortName: "Charleston" },
    { code: "CLT", name: "Charlotte, North Carolina", airlines: ["DL", "AA"], shortName: "Charlotte" },
    { code: "MDW", name: "Chicago, Illinois: Midway", airlines: ["DL", "WN"], shortName: "Chi Midway" },
    { code: "ORD", name: "Chicago, Illinois: O'Hare", airlines: ["DL", "AA", "SY", "UA"], shortName: "Chi O'Hare" },
    { code: "CVG", name: "Cincinnati, Ohio", airlines: ["DL"], shortName: "Cincinnati" },
    { code: "CLE", name: "Cleveland, Ohio", airlines: ["DL"], shortName: "Cleveland" },
    { code: "COS", name: "Colorado Springs, Colorado", airlines: ["DL"], shortName: "CO Springs" },
    { code: "CMH", name: "Columbus, Ohio", airlines: ["DL"], shortName: "Columbus" },
    { code: "DAL", name: "Dallas, Texas: Love", airlines: ["DL", "WN"], shortName: "Dallas Love" },
    { code: "DFW", name: "Dallas–Fort Worth, Texas", airlines: ["DL", "AA", "F9"], shortName: "Dallas DFW" },
    { code: "DEN", name: "Denver, Colorado", airlines: ["DL", "F9", "SY", "UA", "WN"], shortName: "Denver" },
    { code: "DSM", name: "Des Moines, Iowa", airlines: ["DL"], shortName: "Des Moines" },
    { code: "DTW", name: "Detroit, Michigan", airlines: ["DL"], shortName: "Detroit" },
    { code: "DUB", name: "Dublin, Ireland", airlines: ["DL", "EI"], shortName: "Dublin" },
    { code: "DLH", name: "Duluth, Minnesota", airlines: ["DL"], shortName: "Duluth" },
    { code: "EAU", name: "Eau Claire, Wisconsin", airlines: ["SY"], shortName: "Eue Claire" },
    { code: "YEG", name: "Edmonton, Canada", airlines: ["WS"], shortName: "Edmonton" },
    { code: "ESC", name: "Escanaba, Michigan", airlines: ["DL"], shortName: "Escanaba" },
    { code: "FAI", name: "Fairbanks, Alaska", airlines: ["DL"], shortName: "Fairbanks" },
    { code: "FAR", name: "Fargo, North Dakota", airlines: ["DL"], shortName: "Fargo" },
    { code: "XNA", name: "Fayetteville, North Carolina", airlines: ["DL"], shortName: "Fayetteville" },
    { code: "FLL", name: "Fort Lauderdale, Florida", airlines: ["DL"], shortName: "Fort Lauderdale" },
    { code: "RSW", name: "Fort Myers, Florida", airlines: ["DL"], shortName: "Fort Myers" },
    { code: "VPS", name: "Fort Walton Beach / Destin, Florida", airlines: ["DL"], shortName: "Fort Walton Bch" },
    { code: "FWA", name: "Fort Wayne, Indiana", airlines: ["DL"], shortName: "Fort Wayne" },
    { code: "FRA", name: "Frankfurt, Germany", airlines: ["DE", "LH"], shortName: "Frankfurt" },
    { code: "GFK", name: "Grand Forks, North Dakota", airlines: ["DL"], shortName: "Grand Forks" },
    { code: "GRR", name: "Grand Rapids, Michigan", airlines: ["DL"], shortName: "Grand Rapids" },
    { code: "GTF", name: "Great Fall, Montana", airlines: ["DL"], shortName: "Great Falls" },
    { code: "GRB", name: "Green Bay, Wisconsin", airlines: ["DL"], shortName: "Green Bay" },
    { code: "GPT", name: "Gulfport / Biloxi, Mississippi", airlines: ["DL"], shortName: "Gulfport" },
    { code: "HRL", name: "Harlingen (South Padre), Texas", airlines: ["DL"], shortName: "South Padre" },
    { code: "BDL", name: "Hartford, Connecticut", airlines: ["DL"], shortName: "Hartford" },
    { code: "HIB", name: "Hibbing, Minnesota", airlines: ["DL"], shortName: "Hibbing" },
    { code: "HNL", name: "Honolulu, Hawaii", airlines: ["DL"], shortName: "Honolulu" },
    { code: "IAH", name: "Houston, Texas: Bush", airlines: ["DL", "UA"], shortName: "Houston Bush Intl" },
    { code: "HOU", name: "Houston, Texas: Hobby", airlines: ["SY"], shortName: "Houston Hobby" },
    { code: "IND", name: "Indianapolis, Indiana", airlines: ["DL"], shortName: "Indianapolis" },
    { code: "INL", name: "International Falls, Minnesota", airlines: ["DL"], shortName: "International Falls" },
    { code: "IMT", name: "Iron Mountain, Michigan", airlines: ["DL"], shortName: "Iron Mountain" },
    { code: "IWD", name: "Ironwood (Gogebic County), Michigan", airlines: ["DL"], shortName: "Ironwood" },
    { code: "JAC", name: "Jackson Hole, Wyoming", airlines: ["DL"], shortName: "Jackson Hole" },
    { code: "JAX", name: "Jacksonville, Florida", airlines: ["DL"], shortName: "Jacksonville" },
    { code: "FCA", name: "Kalispell, Montana", airlines: ["DL"], shortName: "Kalispell" },
    { code: "MCI", name: "Kansas City, Missouri", airlines: ["DL", "WN"], shortName: "Kansas City" },
    { code: "TYS", name: "Knoxville, Tennessee", airlines: ["G4"], shortName: "Knoxville" },
    { code: "LAS", name: "Las Vegas, Nevada", airlines: ["DL", "NK", "SY", "WN"], shortName: "Las Vegas" },
    { code: "LIR", name: "Liberia, Costa Rica", airlines: ["DL"], shortName: "Liberia (CR)" },
    { code: "LHR", name: "London, United Kingdom", airlines: ["DL"], shortName: "London" },
    { code: "LAX", name: "Los Angeles, California", airlines: ["DL", "SY"], shortName: "Los Angl LAX" },
    { code: "SJD", name: "Los Cabos, Mexico", airlines: ["DL"], shortName: "Los Cabos" },
    { code: "SDF", name: "Louisville, Kentucky", airlines: ["DL"], shortName: "Louisville" },
    { code: "LBB", name: "Lubbock, Texas", airlines: ["DL"], shortName: "Lubbock" },
    { code: "MSN", name: "Madison, Wisconsin", airlines: ["DL"], shortName: "Madison" },
    { code: "MEM", name: "Memphis, Tennessee", airlines: ["DL"], shortName: "Memphis" },
    { code: "MEX", name: "Mexico City, Mexico", airlines: ["DL"], shortName: "Mexico City" },
    { code: "MIA", name: "Miami, Florida", airlines: ["DL", "AA", "SY"], shortName: "Miami" },
    { code: "MKE", name: "Milwaukee, Wisconsin", airlines: ["DL"], shortName: "Milwaukee" },
    { code: "MOT", name: "Minot, North Dakota", airlines: ["DL"], shortName: "Minot" },
    { code: "MSO", name: "Missoula, Montana", airlines: ["DL"], shortName: "Missoula" },
    { code: "MBJ", name: "Montego Bay, Jamaica", airlines: ["DL"], shortName: "Montego Bay" },
    { code: "YUL", name: "Montreal, Canada", airlines: ["DL", "SY", "AC"], shortName: "Montreal" },
    { code: "MYR", name: "Myrtle Beach, South Carolina", airlines: ["DL"], shortName: "Myrtle Beach" },
    { code: "BNA", name: "Nashville, Tennessee", airlines: ["DL", "SY", "WN"], shortName: "Nashville" },
    { code: "MSY", name: "New Orleans, Louisiana", airlines: ["DL", "SY"], shortName: "New Orleans" },
    { code: "JFK", name: "New York, New York", airlines: ["DL", "SY"], shortName: "New York JFK" },
    { code: "LGA", name: "New York, New York", airlines: ["DL", "AA"], shortName: "New York LGA" },
    { code: "EWR", name: "Newark, New Jersey", airlines: ["DL", "UA"], shortName: "Newark" },
    { code: "ORF", name: "Norfolk, Virginia", airlines: ["DL"], shortName: "Norfolk" },
    { code: "OAK", name: "Oakland, California", airlines: ["SY"], shortName: "Oakland" },
    { code: "OKC", name: "Oklahoma City, Oklahoma", airlines: ["DL"], shortName: "Oklahoma City" },
    { code: "OMA", name: "Omaha, Nebraska", airlines: ["DL"], shortName: "Omaha" },
    { code: "ONT", name: "Ontario, Canada", airlines: ["DL"], shortName: "Ontario" },
    { code: "MCO", name: "Orlando, Florida", airlines: ["DL", "F9", "SY", "WN"], shortName: "Orlando" },
    { code: "PSP", name: "Palm Springs, California", airlines: ["DL"], shortName: "Palm Springs" },
    { code: "CDG", name: "Paris, France", airlines: ["DL", "AF"], shortName: "Paris" },
    { code: "PSC", name: "Pasco, Washington", airlines: ["DL"], shortName: "Pasco" },
    { code: "PHL", name: "Philadelphia, Pennsylvania", airlines: ["DL", "AA", "SY"], shortName: "Philadelphia" },
    { code: "PHX", name: "Phoenix, Arizona", airlines: ["DL", "AA", "WN"], shortName: "Phoenix Sky H" },
    { code: "AZA", name: "Phoenix-Mesa, Arizona", airlines: ["G4"], shortName: "Phoenix Mesa" },
    { code: "PIT", name: "Pittsburgh, Pennsylvania", airlines: ["DL"], shortName: "Pittsburgh" },
    { code: "PWM", name: "Portland, Maine", airlines: ["DL"], shortName: "Portland (ME)" },
    { code: "PDX", name: "Portland, Oregon", airlines: ["DL", "AS", "SY"], shortName: "Portland (OR)" },
    { code: "PVD", name: "Providence, Rhode Island", airlines: ["DL"], shortName: "Providence" },
    { code: "PVR", name: "Puerto Vallarta, Mexico", airlines: ["DL"], shortName: "Puerto Vallarta" },
    { code: "PUJ", name: "Punta Cana, Dominican Republic", airlines: ["DL"], shortName: "Punta Cana (DR)" },
    { code: "PGD", name: "Punta Gorda, Florida", airlines: ["DL"], shortName: "Punta Gorda" },
    { code: "RDU", name: "Raleigh-Durham, North Carolina", airlines: ["DL"], shortName: "Raleigh-Durham" },
    { code: "RAP", name: "Rapid City, South Dakota", airlines: ["DL"], shortName: "Rapid City" },
    { code: "YQR", name: "Regina, Canada", airlines: ["WS"], shortName: "Regina" },
    { code: "RNO", name: "Reno, Nevada", airlines: ["DL"], shortName: "Reno" },
    { code: "KEF", name: "Reykjavik, Iceland", airlines: ["DL", "FI"], shortName: "Reykjavik (IS)" },
    { code: "RHI", name: "Rhinelander, Wisconsin", airlines: ["DL"], shortName: "Rhinelander" },
    { code: "RIC", name: "Richmond, Virginia", airlines: ["DL"], shortName: "Richmond" },
    { code: "RST", name: "Rochester, Minnesota", airlines: ["DL"], shortName: "Rochester (MN)" },
    { code: "ROC", name: "Rochester, New York", airlines: ["DL"], shortName: "Rochester (NY)" },
    { code: "ROW", name: "Roswell, New Mexico", airlines: ["DL"], shortName: "Roswell" },
    { code: "SMF", name: "Sacramento, California", airlines: ["DL"], shortName: "Sacramento" },
    { code: "SLC", name: "Salt Lake City, Utah", airlines: ["DL"], shortName: "Salt Lake City" },
    { code: "SAT", name: "San Antonio, Texas", airlines: ["DL"], shortName: "San Antonio" },
    { code: "SAN", name: "San Diego, California", airlines: ["DL", "SY"], shortName: "San Diego" },
    { code: "SFO", name: "San Francisco, California", airlines: ["DL", "SY", "UA"], shortName: "San Francisco" },
    { code: "SJC", name: "San Jose, California", airlines: ["DL"], shortName: "San Jose (CA)" },
    { code: "SJU", name: "San Juan / Carolina, Puerto Rico", airlines: ["DL"], shortName: "San Juan (PR)" },
    { code: "SNA", name: "Santa Ana (Orange County), California", airlines: ["DL"], shortName: "Los Angl John Wayne" },
    { code: "SRQ", name: "Sarasota, Flordia", airlines: ["DL"], shortName: "Sarasota" },
    { code: "YXE", name: "Saskatoon, Canada", airlines: ["DL"], shortName: "Saskatoon" },
    { code: "CIU", name: "Sault Ste. Marie, Michigan", airlines: ["DL"], shortName: "Sault Ste Marie" },
    { code: "SAV", name: "Savannah, Georgia", airlines: ["DL"], shortName: "Savannah" },
    { code: "SEA", name: "Seattle / Tacoma, Washington", airlines: ["DL", "AS", "SY"], shortName: "Seattle" },
    { code: "ICN", name: "Seoul, South Korea", airlines: ["DL"], shortName: "Seoul" },
    { code: "FSD", name: "Sioux Falls, South Dakota", airlines: ["DL"], shortName: "Sioux Falls" },
    { code: "SBN", name: "South Bend, Indiana", airlines: ["DL"], shortName: "South Bend" },
    { code: "GEG", name: "Spokane, Washington", airlines: ["DL"], shortName: "Spokane" },
    { code: "STL", name: "St. Louis, Missouri", airlines: ["DL", "WN"], shortName: "St Louis" },
    { code: "PIE", name: "St. Petersburg, Florida", airlines: ["DL"], shortName: "St Petersburg" },
    { code: "SYR", name: "Syracuse, New York", airlines: ["DL"], shortName: "Syracuse" },
    { code: "TPA", name: "Tampa, Florida", airlines: ["DL"], shortName: "Tampa" },
    { code: "TVF", name: "Thief River Falls, Minnesota", airlines: ["DL"], shortName: "Thief River Falls" },
    { code: "HND", name: "Tokyo, Japan", airlines: ["DL"], shortName: "Tokyo" },
    { code: "YYZ", name: "Toronto, Canada", airlines: ["DL", "AC"], shortName: "Toronto" },
    { code: "TVC", name: "Traverse City, Michigan", airlines: ["DL"], shortName: "Traverse City" },
    { code: "TUS", name: "Tucson, Arizona", airlines: ["DL"], shortName: "Tucson" },
    { code: "YVR", name: "Vancouver, Canada", airlines: ["DL"], shortName: "Vancouver" },
    { code: "IAD", name: "Washington, D.C.: Dulles", airlines: ["DL", "SY", "UA"], shortName: "Wash Dulles Intl" },
    { code: "DCA", name: "Washington, D.C.: National", airlines: ["DL", "AA"], shortName: "Wash Reagan Natl" },
    { code: "PBI", name: "West Palm Beach, Florida", airlines: ["DL"], shortName: "West Palm Beach" },
    { code: "ICT", name: "Wichita, Kansas", airlines: ["DL"], shortName: "Wichita" },
    { code: "XWA", name: "Williston, North Dakota", airlines: ["DL"], shortName: "Williston" },
    { code: "YWG", name: "Winnipeg, Canada", airlines: ["DL"], shortName: "Winnipeg" },

]

class Airport {
    constructor(code, airlines, name, shortName) {
        this.name = name;
        this.code = code;
        this.airlines = airlines;
        this.shortName = shortName? shortName : name;
    }
}

const airports = airportData.map(airport => new Airport(airport.code, airport.airlines, airport.name, airport.shortName));
airports.sort((a, b) => a.shortName.localeCompare(b.shortName));


// Get the container for all flights
let flightListDiv = document.getElementById("flights");


let flightDiv;
let link;
let airlineSpan;


const airportListDiv = document.getElementById("airport-list");

airports.forEach((airport) => {

    const airportItemDiv = document.createElement("div");
    airportItemDiv.id = airport.shortName;
    airportItemDiv.setAttribute("class", "airport-item");
    airportListDiv.appendChild(airportItemDiv);

    const airportNameDiv = document.createElement("div");
    airportNameDiv.setAttribute("class", "airport-name");
    airportNameDiv.textContent = airport.name + " [" + airport.code + "]";
    airportItemDiv.appendChild(airportNameDiv);

    const airportLinkSetDiv = document.createElement("div");
    airportLinkSetDiv.setAttribute("class", "airport-link-set");
    airportItemDiv.appendChild(airportLinkSetDiv);

    // Departures
    let airportLinksDiv = document.createElement("div");
    // airportLinksDiv.textContent = 'Departures: ';
    airportLinksDiv.setAttribute("class", "airport-departure-links");
    airportLinkSetDiv.appendChild(airportLinksDiv);
  
    let word1 = document.createElement('span');
    word1.textContent = 'Departures: '; // Add the preceding word
    airportLinksDiv.appendChild(word1);
  
    airport.airlines.forEach((airline) => {
        const airportLink = document.createElement("a");
        airportLink.href = "https://www.google.com/search?q=flight+status+" + airline + "+MSP+" + airport.code;
        airportLink.textContent = airline;
        airportLink.target = "_blank";
        airportLink.rel = "noopener noreferrer";
        airportLinksDiv.appendChild(airportLink);
    })

    // Arrivals
    airportLinksDiv = document.createElement("div");
    airportLinksDiv.setAttribute("class", "airport-arrival-links");
    airportLinkSetDiv.appendChild(airportLinksDiv);
 
    word1 = document.createElement('span');
    word1.textContent = 'Arrivals: '; // Add the preceding word
    airportLinksDiv.appendChild(word1);
 
    airport.airlines.forEach((airline) => {
        const airportLink = document.createElement("a");
        airportLink.href = "https://www.google.com/search?q=flight+status+" + airline + "+" + airport.code + "+MSP";
        airportLink.textContent = airline;
        airportLink.target = "_blank";
        airportLink.rel = "noopener noreferrer";
        airportLinksDiv.appendChild(airportLink);
    })

})

// Get the input field and output paragraph
const inputField = document.getElementById("filterInput");

let lowerCaseInput;
let foundFlag;

// Add an event listener for the 'input' event
inputField.addEventListener("input", function (event) {
    if (event.target.value == "") {
        airports.forEach((airport) => {
            flightDiv = document.getElementById(airport.shortName);
            flightDiv.style.display = 'flex';
        });   
        return;       
    }
    lowerCaseInput = event.target.value.toLowerCase();
    
    airports.forEach((airport) => {
        foundFlag = false;
        flightDiv = document.getElementById(airport.shortName);
        if (
            airport.code.toLowerCase().includes(lowerCaseInput)
            || airport.name.toLowerCase().includes(lowerCaseInput)
            || airport.shortName.toLowerCase().includes(lowerCaseInput)        
            ) {
            foundFlag = true;
        }
        if (!foundFlag) {
            airport.airlines.forEach((airline) => {
                if(airline.toLowerCase().includes(lowerCaseInput)) {
                    foundFlag = true;
                }
            });    
        }

        if (foundFlag) {
            flightDiv.style.display = 'flex';
        }
        else {
            flightDiv.style.display = 'none';
        }
    });

});

// Get the button element
const toggleButton = document.getElementById('toggleButton');

// Event listener for button click
toggleButton.addEventListener('click', () => {
  // Check the current state and toggle
  if (toggleButton.textContent === 'Departures') {
    toggleButton.textContent = 'Arrivals';
    toggleButton.classList.add('arrivals'); // Change style
  } else {
    toggleButton.textContent = 'Departures';
    toggleButton.classList.remove('arrivals'); // Revert style
  }

  let departureLinks = document.querySelectorAll('.airport-departure-links');
  departureLinks.forEach((element) => {
      if (toggleButton.textContent == 'Arrivals') {
          element.style.display = 'none';
      }
      else {
          element.style.display = 'flex';
      }
  });

    let arrivalLinks = document.querySelectorAll('.airport-arrival-links');
    arrivalLinks.forEach((element) => {
        if (toggleButton.textContent == 'Departures') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'flex';
        }
    });
  // Log or handle the event (replace this with your custom logic)
    
});


