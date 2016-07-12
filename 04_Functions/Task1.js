/**
 * Created by subs on 16.07.06.
 */

/*
 Task 1. FDS Create function conc which should concatenate two parameters a and b and return concatanating string using Function Declaration Statement (FDS). Call this function before its declaration. Test Data: a = “1”, b = “1”, result = “11” a = 1, b = 1, result = “11”  

 
 */
console.log(conc (1,1));
console.log(conc ('1','1'));

function conc(a, b) {

    return a.toString()+b;
    
}