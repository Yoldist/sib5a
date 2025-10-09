class Store {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    info() {
        return `Nama barang adalah ${this.name}, dengan harga ${this.price}`;
    }
}

const store = new Store("sosis", "1000");
console.log(store.info());