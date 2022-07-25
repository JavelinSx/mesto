export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }
  addItems(items) {
    items.forEach((item) => {
      this._containerSelector.append(this._renderer(item));
    });
  }

  addItem(item) {
    this._containerSelector.prepend(this._renderer(item));
  }
}
