/**
 * Created by subs on 16.06.27.
 */
/*
 3. Write a function that finds all the occurrences of word in a text
 * The search can case sensitive or case insensitive
 * Use function overloading
 */
var txt = 'safdsf sdfsafd sdafsf Abc asfsd fsdaf fsa f safabcssdf abc sdafsf afdsf a fs abc',
    word = 'abc',
    result;

function findWord(text, word, caseInSens = 'i') {

    if (arguments.length > 1 && typeof text == 'string') {
        if (word != null) {
            if (caseInSens === '') {
                word = new RegExp('\\b' + word + '\\b', 'g' + caseInSens);
                return text.match(word);
            } else {
                word = new RegExp('\\b' + word + '\\b', 'g' + caseInSens);
                return text.match(word);
            }
        }
    }

}
result = findWord(txt, word);

if (result != undefined) {
    console.log(result.length);
    console.log(result);
}
txt = '';

result = findWord(txt, word, '');

if (result != undefined) {
    console.log(result.length);
    console.log(result);
}