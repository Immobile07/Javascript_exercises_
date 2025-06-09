function charge(ojon){
    if (ojon<10){
        return 100;
    }
    else if (ojon>=10 && ojon <20){
        return 300;
    }
    else if (ojon>=20 && ojon <50){
        return 1000;
    }
    else{
        return ((ojon-50)*100)+1000;
    }
}

console.log(charge(9));
console.log(charge(20));
console.log(charge(19));
console.log(charge(57));