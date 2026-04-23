'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    //check for strict equality, if same -> true
    if(val1 === val2){
        return true;
    }

    //check if both values are not the same type, if NOT the same -> false 
    if(typeof val1 !== typeof val2){
        return false;
    }

    //check if both values are objects, if not -> false
    if((typeof val1 === 'object') !== (typeof val2 === 'object')){
        return false;
    }    

    //check if both values are arrays, if not -> false
    if((Array.isArray(val1) !== (Array.isArray(val2)))){
        return false;
    }

    //ARRAYS
    //check if values are both arrays, if same, continue
    if((Array.isArray(val1)) && (Array.isArray(val2)))
    {
        //check the lenght of each array, if length is different -> false
        if(val1.length !== val2.length){
            return false;
        }
        //itterate through the arrays to see if the elements at each index are equal
        for (let i = 0; i < val1.length; i++)
        {
            //recursive call checks the equality of the elements at each index
            //if the function returns not equal, then the arrays are not deep equal
            if(!(deepEqual(val1[i], val2[i]))){
                return false;
            }
        }
        //each element in both arrays at each index are deep equal
        return true;
    }

    //OBJECTS
    //check to see if values are objects, if same. continue
    if(typeof val1 === 'object' && typeof val2 === 'object'){
        
        //check for null objects. Both values need to be NOT null. If one object is not null -> false
        if(!(val1 && val2)){
            return false;
        }
        
        //check for number of properties for each object, if different -> false 
        if((Object.keys(val1).length) !== (Object.keys(val2).length)){
            return false;
        }
        //if same number of properties, make an array of the keys for the properties
        let propArray = Object.keys(val1);
        for(let i =0; i < propArray.length; i++)
        {
            //iterate though array and check if the propertry values match for each object
            const k = propArray[i];
            //recursive call to check if properties in objects are equal, if any property doesn't match -> false
            if(!(deepEqual(val1[k], val2[k]))){
                return false;
            }
        }
        //both values are objects with same number of properties and each value matches
        return true;
    } 

    //base case for recrusive call to ensure the last comparison is check for strict equality 
    if(val1 === val2){
        return true;
    }
    //last check
    if(val1 !== val2){
        return false;
    }
}
// Don't add or change anything below this comment.
module.exports = deepEqual;