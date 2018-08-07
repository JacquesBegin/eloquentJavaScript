const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
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


function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}


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

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(destinations));
    let place;
    do {
      place = randomPick(Object.keys(destinations));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

// let village1 = new VillageState("Marketplace", [{place: "Farm", address: "Ernie's House"}, {place: "Grete's House", address: "Ernie's House"}]);
// console.log(village1.toString());
// // console.log(Object.prototype.toString.call(village1));

// let village2 = village1.move("Farm");
// console.log(village2.toString());
// let village3 = village2.move("Grete's House");
// console.log(village3.toString());
// let village4 = village3.move("Ernie's House");
// console.log(village4.toString());
// console.log(village1.toString());


function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    console.log(state.parcels);
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(destinations[state.place])};
}

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(destinations, place, parcel.place);
    } else {
      route = findRoute(destinations, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}


// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
// runRobot(VillageState.random(), goalOrientedRobot, []);
// runRobot(VillageState.random(), routeRobot, []);


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



// Exercises
// Measuring a Robot
// - compare two robots to find the more efficient one

  // Takes two robots (and their starting memory)
function compareRobots(robot1, memory1, robot2, memory2) {
  // Generate 100 tasks (the random state of the village 
  // after running VillageState.random())
  console.log(`Average # of steps for robot1: ${}\nAverage # of step for robot1: ${}`);
}


compareRobots(routeRobot, [], goalOrientedRobot, []);