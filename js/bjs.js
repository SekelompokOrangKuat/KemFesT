var priceTier1 = 150000000;
var priceTier2 = 100000000;
var priceTier3 = 50000000;
var hargaTot = 0;
var totalArtist = 0;
// function isValid(var valid) {
//     if(valid==0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function addTier1() {
    hargaTot = hargaTot + priceTier1;
    document.getElementById("hargaTotal").innerHTML = "Rp. " + hargaTot;
    totalArtist = totalArtist + 1;
    document.getElementById("totalArtist").innerHTML = "Total Artist : " + totalArtist;
    document.getElementById("artistAdded").innerHTML = "<p style='transtition:.5s'>Added 1 to List<p>";
    localStorage.setItem("HargaTotal", hargaTot);
}
function addTier2() {
    hargaTot = hargaTot + priceTier2;
    document.getElementById("hargaTotal").innerHTML = "Rp. " + hargaTot;
    totalArtist = totalArtist + 1;
    document.getElementById("totalArtist").innerHTML = "Total Artist : " + totalArtist;
    document.getElementById("artistAdded").innerHTML = "<p style='transtition:.5s'>Added 1 to List<p>";
    localStorage.setItem("HargaTotal", hargaTot);
}
function addTier3() {
    hargaTot = hargaTot + priceTier3;
    document.getElementById("hargaTotal").innerHTML = "Rp. " + hargaTot;
    totalArtist = totalArtist + 1;
    document.getElementById("totalArtist").innerHTML = "Total Artist : " + totalArtist;
    document.getElementById("artistAdded").innerHTML = "<p style='transtition:.5s'>Added 1 to List<p>";
    localStorage.setItem("HargaTotal", hargaTot);
}
function resetBook() {
    hargaTot = 0;
    totalArtist = 0;
    document.getElementById("artistAdded").innerHTML = "nothing added";
    document.getElementById("hargaTotal").innerHTML = "Rp. " + hargaTot;
    document.getElementById("totalArtist").innerHTML = "Total Artist : " + hargaTot;
    localStorage.setItem("HargaTotal", hargaTot);
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