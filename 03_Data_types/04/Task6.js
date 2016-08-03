/**
 * Created by subs on 16.06.28.
 */
/*
 6. Write a function that extracts the content of a html page given as text. The function should return anything
 that is in a tag, without the tags:

 ```html
 <html>
 <head>
 <title>Sample site</title>
 </head>
 <body>
 <div>text<div>more text</div>and more...</div>in body
 </body>
 </html>
 ```

 Result: `Sample sitetextmore textand more...in body`

 */

function Str(txt) {
    if (txt == undefined)
        this.text = `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`;
    else
        this.text = txt;
}

Str.prototype.removeTag = function () {

    this.text = this.text.replace(/<.+?>/g,'');
    this.text = this.text.replace(/\n|\t/g,'');
}
Str.prototype.printResult = function () {
    console.log(this.text.toString());
}


str = new Str(`<html>
<head>
<title>Sample site</title>
</head>
<body>
<div>text<div>more text</div>and more...</div>in body
</body>
</html>`);
str.printResult();
str.removeTag();
str.printResult();