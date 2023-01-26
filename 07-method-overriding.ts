// methot ovveriding berfungsi untuk mereplace atau menggantikan method yang ada di parent class

class Hewan7 {
  nama: string = "";

  bernafas() {
    console.log("Sedang Bernafas");
  }
}

// Jika method yang ada di parent itu dibuat ulang dengan kelas child maka ada mereplace yang ada di atas

class Katak6 extends Hewan7 {
  bernafas() {
    console.log("Malas Bernafas");
  }
}

const katak6 = new Katak6();
katak6.bernafas();
