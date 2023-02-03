// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else  {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = '50';
// switch (num) {
//     case '49':
//         console.log('Wrong');
//         break;
//     case '100':
//         console.log('Wrong');
//         break;
//     case '50':
//         console.log('True');
//         break;
//     default:
//         console.log('Not in this time');
//         break;
// }

// const cheese = 'Cheddar';

// if (cheese) {
//     console.log('Ура! Есть сыр для приготовления бутерброда.');
// } else {
//     console.log('Сегодня нет сыра для бутерброда.');
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('I am full!');
// } 

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'gdg');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Everebody is full!');
// } else {
//     console.log('We are going out');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Everebody is happy!');
// } else {
//     console.log('We are going out');
// }


// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);    
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//         for (let j = 0; j < i; j++) {
//             result +='*';
//         }
//     result +='\n';
// }  

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`third level: ${k}`);
//         }    
//     }
// }
// let num = 5;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// for (let i = 20; i > 9; --i) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);           
// }

// for (let i = 2; i <= 10; i++){    
//     if (i % 2 == 0) {           
//     console.log(i);           
// }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;
// while (num++ < 16) {
//     console.log(num);
//     num++;
// }

// let numbers = [5, 6, 7, 8, 9, 10];

// alert( numbers );

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);

//     return result;

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//             console.log(data);
//     return data;

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i];
    // }
    // console.log(result);
    // return result;

//     const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //     b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a != '' && b != '' && a.length <50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }    
// // }
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');
// let i = 0;
//     while (i<2) {
//         i++,
//     }


// if (personalMovieDB.count < 10) {
//     console.log('not a lot');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//     console.log('not bad');
// } else if (personalMovieDB.count >= 30) {
//     console.log('good');
// } else {
//     console.log('err');
// }
// console.log(personalMovieDB);




// let ourPlanetName;
// let currentUser;



// //First task
// let num; // Создали переменную
// num = 3; // Присвоили переменной значение 3
// console.log(num); // Вывели значение в консоль

// //Second task
// let a = 10; //Создали переменную a 
// let b = 2; // Создали переменную b
// console.log(a + b, a - b, a * b, a % b); // Вывели в консоль их сумму, разность, произведение и частное (результат)

// //Third task
// let c = 15; //Создали переменную c 
// let d = 2; //Создали переменную d 
// let result = c + d;  //Создали переменную result и присвоили ей значение суммы c и d
// console.log(result); // Вывели значение result в консоль

// //Fourth task
// let a = 10; //Создали переменную a 
// let b = 2; // Создали переменную b
// let c = 5; //Создали переменную с
// console.log(a + b + c); // Вывели в консоль их сумму

// //Fifth task
// let a = 10; //Создали переменную a 
// let b = 2; // Создали переменную b
// let c; //Создали переменную с
// c = a - b;
// let d = 7; // Создали переменную d
// let result = c + d;  //Создали переменную result и присвоили ей значение суммы c и d
// console.log(result); // Вывели значение result в консоль

// let a;
// console.log(typeof b);

// let age;

// console.log(age); // выведет "undefined"


// "" + 1 + 0   1
// "" - 1 + 0   -1
// true + false  false
// 6 / "3"   2
// "2" * "3"  6
// 4 + 5 + "px"  45px
// console.log("$" + 4 + 5);
// "4" - 2  2
// "4px" - 2 2px
// "  -9  " + 5 -95
// "  -9  " - 5  -14
// console.log(null + 1);
// console.log(" \t \n" - 2);
// " \t \n" - 2

// let a = 1;
// let b = 2;

// console.log(14 % 5 ); // 12

// let number = prompt('Number = ', '');
// if (number > 0) {
//     alert('1');
// } else if (number < 0) {
//     alert('-1');
// } else {
//     alert('0');
// }



// result = (a + b < 4) ? 'little': "a lot of";

// let message = (login == 'employee') ? 'HI' :
// (login == 'director') ? 'Hello' :
// (login == '') ? 'No login' :
// '';

// Задания
// 1)Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test

// 2)Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при


