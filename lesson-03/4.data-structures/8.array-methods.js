//Добавить класс в строку
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    let names = obj.className;

    if(names.indexOf(cls) === -1) {
        obj.className +=' ' + cls;
    }
}

//Функция removeClass
function removeClass (obj, cls) {
    let arrClases = obj.className.split(' ');
    const clsIndex = arrClases.indexOf(cls);

    if(clsIndex !== -1) {
        arrClases.splice(clsIndex, 1);
        obj.className = arrClases.join(' ');
    }
}

//Сортировать в обратном порядке
var arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

//Скопировать и отсортировать массив
const newArr = arr.concat();
newArr.sort((a, b) => a - b);

//Сортировка объектов
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];

people.sort((a, b) => a.age - b.age);

//Вывести односвязный список
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListWhile(list) {
    let current = list;
    let result = '';
    while(current) {
        result += current.value;
        current = current.next;
    }
    return result;
}

function printListRecursion(list) {
    if (list.next) {
        return list.value.toString() + printListRecursion(list.next)
    }
}

function printReversalListWhile(list) {
    let current = list;
    let result = '';
    while(current) {
        result = current.value + result;
        current = current.next;
    }
    return result;
}

function printReversalListRecursion(list) {
    if (list.next) {
        return printReversalListRecursion(list.next) + list.value.toString()
    }
    return list.value;
}