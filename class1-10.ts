// class Carr {
//   company: string = "";
//   modelYear: string = "0";
//   color: string = "";
//   //class ka code sirf aik dafa hi call hota hai
// } //ies mai function call nhi ho sakta + ic mai fuction call kerny ky lea constructor ka istamal karty hai + class ko maximum recall kerty hain
// var Car1 = new Carr();
// Car1.color = "Black";
// Car1.modelYear = "2023";
// Car1.company = "honda";
// console.log(Car1);

// console.log("........constructor.........");
// class Car {
//   company: string = "";
//   modelYear: string = "0";
//   color: string = "";

//   constructor(_company: string, _color: string, modelYear: string) {
//     this.company = _company;
//     this.color = _color;
//     this.modelYear = modelYear;
//   }
//   star() {
//     console.log("start car");
//   }
// }

// var bmw = new Car("bmw", "black", "2332");

// var hondai = new Car("hondai", "white", "5554");

// console.log(bmw);
// console.log(hondai);
// console.log("..............................................");

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

class Students {
  name:string;
  gender:string;
  rollNumber:number;
  class:number;
  session:string;

constructor (n:string, g:string, r:number, c:number, s:string)
{
  this.name=n
  this.gender=g
  this.rollNumber=r
  this.class=c
  this.session=s
}
// Here we create the method or function to have a good statement of the data and call it later
myFunction():string // myFunction is a self made name. u can select any name  
{
      // this is a statement to b output whenever this function runs/called
  return `Student's Name is ${this.name} and its Gender is ${this.gender} having Roll Number ${this.rollNumber} in the ${this.session} Session. `
}
}
// Now we give arguments  to  the function or  Method named myFunction as mentioned above
var Student1 = new Students("Asif", "Male", 110, 10, "Morning")  // new is predefied  word,
var Student2 = new Students("Adnan", "Male", 111, 10, "Evening")    // Students is class name
var Student3 = new Students("Kashif", "Male", 112, 10, "Night")
var Student4 = new Students("Zahid", "Male", 113, 10, "General")

// here we  create an empty  array in which we push the data to take output
var studentArray:Students[]=[]
studentArray.push(Student1)
studentArray.push(Student2)
studentArray.push(Student3)
studentArray.push(Student4)

//check one by one consoles
//console.log(Student1)

console.log(studentArray)
//console.log(studentArray)

// to  change the name of any student ...give command as
// Student1.name="Zeeshan"
// console.log(Student1)
// when cosoled.. the Name Adnan is changed to Zeeshan

// call of function now
console.log(Student1.myFunction()) 
console.log(Student2.myFunction())
console.log(Student3.myFunction())
console.log(Student4.myFunction())
// this will result out put as "Student's Name is Asif and its Gender is Male having Roll Number 110 in the Morning Session. "
