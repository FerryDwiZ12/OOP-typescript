// visibility atau acces modifier mengatur dan membatasi akses dari properti atau method yang ada pada sebuah kelas

// public = bisa dipanggil atau digunakan dari mana saja
// protected = hanya bisa digunakan kelas itu sendiri atau turunanya
// private = hanya bisa di kelas itu sendiri, kelas turunya juga tidak bisa

class Hewan8 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {
    console.log(`Ini hewan ${this.nama} berkaki ${this.kaki} dia Mamalia ${this.mamalia}`);
  }
}

class Katak7 extends Hewan8 {
  private umurTelur: number = 4;
  private umurKeceboong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKeceboong + this.umurKatak);
    // this.mamalia, this.nama, this.kaki -  this.kaki akan eror karna
  }
}

const katak7 = new Katak7("Anjing", 7, true);
katak7.getUmur();
katak7.berjalan();
// console.log(katak7);
