const headphone={
    brand:"Sony",
    price:3000,
    color:"red"
};
Object.freeze(headphone);
headphone.sound="Optimum";
console.log(headphone);