// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [
    10,100,'nick',6,9,true,false,'qwe',45,23, 'fhj']
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let book1 = {
    title : 'book1',
    pageCount : 123,
    genre : 'history'
}

let book2 = {
    title : 'book2',
    pageCount : 321,
    genre : 'drama'
}

let  book3 = {
    title : 'book3',
    pageCount : 13,
    genre : 'fantasy'
}

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let books1 = {
    title : 'book1',
    pageCount : 123,
    genre : 'history',
    authors :  [{
        name: 'Jorg',
        age: 30
    }
    ]
}


let books2 = {
    title: 'book1',
    pageCount: 123,
    genre: 'history',
    authors: [
        {
            name: 'Nick',
            age: 45
        }
    ]
}


let books3 = {
    title : 'book3',
    pageCount : 13,
    genre : 'fantasy',
    authors : [
        {name : 'Kate',
        age :19
        }
    ]
}


    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let user = [
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 125},
    {name :'Nick', username : 'QWE',password : 463},
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 589},
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 963},
    {name :'Nick', username : 'QWE',password : 123},
    {name :'Nick', username : 'QWE',password : 741}
]
console.log(user [0] . password)
console.log(user[1]['password'])
console.log(user[2]['password'])
console.log(user[3] ["password"])
console.log(user[4] ["password"])
console.log(user[5] ["password"])
console.log(user[6] ["password"])
console.log(user[7] ["password"])
console.log(user[8] ["password"])
console.log(user[9] ["password"])
console.log(user[10] ["password"])

// - Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 1;
if (x !== 0){
    console.log('True');
} else {
    console.log('False');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 48;
if(time >= 0 && time <= 15 ){
    console.log('first part');
}
 else if( time >= 16 && time <= 30 ){
    console.log('second part');
}
 else if( time >= 31 && time <= 45 ){
    console.log('thid part');
}
else if( time >= 46 && time <= 59 ){
    console.log('fourth part');
}
else {
console.log('out of 60 minutes');
}


// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 40;
if (day >=1 && day <=10){
    console.log('first part');
}else if (day >=11 && day <=20){
    console.log('second part');
}
else if (day >=21 && day <=31){
    console.log('thid part')
}
else {
    console.log('out of month')
}


// класти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let schedule = 7;
switch (schedule){
    case 1:
        console.log('monday');
        break;
    case 2 :
        console.log('tuesday');
        break;
    case 3 :
            console.log('wednesday');
            break;
    case 4 :
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7 :
        console.log('sunday');
        break
}

// Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.

let number1 = 10;
let number2 = 10;

if (number1 === number2) {
    console.log('same');
}
else if (number1 > number2){
    console.log(number1)
}
else {
    console.log(number2)
}

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let a = '5';
if (a === '' || a === 0 || a === -0 || a === null || a === undefined  || a === false  ){
    a = 'default';
}
    console.log(a)


    // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray);

if (coursesAndDurationArray[0]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[0]['title'] +' good')
}

if (coursesAndDurationArray[1]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[1]['title'] + ' good')
}

if (coursesAndDurationArray[2]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[2]['title'] + ' good')
}

if (coursesAndDurationArray[3]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[3]['title'] + ' good')
}

if (coursesAndDurationArray[4]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[4]['title'] + ' good')
}

if (coursesAndDurationArray[5]['monthDuration'] > 5){
    console.log(coursesAndDurationArray[5]['title'] + ' good')
}


