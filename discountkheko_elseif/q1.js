const start=6500;

if (start>6000){
    const disc=15;
    const price= start-(start*(disc/100));
    console.log(price)
}
else if (start>3000 && start<=6000){
    const disc=5;
    const price= start-(start*(disc/100));
    console.log(price);
}
else{
    console.log(start);
}