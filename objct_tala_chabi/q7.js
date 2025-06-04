const numbers={
    a:10,
    b:20,
    c:30,
    d:40
};
let sm=0;
for (const i in numbers){
    sm+=numbers[i];
}
console.log(sm);