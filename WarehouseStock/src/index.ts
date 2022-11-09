import Item from "./Item";
import Warehouse from "./Warehouse";

const warehouse = new Warehouse();
const soup = new Item("Tomato Soup", "Tomato soup with low sodium");
const soup2 = new Item("Tomato Soup", "Tomato soup with high sodium");

warehouse.addItem(soup);
warehouse.addItem(soup2);
console.log("Items list:");
warehouse.showItems();