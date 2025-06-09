function checkodd(arr){
    let fnd=false;
    for (let i of arr){
        if (i%2!=0){
            fnd=true;
            break;
        }
    }
    if (fnd==true){
        console.log("Odd numbers found");
    }
    else{
        console.log("No odd numbers found.");
    }
}
checkodd([1, 5, 2, 9, 3]);
checkodd([-10, -5, -2, -15]);
checkodd([ 10, 0, 20]);