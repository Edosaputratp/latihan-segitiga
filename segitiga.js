function hitungLuas() {
  var ketik = prompt("pili luas ? segitiga, persegi, lingkaran");
  
  if (ketik == "segitiga") {
      var alas = prompt("masukkan nilai alas");
      var tinggi = prompt("masukkan tinggi");
      var alasInt = parseInt(alas);
      var tinggiInt = parseInt(tinggi);

      var luas = (alasInt * tinggiInt) / 2;
      alert(luas);

      var konfirmasi = confirm("apakah ingin di ulang ?");
      if (konfirmasi == true) {
          hitungLuas();
      } else {
          alert("noo!")
      }
  }else if (ketik== "persegi") {
      var panjang = prompt("masukkan panjang");
      var lebar = prompt("masukkan lebar");
      var panjangInt = parseInt(panjang);
      var lebarInt = parseInt(lebar);

      var luas = (panjangInt * lebarInt );
      alert(luas);

      var konfirmasi = confirm (" apakah ingin di ulang ?")
      if (konfirmasi == true){
          hitungLuas();
      }else {
      alert("noo!") 

      }   
  }else if (ketik == "lingkaran") {
      var jari= prompt("masukkan jari-jari");
      var phi = prompt("masukkan phi");
      var jariInt = parseInt(jari);
      var phiInt = parseInt(phi);

      var luas =(jariInt * phiInt) / 7;
      alert(luas);

      var konfirmasi = confirm ("apakah ingin di ulang ?")
      if (konfirmasi == true){
          hitungLuas();
      }else {
          alert("noo!")
      }
  }
}
hitungLuas();