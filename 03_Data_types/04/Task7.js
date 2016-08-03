/**
 * Created by subs on 16.06.28.
 */
/*
 7. Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and `[resource]` elements. Return the elements in a JSON object.

 For example from the URL `http://www.tut.by/forum/index.php` the following information should be extracted:


 {
 protocol: "http",
 server: "www.tut.by",
 resource: "/forum/index.php"
 }
 http://site.com:81/path/page?a=1&b=2#hash
 
 */

var str = `http://www.tut.by/forum/index.php`,
    url;
if (typeof document === 'undefined') {
    var urlapi = require('url');
    url = urlapi.parse(str);
}
else {
    url = document.createElement('a');
    url.href = str;
}

var res = {
    protocol: url.protocol,
    server: url.hostname,
    resource: url.pathname
};
res = JSON.stringify(res, null,4);
console.log(res);