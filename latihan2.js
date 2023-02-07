let jualMobil = {
    nama: "Alif",
    merek: "Kijang",
    tahun: 2015,
    iklan: function () {
      document.write(
        `<br><br> BU , Saya ${this.nama}, Jual Mobil ${this.merek} , Tahun ${this.tahun} ,Bekas`
      );
    },
  };
  
  jualMobil.iklan();