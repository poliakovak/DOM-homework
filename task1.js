//Дан элемент #elem. Добавьте ему класс www.
let elem = document.getElementById('elem');
elem.classList.add('www');
console.log(elem);

//Дан элемент #elem. Удалите у него класс www.
elem.classList.remove('www');
console.log(elem);

//Дан элемент #elem. Проверьте наличие у него класса www.
let checkedClass = elem.classList.contains('www');

//Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
if(checkedClass === true){
    elem.classList.remove('www');
}
else{
    elem.classList.add('www');
}
console.log(elem);
//Дан элемент #elem. Узнайте количество его классов.
let elem2 = document.getElementById('newElem');
elem2.classList.add('www');
elem2.classList.add('name');
elem2.classList.add('color');
let length = elem2.classList.length
console.log(length);
//Дан элемент #elem. Выведите последовательно алертом его классы.
let classNames = elem.classList;

for (let i = 0; i < classNames.length; i++) {
	alert(classNames[i]);
}