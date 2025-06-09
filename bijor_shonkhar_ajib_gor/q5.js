function odd(arr){
    let arr2=[];
    for (let i of arr){
        if (i%2!=0){
        arr2.push(i-1);}
    }
    return arr2;

}

console.log(odd([2,3,5,6,7,9,13,12]));