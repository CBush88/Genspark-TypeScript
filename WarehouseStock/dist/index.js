"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Warehouse_1 = __importDefault(require("./Warehouse"));
const warehouse = new Warehouse_1.default();
const soup = new Item_1.default("Tomato Soup", "Tomato soup with low sodium");
const soup2 = new Item_1.default("Tomato Soup", "Tomato soup with high sodium");
warehouse.addItem(soup);
warehouse.addItem(soup2);
console.log("Items list:");
warehouse.showItems();
//# sourceMappingURL=index.js.map