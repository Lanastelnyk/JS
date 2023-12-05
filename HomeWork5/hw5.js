// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

 let rectangle = (a,b) => a*b


let result = rectangle(10,20)
console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r) =>  console.log(r * r * Math.PI)

circle(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (h,r) => 2 * Math.PI * h *r

let res = cylinder(2,4)
console.log(res)

// - створити функцію яка приймає масив та виводить кожен його елемент

let funArray = (array) => {
 for (const arrayElement of array) {
  console.log(arrayElement)
 }
}
let  arr = funArray([1,2,3,4,])



    // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createP = (text) => {

 document.write(`<p>${text}</p>`)

}

createP('hi')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let createUL = (text, namber) => {
 document.write(`<ul>`)
 for (let i = 0; i < namber ; i++) {
   document.write(`<li>${text}</li>`)

 }
 document.write(`</ul>`)
}

createUL('hi',3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let funcArr = (array) => {
   document.write(`<ul>`)
      for (const Element of array) {
         document.write(`<li>${Element}</li>`)
 }
          document.write(`</ul>`)
}

funArray([1,22,'hi'])

// Чому перша опція відображається в консолі, а друга в документі? що я зробила не так?
//
function list (array){
 document.write(`<ul>`)
 for (const arrayElement of array) {
  document.write(`<li>${arrayElement}</li>`)
 }
 document.write(`</ul>`)}

list([1,2,'true'])



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let funcObj = (array) => {
    for (const Element of array) {
                   document.write(`<div>${Element.id} ${Element.name} ${Element.age} </div>`)
        }
}

funcObj([
    {id:1,name: 'vasya', age: 31 },
    {id:2,name: 'petya', age: 30 },
    {id:3,name: 'kolya', age: 29},
    {id:4,name: 'max', age: 30 },
    {id:5,name: 'oleg', age: 28 },
    {id:6,name: 'andrey', age: 29},
    {id:7,name: 'masha', age: 30 },
    {id:8,name: 'olya', age: 31 },
    {id:9,name: 'max', age: 31 }
])


let funObjTwo = (array) =>{
    for (const Element of array) {
        for (const Key in Element) {
            document.write(`<div>${Key} ${Element[Key]}</div>`)
        }
    }
}


funObjTwo( users = [
    {id:1,name: 'vasya', age: 31 },
    {id:2,name: 'petya', age: 30 },
    {id:3,name: 'kolya', age: 29},
    {id:4,name: 'max', age: 30 },
    {id:5,name: 'oleg', age: 28 },
    {id:6,name: 'andrey', age: 29},
    {id:7,name: 'masha', age: 30 },
    {id:8,name: 'olya', age: 31 },
    {id:9,name: 'max', age: 31 }
])


// - створити функцію яка повертає найменьше число з масиву


let  fMinNumb = (array) => {
    let min = array[0]
    for (const Element of array) {
        if (Element < min){
            min = Element
        }
    } console.log(min)


}

 fMinNumb([1,3,5,7 ,0,-1, -100,-102])



 // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sum = (array) => {
    let sum = 0
    for (const Element of array) {
       sum =  sum + Element         // (suma += item;)

    }
    console.log(sum)
}
sum([1,2,10]) //->13


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (array, index1, index2) => {
    let num1 = array[index1];
    let num2 = array[index2];
    array[index1] = num2;
    array[index2] = num1;
    return array
}



console.log( swap([11,22,33,44], 0, 1 ))








