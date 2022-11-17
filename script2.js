var Date = new Date;
console.log(Date);


// Анимация нажатия кнопки.
document.querySelector('#bigButton').onclick = function() {
    console.log(23423);
    document.querySelector('#bigButton').style.visibility = 'hidden';
    setTimeout(() => { document.querySelector('#bigButton').style.visibility = 'visible'; }, 200); 
}



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