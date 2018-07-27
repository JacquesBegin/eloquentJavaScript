let ids = new Map();
ids.set("beginnerEnemy", 0);
ids.set("easyEnemy", 1);
ids.set("noviceEnemy", 2);
ids.set("moderateEnemy", 3);
ids.set("hardEnemy", 4);
ids.set("superEnemy", 5);

console.log(ids.get("hardEnemy"));
console.log(ids.has("megaEnemy"));
console.log(ids.has("toString"));