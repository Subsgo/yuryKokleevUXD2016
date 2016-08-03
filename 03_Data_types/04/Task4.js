/**
 * Created by subs on 16.06.28.
 */
/*
 4. You are given a text. Write a function that changes the text in all regions:
 * `<upcase>text</upcase>` to uppercase.
 * `<lowcase>text</lowcase>` to lowercase
 * `<mixcase>text</mixcase>` to mix casing (random)

 **Example**: `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`

 The expected result: `We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`

 Regions can be nested.
 */

function Str(txt) {
    if (txt == undefined)
        this.text = `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`;
    else
        this.text = txt;
}

 Str.prototype.changeText = function () {
        this.text = this.text.replace(/<upcase>(.+?)<\/upcase>/g, function (match, str) {
            return str.toUpperCase();
        });
        this.text = this.text.replace(/<lowcase>(.+?)<\/lowcase>/g, function (match, str) {
            return str.toLowerCase();
        });
        this.text = this.text.replace(/<mixcase>(.+?)<\/mixcase>/g, function (match, str) {
            for (let i = 0; i < str.length; i++) {
                if (Math.random() >= 0.5)
                    str = str.replace(str[i], str[i].toUpperCase());
                else
                    str = str.replace(str[i], str[i].toLowerCase());
            }
            return str;
        });
    }

Str.prototype.printResult = function () {
        console.log(this.text);
    }


str = new Str();
str.printResult();
str.changeText();
str.printResult();