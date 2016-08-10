/**
 * Created by subs on 16.08.02.
 */
/*
 Task 1.

 Create a function constructor for Person. Each Person must have:
 1. properties firstname, lastname and age
 1.1. firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
 1.2. age must always be a number in the range (0, 150), inclusive
 1.2.1. the setter of age can receive a convertible-to-number value
 1.3. if any of the above is not met, throw Error

 2. property fullname
 2.1. the getter returns a string in the format 'FIRST_NAME LAST_NAME'
 2.2. the setter receives a string is the format 'FIRST_NAME LAST_NAME'
 2.2.1. it must parse it and set firstname and lastname

 3. method introduce() that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'

 4. all methods and properties must be attached to the prototype of the Person


 */

function Person(fn, ln, ag) {
    var firstname = '',
        lastname = '',
        fullname = '',
        age = 0;

    this.setFirstname(fn);
    this.setLastname(ln);
    this.setAge(ag);

}
Person.prototype.setFirstname = function (fn) {
    if (fn !== undefined)
        if (fn.length < 20 && fn.length > 3 && fn.match(/^[a-zA-Z]+$/))
            this.firstname = fn;
        else throw new Error('this firstname shall not pass = ' + fn);
}
Person.prototype.setLastname = function (ln) {
    if (ln !== undefined)
        if (ln.length < 20 && ln.length > 3 && ln.match(/^[a-zA-Z]+$/))
            this.lastname = ln;
        else throw new Error('this lastname shall not pass = ' + ln);
}
Person.prototype.setAge = function (ag) {
    if (ag !== undefined) {
        ag = parseInt(ag, 10);
        if (ag >= 0 && ag <= 150)
            this.age = ag;
        else throw new Error('this age shall not pass =' + ag);
    } else throw new Error('No age defined');
}
Person.prototype.setFullname = function (str) {
    if (str !== undefined) {
        str = str.split(' ');
        this.setFirstname(str [0]);
        this.setLastname(str [1]);
    }
}
Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}
Person.prototype.getFirstname = function () {
    return this.firstname;
}
Person.prototype.getLastname = function () {
    return this.lastname;
}
Person.prototype.getAge = function () {
    return this.age;
}
Person.prototype.introduce = function () {
    return 'Hello! My name is '+ this.getFullname() + ' and I am ' + this.getAge() + '-years-old';

}


//var person0 = new Person('asdf','hdfsh',151);
var person = new Person('asfd', 'fasdf', 31);
console.log(person.getAge(), person.getFirstname(), person.getLastname());
console.log(person.getFullname());
console.log(person.introduce());
person.setFullname('test Test 352');
console.log(person.getFullname());
console.log(person.introduce());



    
