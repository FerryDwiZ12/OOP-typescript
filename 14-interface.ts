// interface perjanjian atau kontrak yang telah disepakati oleh interface

interface AndroidPhone {
  nama: string;
  menu(): any;
  home(): any;
  back(): any;
}

class Samsung implements AndroidPhone {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  menu() {
    console.log("Menu tab");
  }
  home() {
    console.log("Home Tabped");
  }
  back() {
    console.log("Back tabed");
  }
}

class Asus implements AndroidPhone {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  menu() {
    console.log("Menu tab");
  }
  home() {
    console.log("Home Tabped");
  }
  back() {
    console.log("Back tabed");
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log("Kembali ke Menu Utama di Game ");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("Tipe A");
const game = new GameA(samsung);

game.home();
game.menu();
game.back();
