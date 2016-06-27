/**
 * Created by subs on 16.06.22.
 */
/*Strings

 1. Write a JavaScript function reverses string and returns it
 * Example: "sample" -> "elpmas".
 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: `((a+b)/5-d)`.
 * Example of incorrect expression: `)(a+b))`.
 3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

 **Example**: The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.

 The result is: 9.
 4. You are given a text. Write a function that changes the text in all regions:
 * `<upcase>text</upcase>` to uppercase.
 * `<lowcase>text</lowcase>` to lowercase
 * `<mixcase>text</mixcase>` to mix casing (random)

 **Example**: `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`

 The expected result: `We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`

 Regions can be nested.
 5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`
 6. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:

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

 7. Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and `[resource]` elements. Return the elements in a JSON object.

 For example from the URL `http://www.tut.by/forum/index.php` the following information should be extracted:


 {
 protocol: "http",
 server: "www.tut.by",
 resource: "/forum/index.php"
 }

 */