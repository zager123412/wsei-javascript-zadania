///import { link } from "fs";
console.log("Zadanie 07:");
const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function () {
    for(let i=0; i<this.websites.length; i++)
      this.links.push("https://"+this.websites[i]+".com");
}


let app = new App();
app.generateLinks();
console.log(app.links);
