/**
 * Created by subs on 16.06.28.
 */

/*
 4. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
 * Each person has properties `firstName`, `lastName` and `age`, as shown:
 var persons = [
 { firstName : "Gosho", lastName: "Petrov", age: 32 },
 { firstName : "Bay", lastName: "Ivan", age: 81 }
 ...
 ];
 */

var persons = [
    {firstName: "Gosho", lastName: "Petrov", age: 32},
    {firstName: "Bay", lastName: "Ivan", age: 81},
    {firstName: "Prot", lastName: "Tray", age: 31}
];

function youngestPersonName(a) {
    if (a != undefined && a.length > 0) {
        let j = 0;


        for (let i = 1; i < a.length; i++) {
            if (a[i].age <= a[j].age) {
                j = i;
            }
        }
        return console.log('Youngest person age = ' + a[j].age + ' and his name is - ' + a[j].firstName + ' ' + a[j].lastName );
    }


}


youngestPersonName(persons);
