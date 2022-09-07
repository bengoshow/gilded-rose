// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/
const specialItems = [
  'Aged Brie',
  'Sulfuras, Hand of Ragnaros',
  'Backstage passes to a TAFKAL80ETC concert',
];
export function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {

    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }

    if (!specialItems.includes(items[i].name) && items[i].quality > 0) {
      if (items[i].sell_in < 0) {
        items[i].quality = items[i].quality - 1;
      }
      items[i].quality = items[i].quality - 1;
    }

    if (items[i].name == 'Aged Brie') {
      if (items[i].sell_in < 0) {
        items[i].quality = items[i].quality + 1;
      }
      items[i].quality = items[i].quality + 1;
    }

    if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert' && items[i].quality < 50) {
      items[i].quality = items[i].quality + 1;
      if (items[i].sell_in < 11) {
        items[i].quality = items[i].quality + 1;
      }
      if (items[i].sell_in < 6) {
        items[i].quality = items[i].quality + 1;
      }
      if (items[i].sell_in < 0) {
        items[i].quality = 0;
      }
    }
  }
}
