// Class yang tidak bisa di instansisasi secara langsung oleh client karena bentuk memang bentuknya abstracy
// bisa sebagai template dimana disetiap class yang mengextend harus mengimplementasikan method yang sudah dientukan
// harus ada satu abstract method

abstract class Hewan9 {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  makan() {
    console.log(`${this.nama} Sedang Makan`);
  }

  abstract bergerak(): any;
}

class Kucing1 extends Hewan9 {
  constructor() {
    super("kucing");
  }

  bergerak() {
    console.log(`${this.nama} Sedang Berjalan`);
  }
}

class Burung1 extends Hewan9 {
  constructor() {
    super("Burung");
  }

  bergerak() {
    console.log(`${this.nama} Terbang`);
  }
}

const kucing1 = new Kucing1(); // artinya kucing1 mencerminkan si class Kucing1
kucing1.makan();
kucing1.bergerak();
// console.log( typeof kucing1);

const burung7 = new Burung1();
burung7.bergerak();
