document.getElementById('plan').value = '150';
var res = document.getElementById('res');
res.textContent = '150';
var Date = new Date;
var month = Date.getMonth() + 1;
document.getElementById('date').textContent = Date.getDate() +'.' + month +'.' + Date.getFullYear();



document.querySelector('button').onclick = function() {
    var p = document.getElementById('plan').value;
    var t = document.getElementById('trat').value;
    res.textContent = p - t;
}
