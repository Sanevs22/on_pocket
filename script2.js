var date = new Date;
console.log(date);

var dayOfWeek = date.getDay();
console.log(dayOfWeek);
if (dayOfWeek === 0) {
    dayOfWeek = 7;
}

document.querySelector('#d_p2').textContent = (date.getDate() + '/' + Number( date.getMonth()+1) + '/' + date.getFullYear());



function ost() {
    var planDoc = JSON.parse(localStorage.getItem("onPocket"));
    var faktDoc = JSON.parse(localStorage.getItem("onPocketFakt"));
    document.querySelector('#planVal').textContent = planDoc[dayOfWeek].plan;
    document.querySelector('#ost').textContent = planDoc[dayOfWeek].plan - faktDoc[dayOfWeek].fakt;
}

ost();

document.querySelector('#bigButton').onclick = function() {
    // Анимация нажатия кнопки.
    document.querySelector('#bigButton').style.visibility = 'hidden';
    setTimeout(() => { document.querySelector('#bigButton').style.visibility = 'visible'; }, 200); 
    // Пересчет и сохранение значений
    var faktDoc = JSON.parse(localStorage.getItem("onPocketFakt"));
    var temp = {};
    temp.fakt = Number( faktDoc[dayOfWeek].fakt) + Number( document.querySelector('.in2').value);
    faktDoc[dayOfWeek] = temp;
    localStorage.setItem("onPocketFakt", JSON.stringify(faktDoc));
    ost();
    document.querySelector('.in2').value = null ;
}