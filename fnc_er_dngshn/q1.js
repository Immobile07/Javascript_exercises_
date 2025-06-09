function check(a){
    if (a.length%2!=0){
        return 'odd';
    }
    else{
        return 'even';
    }
}

b=[1,2,3,4,5,6,7,8]
console.log(check(b));
b=[1,2,3,4,5,6,7,8,9]
console.log(check(b));