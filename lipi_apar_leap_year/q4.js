function checkLeap(arr){
    let cnt=0;
    for (let i of arr){
        if (i%100==0){
            if (i%400==0){
                cnt+=1;
            }
        }
        else if (i%4==0){
            cnt+=1;
        }

    }
    return cnt;
}

console.log(checkLeap([1900, 2001, 2021, 2100]))
console.log(checkLeap([1900, 2100, 2200, 2300]))
console.log(checkLeap([1600, 2000, 2400]))
console.log(checkLeap([2000, 2001, 2004, 2100]))
