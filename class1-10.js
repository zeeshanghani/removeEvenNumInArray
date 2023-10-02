"use strict";
class Carr {
    constructor() {
        this.company = "";
        this.modelYear = "0";
        this.color = "";
        //class ka code sirf aik dafa hi call hota hai
    }
} //ies mai function call nhi ho sakta + ic mai fuction call kerny ky lea constructor ka istamal karty hai + class ko maximum recall kerty hain
var Car1 = new Carr();
Car1.color = "Black";
Car1.modelYear = "2023";
Car1.company = "honda";
console.log(Car1);
console.log("........constructor.........");
class Car {
    constructor(_company, _color, modelYear) {
        this.company = "";
        this.modelYear = "0";
        this.color = "";
        this.company = _company;
        this.color = _color;
        this.modelYear = modelYear;
    }
    star() {
        console.log("start car");
    }
}
var bmw = new Car("bmw", "black", "2332");
var hondai = new Car("hondai", "white", "5554");
console.log(bmw);
console.log(hondai);
console.log("..............................................");
// class friends {
//   name: string;
//   age: number;
//   work: string;
//   hobies: string[];
//   constructor(name: string, age: number, work: string, hobies: string[],public department?:string,public adress?:string) {
//     this.name = name;
//     this.age = age;
//     this.work = work;
//     this.hobies = hobies;
//   }
// }
// var zee = new friends("zeeshan", 35, "ctwo", ["coding", "gapshup"]);
// var Shafi = new friends("Shafi", 35, "ctwo", ["coding", "gapshup"],"","Railway");
// var mani = new friends("Mani", 35, "ctwo", ["coding", "gapshup"],"Opreational");
// console.log(zee);
// console.log(Shafi,mani);
