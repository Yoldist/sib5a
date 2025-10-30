class Karyawan {
    constructor(nama,gaji){
        this.nama = nama;
        this.gaji = gaji;
    }

    hitungBonus(){
        return 0;
    }

    getinfo() {
        return `Nama: ${this.nama}, Gaji: ${this.gaji.toLocaleString('id-ID')}`;
    }
}

class KaryawanTetap extends Karyawan {

    hitungBonus() {
        return this.gaji * 0.10;
    }
}

class KaryawanKontrak extends Karyawan {
    hitungBonus() {
        return this.gaji * 0.05;
    }
}

const miyeon = new KaryawanTetap("Miyeon", 8000000);
const minnie = new KaryawanKontrak("Minnie", 7000000);
const soyeon = new KaryawanTetap("Soyeon", 6000000);
const yuqi = new KaryawanKontrak("Yuqi", 5000000);
const shuhua = new KaryawanTetap("Shuhua", 4000000);

const daftarKaryawan = [miyeon,minnie,soyeon,yuqi,shuhua];

let totalbonus = 0;

console.log("--- Perhitungan Bonus Karyawan ---");

daftarKaryawan.forEach(karyawan => {
    const bonus = karyawan.hitungBonus();
    totalBonus += bonus;
    console.log(`${karyawan.getinfo()}, Jenis: ${karyawan.constructor.name}, Bonus: ${bonus.toLocaleString('id-ID')}`);
});

console.log("\n----------");

console.log(`Total Bonus Seluruh Karyawan: ${totalBonus.toLocaleString('id-ID')}`);
