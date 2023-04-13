//Задание 1
//если месяц 1 или 2 то нумерация начинатся с воскресенья(0) иначе с субботы(0);
function weekday(year, month, day) {
    year = parseInt(year, 10);
	month = parseInt(month, 10);
	day = parseInt(day, 10);
	if (month < 3) {
		year -= 1;
		month += 10;
	} else
		month -= 2;
	return (day + 31 * month / 12 + year + year / 4 - year / 100 + year / 400) % 7;
}

let result = prompt("Введиие дату в формате:Год/Месяц/День").split("/");
alert(`день недели: ${Math.trunc(weekday(result[0],result[1],result[2]))}`)
//Найти арифметическое среднее элементов числового массива
const arr = [1,1,1,1];
let sumArr = 0;
arr.forEach(item => {
    sumArr += item;
});
console.log("арифметическое среднее:" + sumArr / arr.length);
//Задание 2
//Создайте функцию rgb(), которая будет принимать три числовых 
//аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.
function rgb(red = 0, green = 0, blue = 0) {
    return `rgb(${red},${green},${blue})`
}
console.log(rgb(12,34,255));
console.log(rgb());

//Задание 3