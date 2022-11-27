const sumAll = function(num1,num2) {
    if (typeof num1 === "number" && typeof num2 === "number" && num1>=0 && num2>=0){
        let sum=0;
        nbOperations = Math.abs(num2-num1)+1;
        if (num2>num1){
            for (let i=0; i< nbOperations; i++){
                sum+= num1+i;
            }
        }
        else {
            for (let i=0; i< nbOperations; i++){
                sum+= num2+i;
            }
        }
        return sum;
    }
    else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
