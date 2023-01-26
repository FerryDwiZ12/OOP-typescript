class Hewan3 {
  // Property
  nama: string = "";
  kaki: number = 0;

  // method
  bernafas() {
    console.log(`${this.nama} Berkaki ${this.kaki}`);
  }
}

// console.log(hewan3);

const hewan3 = new Hewan3();
hewan3.nama = "Katak";
hewan3.kaki = 2;

hewan3.bernafas();
