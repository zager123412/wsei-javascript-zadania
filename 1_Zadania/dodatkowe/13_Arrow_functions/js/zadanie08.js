console.log("Zadanie 08:");
const dog = {
    type: "Mammal",
    name: "",
    setName: function(newName) {
        this.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);
