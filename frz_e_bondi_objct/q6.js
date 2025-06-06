const food={
    name:"Pizza",
    price:500,
    size:"Large"
};
Object.seal(food);
food.toppings="Mushroom";
console.log(food);