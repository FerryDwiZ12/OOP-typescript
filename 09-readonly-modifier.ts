// read-only modiefier digunakan agar suatu properti tidak bisa dirubah datanya sering disebut imutable

class Person {
  readonly gender: string = "Pria";
}

const person = new Person();
// person.gender = 'wanita'

//tidak bisa dirubah

// const hanya bisa di pakai di variable biasa
