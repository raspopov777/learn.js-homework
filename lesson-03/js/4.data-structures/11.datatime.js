//Создайте дату
/*
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная. Выведите его на экран.
*/
alert(new Date(2012, 1, 20, 3, 12));


//Имя дня недели
/*
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
*/
const date = new Date(2012,0,3);
const days = ['Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', 'Пн'];

function getWeekDay(date) {
    return days[date.getDay()]
}

alert( getWeekDay(date) );


//День недели в европейской нумерации
/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
*/
function getLocalDay(date) {
    const day = date.getDay();
    return day === 0 ? 7 : day;
}
alert( getLocalDay(date) );


//Последний день месяца
/*
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца. Параметры:
year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(0);
    return date.getDate();
}
alert( getLastDayOfMonth(2012, 1) );


//Сколько секунд уже прошло сегодня?

//Сколько секунд до завтра?