function HtmlElement() {
    this.click = function () {
        console.log(`clicked`);
    }
}

HtmlElement.prototype.focus = function () {
    console.log(`focused`);
}

HtmlElement.prototype.render = function () {
    return "";
}

function HtmlSelectElement(item = []) {
    this.item = item;
    this.addItem = function (item) {
        this.item.push(item)
    }
    this.removeItem = function (item) {
        this.item = this.item.slice(this.item.indexOf(item), 1)
    }

}

function HtmlImgElement(src = '') {
    this.src = src;
}




HtmlSelectElement.prototype = new HtmlElement()
// HtmlSelectElement.prototype.click = e.click.call(Object.create(HtmlElement.prototype))
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlSelectElement.prototype.render = function () {
    let str = ``;
    for (let item of this.item) {
        str += `<option>${item}</option>`
    }
    return `<select>${str}</select>`

}


HtmlImgElement.prototype = new HtmlElement()
HtmlImgElement.prototype.constructor = HtmlImgElement;
HtmlImgElement.prototype.render = function () {
    return `<img src="${this.src}" />`
}

const e = new HtmlElement();
const s = new HtmlSelectElement();
const i = new HtmlImgElement();

const elements = [
    new HtmlSelectElement([1, 2, 3, 45, 6]),
    new HtmlImgElement('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')
];

for (let element of elements) {
    console.log(element.render());
}