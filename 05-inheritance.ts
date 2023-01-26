// Inheritance atau pewarisan , dimana sebuah class bisa menurunkan properti atau method kepada kelas lain yang mengikutinya

class Hewan5 {
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log("Nafas");
  }
}

class Burung5 extends Hewan5 {
  warna: string = "Merah";
}

const burung5 = new Burung5();
burung5.nama = "kodok";
burung5.kaki = 2;
burung5.warna = "pink";

console.log(burung5);

// burung5.bernafas()
