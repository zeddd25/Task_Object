/* Cari  5 object pada dunia nyata, lalu buatlah object tersebut ke dalam kode, dimana object tersebut memiliki properties dan methods */

// 1
let santri = {
  nama: "Kosim",
  usia: 20,
  jurusan: "tahfidz",
  data: function () {
    document.write(
      `Nama Saya : ${this.nama}. <br> Usia Saya : ${this.usia}. <br> Jurusan Saya : ${this.jurusan} <br><br>`
    );
  },
};

santri.data();

// 2
let laptop = {
  merek: "Hp Pavillion",
  ram: "16 Gb",
  prosessor: "Intel i7 gen 9th",
  kontak: 0896653428,
  forSale: function () {
    document.write(
      `Di Jual Laptop Merek  : ${this.merek}. <br> Ukuran Ram : ${this.ram}. <br> Detail Prosessor : ${this.prosessor} <br> Minat Hub. : ${this.kontak} <br><br>`
    );
  },
};

laptop.forSale();

// 3
let kucing = {
  warna: "Oren",
  jenis: "Persia",
  ekor: "panjang",
  Usia: "4 tahun",
  ciri_ciri: function () {
    document.write(
      `Di Cari Kucing Hilang Berwarna : ${this.warna} <br> Jenis : ${this.jenis} <br> Mempunyai Ekor : ${this.ekor} <br> Umurnya :  ${this.Usia}`
    );
  },
};

kucing.ciri_ciri();

// 4
function kendaraan(barang, merek, warna, plat) {
  let motor = {};
  (motor.barang = barang),
    (motor.merek = merek),
    (motor.warna = warna),
    (motor.plat = plat);
  return motor;
}

console.log(kendaraan("Motor", "Honda", "Hitam", 1871));

// 5
function buah(buah, warna, rasa, harga) {
  let pisang = {};
  (pisang.buah = buah),
    (pisang.warna = warna),
    (pisang.rasa = rasa),
    (pisang.harga = harga);
  return pisang;
}

console.log(buah("Pisang", "Kuning", "Manis", "1Kg 12rb"));
