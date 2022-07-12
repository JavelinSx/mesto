export default class Section{
    constructor(data, containerSelector){

        this._items = data.items;
        this._renderer = data.renderer;
        this._containerSelector = containerSelector;

    }
    addItem(elem){
        this._containerSelector.apend(elem);
    }
    renderItems(items){
        this.items.forEach(item => {
            this._renderer(item)
        })
    }
}