document.addEventListener("DOMContentLoaded", function() {
    const John = new TreeNode("John");
    const Jack = new TreeNode("Jack");
    const Jenny = new TreeNode("Jenny");
    const Jessie = new TreeNode("Jessie");
    const Jacky = new TreeNode("Jackie");

    John.descendents.push(Jack);
    Jack.descendents.push(Jessie, Jenny);
    Jenny.descendents.push(Jacky);

    console.log(John.descendents[0].descendents[0]);

    const Kermit = new TreeNode("Kermit");
    const Gonzo = new TreeNode("Gonzo");
    const Piggy = new TreeNode("Piggy");
    const Fuzzy = new TreeNode("Fuzzy");
    const Beast = new TreeNode("Beast");

    Kermit.descendents.push(Gonzo);
    Gonzo.descendents.push(Piggy);
    Piggy.descendents.push(Fuzzy, Beast);

    console.log(Kermit.descendents[0].descendents[0].descendents);

})

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
        function bloom() {
            return "I am blooming";
        }
    }
}
