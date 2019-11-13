/*var prev = document.querySelector('.left');
var next = document.querySelector('.right');
var img = document.querySelectorAll('.slider>img');
var i=0;

next.onclick = function(){
   img[i].classList.add('invise');
    i++;
    if(i>=(img.length-1)){
        i=0;
    }
    img[i].classList.remove('invise');
    
  }
*/
window.onload = function () {

    var showVas = document.querySelector('.me1n');

    var clickVas = document.querySelector('.aln1');
    var mens = document.querySelector('.razvertka_text');
    var comeBack = document.querySelector('.goBack');

    clickVas.onclick = function () {
        mens.classList.add('invise');
        showVas.classList.remove('invise');
    }
    comeBack.onclick = function () {
        mens.classList.remove('invise');
        showVas.classList.add('invise');
    }

    /*men 2*/

    var showSerg = document.querySelector('.me2n');

    var clickSerg = document.querySelector('.aln2');
    var mens2 = document.querySelector('.razvertka_text');
    var comeBack1 = document.querySelector('.goBackToMenu');

    clickSerg.onclick = function () {
        mens2.classList.add('invise');
        showSerg.classList.remove('invise');
    }
    comeBack1.onclick = function () {
        mens2.classList.remove('invise');
        showSerg.classList.add('invise');
    }

    //men 3
    var showSas = document.querySelector('.me3n');

    var clickSas = document.querySelector('.aln3');
    var mens3 = document.querySelector('.razvertka_text');
    var comeBack2 = document.querySelector('.goBackMenu');

    clickSas.onclick = function () {
        mens3.classList.add('invise');
        showSas.classList.remove('invise');
    }

    comeBack2.onclick = function () {
        mens3.classList.remove('invise');
        showSas.classList.add('invise');
    }
}

//fon
var fon = document.querySelector('.main');


var a = setInterval(function () {
    fon.classList.toggle('second_main_main');

}, 7000);

// for(let i = 0; i<3; i++){
//     var a = setInterval(function () {
//         fon.classList.toggle('second_main_main');
//     }, 2000);
//     // fon.classList.add('second_main_main');
//     // a();
//     var a = setInterval(function () {
//         fon.classList.remove('second_main_main');
//     fon.classList.add('second_main_photo');
//     }, 2000);
//     // fon.classList.remove('second_main_main');
//     // fon.classList.add('second_main_photo');
//     // a();
// }

//mass
var btn = document.querySelectorAll('.botn');

btn.forEach(function (e, p) {
    btn[p].onclick = function () {
        reg.classList.remove('none');
    }
})

//ВХОД
var batn = document.querySelector('.batn');
var modal = document.querySelector('.modal_window');

batn.onclick = function () {
    modal.classList.remove('none')
}
// РЕГИСТРАЦИЯ

var botn = document.querySelector('.botn');
var reg = document.querySelector('.reg_window');

botn.onclick = function () {
    reg.classList.remove('none')
}

//close vhod
var closes = document.querySelector('.closes');


closes.onclick = function () {
    modal.classList.add('none');
}

//close reg
var closs = document.querySelector('.closs');


closs.onclick = function () {

    reg.classList.add('none');
}
//mass alena
var btn = document.querySelectorAll('.massalena');

btn.forEach(function (e, p) {
    btn[p].onclick = function () {
        reg.classList.remove('none');
    }
})