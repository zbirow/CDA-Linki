(function getAttribute() {
    'use strict'
///////Dane///////
let page = document.querySelector('.pagination > .active > a');
let links = document.querySelectorAll('a.thumbnail-link');
let ifra = `iframe src="https://ebd.cda.pl/620x395/`
let ifre = `" width="620" height="395" style="border:none" frameBorder="0" scrolling="no" allowfullscreen name="v2"`
let treu = `/iframe`
let play = document.querySelector('span.folder-area');
let cxd = document.createElement("div");
let pageNumber = page ? parseInt(page.textContent) : 1;

// Funkcja do generowania tablicy liczb co 36
function generateNumbers(start, count) {
let numbers = [];
for (let i = start; i < start + count; i++) {
numbers.push(i);
}
return numbers;
}
let ar;
    // Określenie tablicy w zależności od numeru strony
switch (pageNumber) {
       case 1:
    ar = generateNumbers(1, 36);
    break;
case 2:
    ar = generateNumbers(37, 36);
    break;
case 3:
    ar = generateNumbers(73, 36);
    break;
case 4:
    ar = generateNumbers(109, 36);
    break;
case 5:
    ar = generateNumbers(145, 36);
    break;
case 6:
    ar = generateNumbers(181, 36);
    break;
case 7:
    ar = generateNumbers(217, 36);
    break;
case 8:
    ar = generateNumbers(253, 36);
    break;
case 9:
    ar = generateNumbers(289, 36);
    break;
case 10:
    ar = generateNumbers(325, 36);
    break;
case 11:
    ar = generateNumbers(361, 36);
    break;
case 12:
    ar = generateNumbers(397, 36);
    break;
case 13:
    ar = generateNumbers(433, 36);
    break;
case 14:
    ar = generateNumbers(469, 36);
    break;
case 15:
    ar = generateNumbers(505, 36);
    break;
case 16:
    ar = generateNumbers(541, 36);
    break;
case 17:
    ar = generateNumbers(577, 36);
    break;
case 18:
    ar = generateNumbers(613, 36);
    break;
case 19:
    ar = generateNumbers(649, 36);
    break;
case 20:
    ar = generateNumbers(685, 36);
    break;
case 21:
    ar = generateNumbers(721, 36);
    break;
case 22:
    ar = generateNumbers(757, 36);
    break;
case 23:
    ar = generateNumbers(793, 36);
    break;
case 24:
    ar = generateNumbers(829, 36);
    break;
case 25:
    ar = generateNumbers(865, 36);
    break;
case 26:
    ar = generateNumbers(901, 36);
    break;
case 27:
    ar = generateNumbers(937, 36);
    break;
case 28:
    ar = generateNumbers(973, 36);
    break;
case 29:
    ar = generateNumbers(1009, 36);
    break;
case 30:
    ar = generateNumbers(1045, 36);
    break;
case 31:
    ar = generateNumbers(1081, 36);
    break;
case 32:
    ar = generateNumbers(1117, 36);
    break;
case 33:
    ar = generateNumbers(1153, 36);
    break;
case 34:
    ar = generateNumbers(1189, 36);
    break;
case 35:
    ar = generateNumbers(1225, 36);
    break;
case 36:
    ar = generateNumbers(1261, 36);
    break;
case 37:
    ar = generateNumbers(1297, 36);
    break;
case 38:
    ar = generateNumbers(1333, 36);
    break;
case 39:
    ar = generateNumbers(1369, 36);
    break;
case 40:
    ar = generateNumbers(1405, 36);
    break;
case 41:
    ar = generateNumbers(1441, 36);
    break;
case 42:
    ar = generateNumbers(1477, 36);
    break;
case 43:
    ar = generateNumbers(1513, 36);
    break;
case 44:
    ar = generateNumbers(1549, 36);
    break;
case 45:
    ar = generateNumbers(1585, 36);
    break;
case 46:
    ar = generateNumbers(1621, 36);
    break;
case 47:
    ar = generateNumbers(1657, 36);
    break;
case 48:
    ar = generateNumbers(1693, 36);
    break;
case 49:
    ar = generateNumbers(1729, 36);
    break;
case 50:
    ar = generateNumbers(1765, 36);
    break;
case 51:
    ar = generateNumbers(1801, 36);
    break;
case 52:
    ar = generateNumbers(1837, 36);
    break;
case 53:
    ar = generateNumbers(1873, 36);
    break;
case 54:
    ar = generateNumbers(1909, 36);
    break;
case 55:
    ar = generateNumbers(1945, 36);
    break;
case 56:
    ar = generateNumbers(1981, 36);
    break;
case 57:
    ar = generateNumbers(2017, 36);
    break;
default:
    ar = generateNumbers(1, 36);
    break;
};
///////Copy///////
cxd.className="cxd"
play.appendChild(cxd);
for (var g = 0; g<links.length; g++){
let player = document.querySelector('div.cxd');
let build = document.createElement("div");
build.id= "holi"
build.style= "margin-top:-15px;"
player.appendChild(build);
build.innerHTML = `<h3>Odcinek `+ar[g]+`</h3><sup id="`+ar[g]+`zbirow" style="color:#24282A; font-size: 0%;"><span><</span>`+ifra+links[g].href.split('/').slice(4)+ifre+`<span>><</span>`+treu+`<span>></span></sup>`+
`<button class="btn" style="margin-left:140px; margin-top:-50px;" type="button" data-copy-id="`+ar[g]+`zbirow">Copy</button>`}
///////DC Link///////
let fix = document.querySelector('span.folder-area');
let bui = document.createElement("div");
bui.className="cxfd"
bui.innerHTML = `<button class="btn" style="margin-left:140px; margin-top:-50px;" type="button" data-copy-id="Copyzbirow">Copy All</button>`
fix.appendChild(bui);
for (var d = 0; d<links.length; d++){
let br = document.querySelector('div.cxfd');
let build = document.createElement("div");
br.appendChild(build);
build.innerHTML = `<span>`+ar[d]+`<span>.<</span>`+links[d]+`></span>`}
///////Style///////
let dendo = document.getElementsByClassName('panel-heading smoke')[0];
let elect = document.createElement("div");
elect.innerHTML = `<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.cxfd {
display: none;
}
.cxfd.open {
display: block;
}
.cxd.open {
display: none;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style><label class="switch">
  <input class="zswit" type="checkbox" checked>
  <span class="slider round"></span>
</label>`
dendo.appendChild(elect);
///////Switch///////
const jstoggle = document.getElementsByClassName('zswit')[0];
jstoggle.addEventListener('click', () => {
document.querySelector("div.cxd").classList.toggle('open');
document.querySelector("div.cxfd").classList.toggle('open');
});
})();
//////Copy Script///////////
function copyEvent(elementId) {
const element = document.getElementById(elementId);
if (!element) {
return;
}
const textarea = document.createElement('textarea');
textarea.style.position = 'fixed';
textarea.style.opacity = '0';
textarea.value = element.innerText;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);
showCopyNotification();
}
function showCopyNotification() {
const notification = document.createElement('div');
notification.innerText = 'Skopiowano!';
notification.style.position = 'fixed';
notification.style.top = '20px';
notification.style.right = '20px';
notification.style.padding = '10px 20px';
notification.style.backgroundColor = '#28a745';
notification.style.color = '#fff';
notification.style.fontSize = '16px';
notification.style.borderRadius = '5px';
notification.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
notification.style.zIndex = '1000';
notification.style.opacity = '0';
notification.style.transition = 'opacity 0.3s ease';
document.body.appendChild(notification);
// Pokaż powiadomienie
setTimeout(() => {
notification.style.opacity = '1';
}, 100);
// Ukryj powiadomienie po 2 sekundach
setTimeout(() => {
notification.style.opacity = '0';
setTimeout(() => {
document.body.removeChild(notification);
}, 200);
}, 2000);
}
function initializeCopyButtons() {
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
button.addEventListener('click', function() {
const elementId = button.getAttribute('data-copy-id');
const copy = document.querySelector('button[data-copy-id="'+elementId+'"]');
copy.textContent = "Skopiowano";
copyEvent(elementId);
});
});
const copyButton = document.querySelector('button[data-copy-id="Copyzbirow"]');
copyButton.addEventListener('click', function() {
const divs = document.querySelectorAll('.cxfd.open div');
const linksWithNumbers = [];
divs.forEach(div => {
const text = div.textContent.trim(); // Pobierz tekst i usuń białe znaki
linksWithNumbers.push(text); // Dodaj tekst do tablicy
});
const allLinks = linksWithNumbers.join('\n');
navigator.clipboard.writeText(allLinks).then(() => {
showCopyNotification();
copyButton.textContent = "Skopiowano";
}).catch(err => {
console.error('Błąd podczas kopiowania:', err);
});
});
}
window.addEventListener('load', initializeCopyButtons);
