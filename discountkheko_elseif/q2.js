const age=75;
const price=5500;
if (age<12){
    console.log("The food is free.")
}
else if (age>=12 && age<=60){
    console.log("You need to pay the full price", price);
}
else{
    const total=price-(price*(50/100));
    console.log("The price you need to pay is",total);
}