let getName = document.getElementById('name');
let getRoll = document.getElementById('roll');
let getAcademy = document.getElementById('academy');
let file = document.getElementById('file');

let inData = document.getElementById('inData');
let disData = document.getElementById('disData');
let img = document.getElementById('img');

let btn = document.getElementById('generate');

let nam = document.querySelector('.name');
let roll = document.querySelector('.roll');
let academy = document.querySelector('.academy');
btn.onclick = () => {
   
    inData.style.display = 'none';
    disData.style.display = 'block';
    nam.textContent = getName.value;
    roll.textContent = getRoll.value;
    academy.textContent = getAcademy.value;
    img.src = URL.createObjectURL(file.files[0]);

}
let backBtn = document.getElementById('back');
backBtn.onclick = () => {
    inData.style.display = 'block';
    disData.style.display = 'none';
}
// Card # 02
let disData2 = document.getElementById('disData2');

let anoBtn = document.getElementById('ano');
let nam2 = document.querySelector('.name2');
let roll2 = document.querySelector('.roll2');
let academy2 = document.querySelector('.academy2');
let img2 = document.getElementById('img2');
anoBtn.onclick = () => {
    disData2.style.display = 'block';
    disData.style.display = 'none';
    nam2.textContent = nam.textContent;
    roll2.textContent = roll.textContent;
    academy2.textContent = academy.textContent;
    img2.src = img.src;
}

let back2 = document.getElementById('back2');
let home = document.getElementById('home');

back2.onclick = () => {
    disData.style.display = 'block';
    disData2.style.display = 'none';
}
home.onclick = () => {
    inData.style.display = 'block';
    disData2.style.display = 'none';
}