var totBayar = localStorage.getItem("HargaTotal");

document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('#totalBayar').innerHTML = "Total: Rp " + totBayar;
    // document.querySelector('#vm2').innerHTML = "Luas Bangunan : 70 m&sup2; <br>Harga Rumah : Rp " + harga2 + "<br>Tingkat : 1<br>Kamar Tidur : 3<br>Kamar Mandi : 2<br>Ruang Keluarga : 2<br>Garasi : 1<br>Dapur : 1";
    });

function showPopSuccess() {
    document.getElementById("popsuc").style.display = "block";
    var resetBayar = 0;
    localStorage.setItem("HargaTotal",resetBayar);
}
function showPop() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup").style.display = "block";
}
function closePop() {
    document.getElementById("popup").style.display = "none";
}
function showReg() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "block";
}
function closeReg() {
    document.getElementById("popup2").style.display = "none";
}
