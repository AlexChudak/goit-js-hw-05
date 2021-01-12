class Storage {
  constructor(array) {
    this.items = array;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
    return this.array;
  }
  removeItem(item) {
    let rem = this.items.indexOf(item);
    storage.items.splice(rem, 1);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
