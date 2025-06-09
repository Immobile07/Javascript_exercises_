function inc(incomeAmount){
    if (incomeAmount<=50000){
        return 10;
    }
    else if (incomeAmount>50000 && incomeAmount<=100000){
        return 20;
    }
    else if (incomeAmount>100000 && incomeAmount<=200000){
        return 30;
    }
    else{
        return 40;
    }
}
console.log(inc(199000));
console.log(inc(10000));
console.log(inc(100000));
console.log(inc(500000));