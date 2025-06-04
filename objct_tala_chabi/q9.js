const building={
    floors:10,
    address:{
        street:"Main Road",
        city:"Dhaka"
    },
    type:"Commercial"
};
for (const i in building){
    console.log(i,building[i]);
}