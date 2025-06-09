function div3(a){
    let mlt=1;
    for (let i of a){
        if (i%3==0){
            mlt*=i;
        }
    }
    return mlt;
}

console.log(div3([3,6,9,11,15,2,1]));