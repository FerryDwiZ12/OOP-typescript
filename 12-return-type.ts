// return type pada sebuah method di kelas, berfungsi untuk membatasi atau mengatur tipe apa yang akan direturn sebuah method

class Burung {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }

  terbang(): void {
    console.log("terbang");
  }

  // async

  async makan(): Promise<number> {
    return 321;
  }
}

const burung1 = new Burung()
burung1.terbang()