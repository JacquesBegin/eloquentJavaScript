const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

let destinations = {}; 
for (let road of roads) {
  let segment = road.split("-");
  if (destinations.hasOwnProperty(segment[0])) {
    if (!destinations[segment[0]].includes(segment[1])) {
      destinations[segment[0]].push(segment[1]);
    }
  } else {
    destinations[segment[0]] = [segment[1]];
  }
  if (destinations.hasOwnProperty(segment[1])) {
    if (!destinations[segment[1]].includes(segment[0])) {
      destinations[segment[1]].push(segment[0]);
    }
  } else {
    destinations[segment[1]] = [segment[0]];
  }
}

// console.log(destinations);

function displayDestinations(startingLocation) {
  let destinationPrintout = `Destinations from ${startingLocation}:`;
  if (destinations[startingLocation]) {
    for (let dest of destinations[startingLocation]) {
      destinationPrintout += `\n${dest}`;
    }
  }
  console.log(destinationPrintout);
}
displayDestinations("Alice's House");