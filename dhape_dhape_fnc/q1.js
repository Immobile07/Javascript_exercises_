function od(a){
    let sm=0;

    for (let i of a){
        if (i%2!=0){
            sm+=i;
        }
        else{
            continue;
        }
    }
    return sm;
}

console.log(od([5,15,8,7]));