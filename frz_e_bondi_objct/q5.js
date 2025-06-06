const animal={
    Name:"Tiger",
    location:"Sundarban"
};
Object.freeze(animal);
animal.Name="Lion"
console.log(animal)