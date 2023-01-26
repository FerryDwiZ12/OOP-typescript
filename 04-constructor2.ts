// membuat contructor karena pembuatan Object Memanggil Contructor terlebih dahulu

class Hewan4 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const burung = new Hewan4("Burung", 2);
console.log(burung);


//------ Cara simpel Constructor

class Hewan41 {
    constructor(public nama:string, public kaki:number){

    }
}

const burung2 = new Hewan41("Burung", 2);
console.log(burung);
