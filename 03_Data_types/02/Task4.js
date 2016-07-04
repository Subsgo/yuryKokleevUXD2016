/**
 * Created by subs on 16.06.27.
 */
/*
 4. Write a function to count the number of divs on the web page
 */




function  getNumberDivs() {
    var number = document.getElementsByTagName('div');
    return number.length;
}

alert(getNumberDivs());