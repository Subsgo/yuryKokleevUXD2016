/**
 * Created by subs on 16.06.28.
 */
/*
 5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`
*/
function Str(txt) {
    if (txt == undefined)
        this.text = `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`;
    else
        this.text = txt;
}



Str.prototype.printResult = function () {
    console.log(this.text);
}

Str.prototype.changeToNbsp = function () {
    this.text = this.text.replace(/ /g, '\u00a0');
}

str = new Str();
str.printResult();
str.changeToNbsp();
str.printResult();