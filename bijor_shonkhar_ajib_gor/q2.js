function oddrr(arr){
    const arr2=[];
    for (let i of arr){
        if (i%2!=0){
            arr2.push(i*2);
        }
    }
    return arr2;
}

console.log(oddrr([1, 2, 3, 4, 5]));
console.log(oddrr([7, 9, 11, 13]));
console.log(oddrr([2, 4, 6, 8, 10]));
