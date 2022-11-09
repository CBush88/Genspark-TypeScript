"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warehouse {
    constructor(items) {
        this.items = [];
        if (typeof items !== 'undefined') {
            this.items = items;
        }
    }
    addItem(stockItem) {
        this.items.push(stockItem);
    }
    showItems() {
        console.log(JSON.stringify(this.items));
    }
}
exports.default = Warehouse;
//# sourceMappingURL=Warehouse.js.map