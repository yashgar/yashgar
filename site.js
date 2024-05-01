var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}
var Index = 1;
showDivs(Index);
function plusDivs(n) {
  showDivs(Index += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { Index = 1 }
  if (n < 1) { Index = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[Index - 1].style.display = "block";
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function clear() {
  document.getElementById('email').value = '';
  document.getElementById('view').value = '';
}

function openForm1() {
  document.getElementById("payment").style.display = "block";
}

function closeForm2() {
  document.getElementById("payment").style.display = "none";
}

function checkout() {
  document.getElementById("payment").style.display = "none";
}