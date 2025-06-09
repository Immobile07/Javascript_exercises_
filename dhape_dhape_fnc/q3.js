function age(a){
    if (a<18){
        return 18;
    }
    else if (a>=18 && a<=45){
        return a;
    }
    else{
        return 45;
    }
}

console.log(age(92));
console.log(age(33));
console.log(age(16));