// let test = prompt('Type the number', '');
// if (test != 0) {
//     alert("Right");
// } else {
//     alert('Wrong');
// }
// let test = prompt('Type in the number', ' '); 
// if (test == 0) {
//     alert("Right");
// } else {
//     alert('Wrong');
// }
// function calc(a, b) {
//     return (a + b);    
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(7, 11));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('hello');
// };
// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for(let i= 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// if(age <=14 && age >=90);



// let answer = prompt('Who is there', '');

// if (answer === "Director") {
//     let pass = prompt('Password?', '');

//     if (pass === "Director") {
//         alert("hello");
//     } else if (answer === null || answer === '' ) {
//         alert('Cancel');
//     } else {
//         alert ("wrong answer");
//     }
// } 
// else if (answer === null || answer === '' ) {
//     alert('Cancel');

// } else {
//     alert ("wrong answer");
// }

// 1)Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = prompt('Input the number', '');

// if (a > 0 && a < 5) {
//     alert("Right");
// } else {
//     alert("Wrong")
// }



// 2)Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// a = 2;

// if (a === 0 || a === 2) {
//     console.log(a + 7);
// } else {
//     console.log(a / 10);
// }




// 3)Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = +prompt('Input a', '');
// let b = +prompt('Input b', '');

// if (a <= 1 && b >= 3) {
//     alert(a + b);
// } else {
//     alert(a - b);
// }



// 4)Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = +prompt('Input a', '');
// let b = +prompt('Input b', '');

// if (a > 2 && a < 11  || b >= 6 && b < 14) {
//     alert("Right");
// } else {
//     alert("Wrong");
// }


// 5) console.log(5 && 3)
// 6) console.log(0 && 3)
// 7) console.log(5 || 3)
// 8) console.log(0 || 3)
// 9) console.log(0 || 3 && 6)
// 10) console.log(0 && 3 || 6)


// Задачи:

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.



// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.


// const userName = prompt('Input name', '');
// function returnStrict(userName) {
//     return  ('Hello, ' + userName);
// }
// returnStrict();
// alert(returnStrict(userName));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }

//     return str;
// }
// getMathResult(10, 5);

// let a = 1;

// switch (a) {
//     case 1: 
//     case 2: console.log('Two'); break;
//     case 3: console.log('Three');
//     default: console.log('Wrong answer');
// }

// let i = 0;
// while (++i < 5) {alert( i )};

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0 ){
//     console.log(i);
//     }
// } 

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//     }

// let i = 0;
// while (i++ < 3) console.log( `number ${i}!` ); 




// let n = +prompt ('Number of reapeats', '');

// nextPart: for (let i = 2; i <= n; i++) {
    
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPart ;
//     }
//         alert(i);
        
    
// } 


// Реши эти задачи через цикл for.
// 1)Выведите столбец чисел от 1 до 100.
// for (i = 0; i <= 100; i++) {

//     if (i % 2 == 0 && i !== 0) {    
//     console.log(i); 
//     }
// }      
// 2)Выведите столбец чисел от 11 до 33.
// 3)Выведите столбец четных чисел в промежутке от 0 до 100.
// 4)С помощью цикла найдите сумму чисел от 1 до 100.

// for (i = 1; i <= 100; i++) {
    
//     console.log(i); 
//     }


// nextPart: for (let i = 1; i <= 100; i++) {
    
//         for (let j = 2; j < i ; j++) {
//             if (i % j == 0) continue nextPart ;
//         }
//             console.log(i);           
        
//     } 
    
    // let sum = 0;
    // for (let i = 1; i <= 100; i++) {
    //     sum += i;      
    // }
    // console.log(sum);
    
let num = 4;
switch (num) {
    case 1: console.log('Winter'); break;
    case 2: console.log('Spring'); break;
    case 3: console.log('Summer'); break;
    case 4: console.log('Autumn'); break;
    default: console.log('No match');
}    

// function abc() {
//     console.log('f');
// }
// abc();

// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('Родители разрешили?');
//     }
// }
// function checkAge(age) {
//     return (age > 18) ? true : confirm('ParentsWereConfirmed');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('ParentsWereConfirmed');
// }

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = +prompt('input x', '');
// let n = +prompt('input n', '');
// if (n < 1) {
//     alert('степень ${n} не поддерживается, введите натуральное число');
// } else {
//     alert( pow(x, n) );
// }


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }  
    ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
    );