function duplicate(arr){
    let arr2=[];
    for (let i of arr ){
        if (arr2.includes(i)===true){
            continue;
        }
        else{
            arr2.push(i);
        }
    }
    return arr2;

}

console.log(duplicate(['abul','babul','cabul','abul','babul','dabul']));
console.log(duplicate([1,5,61,5,87,7,5,81,61]));