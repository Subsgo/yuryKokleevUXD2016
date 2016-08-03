/**
 * Created by subs on 16.06.28.
 */
/*
 5. Write a function that groups an array of persons by age, first or last name.
 The function must return an associative array, with keys - the groups, and values -arrays with persons in this groups.
 Use function overloading (i.e. just one function).

 var persons = { ... };
 var groupedByFirstName = group(persons, "firstname");
 var groupedByAge = group(persons, "age");
 */

var persons = [
    {firstName: "Prot", lastName: "Petrov", age: 31},
    {firstName: "Prot", lastName: "Ivan", age: 81},
    {firstName: "Prot", lastName: "Tray", age: 31}
];

function createGroup(personArr) {
    if (arguments.length > 0 && Array.isArray(personArr)) {
        let res = {};
        for (let i = 0; i < personArr.length; i++) {
            switch (arguments[1]) {
                case 'firstName':
                {
                    if (personArr[i].firstName in res)
                        res[personArr[i].firstName].push(personArr[i]);
                    else
                        res[personArr[i].firstName] = [personArr[i]];
                    break;
                }
                case 'lastName':
                {
                    if (personArr[i].lastName in res)
                        res[personArr[i].lastName].push(personArr[i]);
                    else
                        res[personArr[i].lastName] = [personArr[i]];
                    break;
                }
                case 'age':
                {
                    if (personArr[i].age in res)
                        res[personArr[i].age].push(personArr[i]);
                    else
                        res[personArr[i].age] = [personArr[i]];
                    break;
                }
                default:
                {
                    return console.log('wrong group');
                }
            }
        }
        return res;
    }

};

console.log(createGroup(persons, "firstName"));
console.log(createGroup(persons, "age"));
console.log(createGroup(persons, "lastName"));