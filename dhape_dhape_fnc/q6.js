function negSum(a){
    let sm=0;
    for (let i of a){
        if (i<0){
            sm+=i;
        }
    }
return sm;
}

console.log(negSum([-1,-2,3,-4,5]));