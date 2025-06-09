function oddCheck(arr){
    let sm=0;
    let cnt=0;
    for (const i of arr){
        if (i%2!=0){
            sm+=i;
            cnt++;
        }
    }
    return sm/cnt;
}
cn=oddCheck([2,3,5,6,7,9,13,12]);
console.log(cn.toFixed(2));