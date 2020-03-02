function openlist1() {
    var x = document.getElementById("list1");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function openlist2() {
    var x = document.getElementById("list2");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function openlist3() {
    var x = document.getElementById("list3");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}