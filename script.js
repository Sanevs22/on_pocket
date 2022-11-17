var date = new Date;
console.log(date);

// Ставит монетку напротив текущего дня недели.
function toDay() {
    var dayOfWeek = date.getDay();
    console.log(dayOfWeek);
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
    document.querySelector('#d' + dayOfWeek + ' .today').style.visibility = 'visible';
}

// 
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
    }
    document.querySelector('#res').textContent = sum;


}

document.querySelector('.main').onclick = function() {
    console.log(77777);
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

// Main
toDay();
conectDate();


/*
var p = document.getElementById('plan'); 
var t = document.getElementById('trat');
var ost = document.getElementById('res');

var Date = new Date;
var month = Date.getMonth() + 1;
var time = Date.getDate() +'.' + month +'.' + Date.getFullYear();
document.getElementById('date').textContent = time;

if(localStorage.getItem('plan')) {
    p.value = Number(localStorage.getItem('plan'));
} else {
    p.value = 100;
}

if(localStorage.getItem('trat')) {
    t.value = Number(localStorage.getItem('trat'));
} else {
    t.value = 0;
}

if(localStorage.getItem('time') !== time) {
    p.value = Number(localStorage.getItem('ost')) + 100;
    t.value = 0;
} 

ost.textContent = p.value-t.value;

document.querySelector('button').onclick = function() {
    ost.textContent = p.value-t.value;
    localStorage.setItem('ost', ost.textContent);
    localStorage.setItem('time', time);
    localStorage.setItem('plan', p.value);
    localStorage.setItem('trat', t.value);
}
*/