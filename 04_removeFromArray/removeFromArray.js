const removeFromArray = function(array,...valueToRemove) {
    for (let value of valueToRemove){
        indexValueToRemove = array.findIndex(element => element === value);
        if (indexValueToRemove !== -1) {
            array.splice([indexValueToRemove],1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
