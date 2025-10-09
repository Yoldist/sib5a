class FruitBasket {
    constructor() {
        this.fruits = [];
    }

    additem(item) {
        this.fruits.push(item);
        console.log(`kamu baru saja menambahkan ${item}`);
    }

    getinformation() {
            console.log(`list nuah dikeranjang ${this.fruits}`);
    }
}

const fruits = new FruitBasket();
fruits.additem("jeruk");
fruits.additem("apel");
fruits.getinformation();