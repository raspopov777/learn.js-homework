const goods = ['1', '2', '3'];

//Получить последний элемент массива
let lastItem = goods[goods.length - 1];

//Добавить элемент в конец массива
goods.push('new');

//Создание массива
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Рэгги');