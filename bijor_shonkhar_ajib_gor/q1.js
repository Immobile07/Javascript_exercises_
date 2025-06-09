function evenavg(arr){
    let sm=0;
    let cnt=0;
    for (let i of arr){
        if (i%2==0){
            sm+=i;
            cnt+=1;
        }
    }
    return sm/cnt;
}

console.log(evenavg([1, 2, 3, 4, 5, 6]))
console.log(evenavg([10, 20, 30, 40]))
console.log(evenavg([1, 3, 5, 7, 9]))
console.log(evenavg([0, 2, 4, 7, 9]))
console.log(evenavg([-2, -4, 3, 8, 11]))