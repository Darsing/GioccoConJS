const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');
const btn = document.getElementById('btn');
const p = document.querySelector('p');

btn.addEventListener('click', calcoloDiferenza);

function calcoloDiferenza() {
    const date1Milli = new Date(date1.value).getTime();
    const date2Milli = new Date(date2.value).getTime();
    if (date2Milli > date1Milli) {
        const diff = date2Milli - date1Milli;
        //console.log(diff / (1000 * 60 * 60 * 24));
        const risult= diff / (1000 * 60 * 60 * 24);
        p.innerText= risult;
    }
}