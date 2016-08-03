/**
 * Created by subs on 16.06.28.
 */
/*
 3. Write a function that makes a deep copy of an object. The function should work for both primitive and reference types.
 */
/*there is a problem with 
 https://github.com/cronvel/tree-kit
 "The clone produced are perfect independant copy in 99% of use case,
  but there is one big limitation: method that access variables in the parent's scope."*/
function myConstructor()
{
    var myPrivateVar = 'secret' ;

    return {
        myPublicVar: 'public!' ,
        getMyPrivateVar: function() {
            return myPrivateVar ;
        } ,
        setMyPrivateVar( value ) {
            myPrivateVar = value.toString() ;
        }
    } ;
}

var tree = require( 'tree-kit' ) ;
var o = myConstructor() ;
var myClone = tree.clone( o , true ) ;
myClone.setMyPrivateVar('!changed!');
myClone.myPublicVar = '!PUBLICITY!';
console.log(myClone.getMyPrivateVar() + ' ' + o.getMyPrivateVar());

console.log(o);
console.log(myClone);