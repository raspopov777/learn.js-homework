//Длина коллекции после удаления элементов
/* Вот небольшой документ
<ul id="menu">
  <li>Главная страница</li>
  <li>Форум</li>
  <li>Магазин</li>
</ul>
*/

/*
var lis = document.body.getElementsByTagName('li');
document.body.innerHTML = "";
alert( lis.length );

Результат - null (правильно - 0)
*/

/*
var menu = document.getElementById('menu');
var lis = menu.getElementsByTagName('li');
document.body.innerHTML = "";
alert( lis.length );

Результат - undefined (правильно - 3 т.к. коллекция не изменилась, потому что она привязана не к BODY, а к menu)
*/



//Сравнение кол-ва элементов
/*
Для любого документа сделаем следующее:
var aList1 = document.getElementsByTagName('a');
var aList2 = document.querySelectorAll('a');
Что произойдёт со значениями aList1.length, aList2.length, если в документе вдруг появится ещё одна ссылка <a href="#">...</a>?
*/
// aList1 - сбросится значение (правильно - дополнится новым элементом <a>)
// aList2 - ничего


//Получить второй LI
/*
Есть длинный список ul:
<ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
  ...
</ul>
Как наиболее эффективно получить второй LI?
*/
let secondli = document.body.getElementsByTagName('ul')[0].getElementsByTagName('li')[1];
