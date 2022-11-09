import StockItem from "./StockItem";

export default class Item implements StockItem {
    itemName: string;
    description: string;

    constructor(itemName: string, description: string){
        this.itemName = itemName;
        this.description = description;
    }
}