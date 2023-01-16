// let a = 430;
// let b = 300;

// // a>b ? console.log('True') : console.log('False');
// if (a>b) {
//     console.log('True');
// } else{
//     console.log('False');
// }

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried:  false
// };
// console.log(obj.age);


// let arr = ['plum.png' , 'orange.jpg' , 'apple.bmp']
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c'
// };
// const b = 'b';
// arrObj [b] = '1234'; 

// console.log(arrObj.b);

// const obj = {
//     "Anna": 500,
//     "Alice": 800
// };

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are you eighteen?", "18");
// console.log(typeof(answer));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'ivan';

// alert(`Привет, ${user}`);

// console.log(4 + +'6');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// const   isChecked = false,
//         isClose = false;

// console.log(isChecked || !isClose);        

const numberOfFilms = +prompt("How many movies have you seen?", '');


const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

const a = prompt('One of the last watching movies', ''),
        b = prompt('Your rating', ''),
        c = prompt('One of the last watching movies', ''),
        d = prompt('Your rating', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;         

console.log(personalMovieDB);