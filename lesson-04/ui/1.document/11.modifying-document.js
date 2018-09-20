//1. createTextNode vs innerHTML
/*Есть пустой узел DOM elem.

Одинаковый ли результат дадут эти скрипты?

Первый:

elem.appendChild(document.createTextNode(text));
Второй:

elem.innerHTML = text;
Если нет – дайте пример значения text, для которого результат разный.*/

// Если в text будут теги, то они не распарсятся, а останутся просто текстом



//2. Удаление элементов
/*Напишите полифилл для метода remove для старых браузеров.
Вызов elem.remove():
Если у elem нет родителя – ничего не делает.
Если есть – удаляет элемент из родителя.*/

function remove() {
    let el = this;
    if (this.parentNode.length) {
        this.parentNode.removeChild(el)
    }
    return el;
}
//надо было добавить проверку на то есть ли метод remove() и собственно добавить этот метод
//Ниже рабочий вариант
if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}


//3. insertAfter
// https://jsfiddle.net/d7jc3nLp/


//4. removeChildren
// https://jsfiddle.net/dnomprsz/6/


//Создайте дерево из объекта


//Дерево