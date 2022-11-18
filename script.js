var date = new Date;
console.log(date);
var dayOfWeek;

// Ставит монетку напротив текущего дня недели.
function toDay() {
    dayOfWeek = date.getDay();
    console.log(dayOfWeek);
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
    document.querySelector('#d' + dayOfWeek + ' .today').style.visibility = 'visible';
    
    for (var d=1; d <dayOfWeek; d++) {
        document.querySelector('#d' + d +' .in').disabled = true;
        document.querySelector('#d' + d +' .in').style.border = 0;
    }
}


function conectDate() {
    var dayOfWeek = date.getDay();
    var day = date.getDate();
    console.log(day, dayOfWeek);
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
    date.setDate(day - dayOfWeek);
    dayOfWeek = date.getDay();
    day = date.getDate();
    console.log(day, dayOfWeek);

    for (var d=1; d <=7; d++) {
        date.setDate(day + d);
        document.querySelector('#d' + d + ' .celendertext').textContent = date.getDate();
    }
}

function save() {
    var sum = 0; 
    for (var d=1; d <=7; d++) {
        sum =  sum + Number( document.querySelector('#d' + d + ' .in').value);
        var temp = {};
        temp.day = d;
        temp.plan = document.querySelector('#d' + d + ' .in').value;
        saveDoc[d] = temp;
    }
    document.querySelector('#res').textContent = sum;
    localStorage.setItem("onPocket", JSON.stringify(saveDoc));
}


function addOst() { // Пока не работает - отключил.
    var ostVal = 0;
    var faktDoc = JSON.parse(localStorage.getItem("onPocketFakt"));
    var planDoc = JSON.parse(localStorage.getItem("onPocket"));
    // считаем сумму всех остатков за неделю
    for (var d=1; d < dayOfWeek; d++) {
        if (faktDoc[d].fakt !== '0') {
            ostVal = ostVal + (Number(planDoc[d].plan) - Number(faktDoc[d].fakt)) ;
            console.log(ostVal);
        }
    }
    // переносим сумму остатков на сегодняшний день
    var temp = {};
    temp.plan = Number( planDoc[dayOfWeek].plan ) + ostVal;
    planDoc[dayOfWeek] = temp;
    localStorage.setItem("onPocket", JSON.stringify(planDoc));
    // зануляем фактические величины
    for (var d=1; d < dayOfWeek ; d++) {
        var temp = {};
        temp.fakt = "0";
        faktDoc[d] = temp;
        localStorage.setItem("onPocketFakt", JSON.stringify(faktDoc));
        console.log(202020);
    }
    // зануляем фактические суммы в будущем
    for (var d=7; d > dayOfWeek ; d--) {
        if (faktDoc[d].fakt !== '0') {
            var temp = {};
            temp.fakt = 0;
            faktDoc[d] = temp;
            localStorage.setItem("onPocketFakt", JSON.stringify(faktDoc));
        }
    }
}


function makeFakt() {
    var faktDoc = [];
    for (var d=1; d <=7; d++) {
        var temp = {};
        temp.fakt = '0';
        faktDoc[d] = temp;
    }
    localStorage.setItem("onPocketFakt", JSON.stringify(faktDoc));
}


// функция для снятия фокуса с полей ввода для того, чтобы скрыть клавиатуру по нажатию на фон
document.querySelector('.main').onclick = function() {
    console.log('keyboardDown');    
}


// Main
toDay();
//addOst();
var saveDoc = [];
if (localStorage.getItem("onPocket") == undefined ) {
    conectDate();
    save();
} else {
    conectDate();
    saveDoc = JSON.parse(localStorage.getItem("onPocket"));
    for (var d=1; d <=7; d++) {
        document.querySelector('#d' + d + ' .in').value = saveDoc[d].plan;
    }
    save();
}

if (localStorage.getItem("onPocketFakt") == undefined ) {
    makeFakt();
}




// Ниже написаны события изменения значений в input, возникли сложности с 
// работой функции, если выбирал элемент по классу, поэтому написал 7 функций 
// по id - в дальнейшем разобраться и переделать
document.querySelector('#d1').onchange = function() {
    save();
}
document.querySelector('#d2').onchange = function() {
    save();
}
document.querySelector('#d3').onchange = function() {
    save();
}
document.querySelector('#d4').onchange = function() {
    save();
}
document.querySelector('#d5').onchange = function() {
    save();
}
document.querySelector('#d6').onchange = function() {
    save();
}
document.querySelector('#d7').onchange = function() {
    save();
}
