// super contructor itu dogunakan untuk memanggil untuk memanggil constructor
// milik class parent yang mana properti di isi melalui dari kealas child

class Hewan6 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak extends Hewan6 {
  beracun: boolean;

  // ketika kita ingin membuat class extent dari atas, maka kita harus memasukan parameter dari kelas parent juga
  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

const katak5 = new Katak('katak',2, true)
console.log(katak5);
