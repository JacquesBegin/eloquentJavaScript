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
    this.place = loc;
    this.parcels = parcels;
  }

  toString() {
    let str = `Village State:\nRobot's Location: ${this.place}\nParcel Locations: `;
    for (let p of this.parcels) {
      str += `From ${p.place} going to ${p.address}\n`
    }
    return str;
  }

  listCollectedParcels() {
    let collectedParcels = this.parcels.map(p => {
      console.log(`Current location: ${p.place}\nDelivery Address: ${p.address}`); 
    });
  }

  move(destination) {
    if (!destinations[this.place].includes(destination)) {
      console.log("VILLAGE STATE NOT UPDATED")
      return this;
    } else {
      let parcels = this.parcels.map(parcel => {
        // console.log(`parcel.place: ${parcel.place}\nthis.place: ${this.place}`);
        if (parcel.place != this.place) return parcel;
        // console.log("parcel place and this place equal");
        return {place: destination, address: parcel.address};
      }).filter(p => p.place != p.address);
      // console.log(parcels);
      return new VillageState(destination, parcels);
    }
  }
}

let village1 = new VillageState("Marketplace", [{place: "Farm", address: "Ernie's House"}, {place: "Grete's House", address: "Ernie's House"}]);
console.log(village1.toString());
// console.log(Object.prototype.toString.call(village1));

let village2 = village1.move("Farm");
console.log(village2.toString());
let village3 = village2.move("Grete's House");
console.log(village3.toString());
let village4 = village3.move("Ernie's House");
console.log(village4.toString());
console.log(village1.toString());




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
// displayDestinations("Marketplace");