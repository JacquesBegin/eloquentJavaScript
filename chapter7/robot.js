const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];


function buildGraph(roads) {
  let allConnections = Object.create(null);
  function buildDirectory(from, to) {
    if (allConnections[from] == null) {
      allConnections[from] = [to];
    } else {
      allConnections[from].push(to);
    }
  }
  for (let [from, to] of roads.map(e => e.split("-"))) {
    buildDirectory(from, to);
    buildDirectory(to, from);
  }
  return allConnections;
}

let destinations = buildGraph(roads);

class VillageState {
  constructor(loc, parcels) {
    this.robotLocation = loc;
    this.parcels = parcels;
  }

  move(destination) {
    if (!destinations[this.robotLocation].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(parcel => {
        if (parcel.place != this.place) return parcel;
        return {place: destination, address: parcel.address};
      })
    }
    // return new VillageState()
  }
}


// Only used to print out destinations to the console.
function displayDestinations(startingLocation) {
  let destinations = buildGraph(roads);
  let allDestinations = `Destinations from ${startingLocation}:`;
  if (destinations[startingLocation]) {
    for (let dest of destinations[startingLocation]) {
      allDestinations += `\n${dest}`;
    }
  }
  return allDestinations;
}
displayDestinations("Marketplace");