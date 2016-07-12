/**
 * Created by subs on 16.07.12.
 */
/*
 Task 11. Function as a Method Create object literal Employee with the following properties: name: “Ann”, work – function which display message "I am "+ this.name +". I am working..." in console.log. Test Data Employee.work() result in console "I am Ann. I am working..."
*/

var employee  = {
    name: 'Ann',
    work: function () {
        return console.log('I am '+ this.name +'. I am working...');
    }
};
employee.work();