//DOM - children
/*<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div>Пользователи:</div>
  <ul>
    <li>Маша</li>
    <li>Вовочка</li>
  </ul>

  <!-- комментарий -->

  <script>
    // ... ваш код
  </script>

</body>

</html>*/

document.documentElement.firstElementChild; // <Head>
document.body.firstElementChild.nextElementSibling; // <ul>
document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling; //second li


//Проверка существования детей
if (elem.childNodes[0]) {
    //узел elem пуст
}

//Вопрос по навигационным ссылкам
//1 - да
//2 - да (на самом деле нет)

//Выделите ячейки по диагонали
//ССылка на решение http://plnkr.co/edit/DM7lsk8fE2sQgHAKHLuQ?p=preview