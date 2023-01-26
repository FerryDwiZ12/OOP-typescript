// constrructor adlah sebuah metod yang nanti akan dipanggil terdahulu ketika sebuah objet dibuat mengngunakan class

class Hewan2 {
    constructor(){
        console.log('Constructor akan selalu dipanggil terlebih dahulu');
    }
}

const hewan2 = new Hewan2();