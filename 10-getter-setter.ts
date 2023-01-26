// GS = mengambil dan mengisi sebuah properti dalam class
// yang mana sebelum melakukan get/set beberapa proses yang harus d lakukan terlebih dahulu

// get setnya untuk memvalisasi data dan mengambil format dari sebuah angka
//contoh

class ProductA {
  private _price: number = 0;
  private _discount: number = 0.05;

  get price() {
    return this._price;
  }

  set price(value: number) {
    this._price = value - value * this._discount;
  }
}

//object
const productA = new ProductA();
productA.price = 2000;
console.log(productA.price);
