//document.querySelector("#paragraf").innerHTML = "saya belajar javascript";
//document.querySelector("#content").innerHTML = "<h1>ganti isi</h1>";

let tanggal = 5;
let bulan = 1;
let hasil = "salah";

if (tanggal > 0 && tanggal <32 && bulan >0 && bulan <12){
    hasil = "zodiak blm dibuat";
    if(bulan == 1){
        hasil = "capricon"
        if (tanggak >20){
            hasil ="aquarius";
        }
    }

    if (bulan == 2){
        hasil = "sagitarius";
        if (tanggal >20) {
            hasil ="pisces";
        }
    }
}
//console.log(hasil);
document.querySelector("#content").innerHTML = "<h1>" + hasil + "</h1>";