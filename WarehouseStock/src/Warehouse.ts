import StockItem from "./StockItem";

export default class Warehouse{
    public items: {
        itemName:string;
        description:string;
    }[] = []
    constructor(items?:
        {
            itemName:string;
            description:string;
        }[]
    ){
        if(typeof items !== 'undefined'){
            this.items = items;
        }
    }

    addItem(stockItem:StockItem){
        this.items.push(stockItem);
    }

    showItems(){
        console.log(JSON.stringify(this.items));
    }

}