class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getinformation() {
        return `nama karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan} memiliki gaji ${this.gaji}` ;
    }

    getHistoryOccupatuions() {
        this.occupations = ["Ojol", "Relawan", "Komisaris"];
        return this.occupations;
    }
}
    
const karyawan = new Karyawan("Yoldi", "Dosen", "500");
console.log(karyawan.getinformation());