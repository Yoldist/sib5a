class Animal {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
    }

    MakeSound() {
        return `hewan ini adalah ${this.nama} dengan tipe ${this.tipe} yang mempunyai suara Meong`;
    }
}

const Animal = new Animal ("Kucing", "Mamalia");
console.log(Animal.MakeSound());