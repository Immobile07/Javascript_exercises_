function divFour(a){
    let sm=0;
    for (let i of a){
        if (i%4==0){
            sm+=i;

        }
        else{
            continue;
        }
    }
    return sm;
}

console.log(divFour([2,4,5,7,8,32,45]));