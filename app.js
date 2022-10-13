
// const fruit = ["apple","bananas","kiwi"];
// const [first,second,third] = fruit;
// console.log(first);
// console.log(second);
// console.log(third);

// const person = {
//     name:"John Doe",
//     age:45
// };

// const {name:memberName,age:memberAge} = person;
// console.log(memberName,memberAge);

// function sum(a,b,...values) {
//     let sum = a + b;
//     values.forEach(value => sum += value);
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6))

// function getDate() {
//     const date = new Date();
//     const formatDate = `${date.getFullYear()} - ${date.getMonth()-1} 
//     - ${date.getDate()}`;
//     const formattedTime = `${date.getHours()} : ${date.getMinutes()}`;
//     return `${formatDate} ${formattedTime}`;
// }

// function logMessage(message,prefix = getDate()){
//     console.log(`${prefix} - ${message}`);
// }

// logMessage("I like turtles");
// logMessage("I like turtles","👑");

// const translatedLanguages = [
//     ...new Set(
//         posts
//             .filer(post=>post.author="John Doe" && post.view > 100)
//             .map(post => post.langs)
//             .reduce((acc,cur) => acc.concat(cur))
//     )
// ]
// const specialProperty = "nationality";
// const firstName = "John";
// const lastName = "Doe";

// const person = {
//     firstName,
//     lastName,
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     [specialProperty]:"German"
// }
// console.log(person);

// const specialProperty = "nationality";

// const person = {
//     name : "John",
//     age : 22,
//     isAdmin : false,
//     [specialProperty]:"German",
// }
// console.log(person);
// //expect {name:"John",age:22,isAdmin:false,nationality:German},

// function makeObject(key,value) {
//     return {[key] : value};
// }
// const user = makeObject("username","John");
// const dog = makeObject("breed","Labrador");
// console.log(user);
// console.log(dog);


// let args = []
// const Permessions = {
//     granted(...params){
//         args.push([...params])
//     }
// }

// class User {}

// const user = new User();

// function isUserAdmin(){
//     return Permessions.granted(user,'admin')
// }
// console.log(args);


// const createPet = function (name) {
//     let sex;
  
//     const pet = {
//       // setName(newName) is equivalent to setName: function (newName)
//       // in this context
//       setName(newName) {
//         name = newName;
//       },
  
//       getName() {
//         return name;
//       },
  
//       getSex() {
//         return sex;
//       },
  
//       setSex(newSex) {
//         if (typeof newSex === 'string' &&
//           (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
//           sex = newSex;
//         }
//       }
//     };
  
//     return pet;
//   }
  
//   const pet = createPet('Vivie');
//   pet.getName();                  // Vivie
  
//   pet.setName('Oliver');
//   pet.setSex('male');
//   pet.getSex();                   // male
//   pet.getName(); 


// function myFun(a,b,...manyMoreArgs){
//     console.log('a',a);
//     console.log('b',b);
//     console.log('manyMoreArgs',manyMoreArgs)
// }

// myFun("one","two","three","four","five","six")

// function sum(...args) {
//     let total = 0;
//     for (const arg of args) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));
//   console.log(sum(1, 2, 3, 4));

// function sum(...args){
//     let total = 0;
//     for(const arg in args){
//         total += arg
//     }
//     return total;
// }
// console.log(sum(1,2,3));
// console.log(sum(4,5,6))


// class Car{
//     constructor(brand){
//         this.carName = brand
//     }

//     present(){
//         return 'I have a' + this.carName
//     }
// }

// class Model extends Car {
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod
//     }

//     show(){
//         return this.present() + ', it is a' + this.model
//     }
// }

// let myCar = new Model("Ford","Mustang");
// document.getElementById("h1").innerHTML = myCar.show();


// function A (){
//     console.log("A was called");return undefined;
// }

// function B(){
//     console.log("B was called");return false;
// }

// function C(){
//     console.log("C was called");return "foo";
// }

// console.log(B() ?? C());

// const count = 0;
// const text = "";

// const qty = count || 42;
// const message = text || "hi";

// console.log(qty);
// console.log(message);

// let foo;
// let someDummyText = foo || 'Hello!';
// console.log(someDummyText)

// const foo = null ?? 'default string';
// console.log(foo);

// const bazz = 0 ?? 42
// console.log(bazz);

// const nullValue = null;
// const emptyValue = "";
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyValue ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA);
// console.log(valB);
// console.log(valC);

// const login = () => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve("login in")
//         }, 2000)
        
//     });
// } 

// const fetchingData = () => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve("fetching data...")
//         }, 2000)
        
//     })
// }

// const getFriendList = () => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             resolve("user Friend List arrived")
//         }, 2000)
        
//     })
// }


// const getUserPhoto = () => {
//     return new Promise ((resolve,reject)=> {
//         setTimeout(() => {
//             resolve("user photo arrived")
//         }, 2000)
        
//     })
// }

// const showHomeFeed = (showUpdate) => {
//     console.log("new feed shoow");
// }

// const buildUi = async () => {
//     const loginData = await login();
//     console.log(loginData);
//     const fetchingDatafromApi = await fetchingData();
//     console.log(fetchingDatafromApi);
//     const gettingFriendList = await getFriendList();
//     console.log(gettingFriendList);
//     const getUserPhotos = await getUserPhoto();
//     console.log(getUserPhotos);
//     showHomeFeed(getUserPhotos);
// }

// buildUi().catch((error) => {
//     console.log(error);
// });


// login()
// .then((response) => {
//     console.log("fist data",response);
//     return fetchingData();
// })
// .then((response) => {
//     console.log("second data",response);
//     return getFriendList();
// })
// .then((response)=>{
//     console.log("third data",response);
//     return getUserPhoto();
// })
// .then((response) => {
//     console.log("fourth data",response);
//     return showHomeFeed(response);
// })
// .catch((error) => {
//     console.log("Inside Catch",error)
// })

// login()
// fetch()
// newFeedUpdate()

// const login = () => {
//     return new Promise( (resolve,reject) => {
//         setTimeout(() => {
//             resolve("Start Login")
//         }, 3000)   
//     })
// }

// const FetchingData = () => {
//     return new Promise ( (resolve,reject) => {
//         setTimeout(() => {
//             resolve("Start Fetching Data");
//         }, 5000)
//     })
// }

// const newFeedUpdate = () => {
//     console.log("Welcome to Facebook")
// }

// login()
// .then((res) =>  {
//     console.log("start login in ",res)
//     FetchingData()
//     .then ((res) => {
//         console.log("Fetch ... ",res);
//         newFeedUpdate();
//     })
// })

// const promiseTesting = new Promise ( (resolve,reject) => {
//     setTimeout(() => {
//         resolve("resolved");
//     }, 2000) 
// }) 

// promiseTesting
//     .then((response) => {
//         console.log("Inside Catch ",response)
//     })
//     .catch((err) => {
//         console.log("error ",err);
//     })

// function map(f,arr) {
//     let result = [];
//     for(let i = 0 ; i<arr.length;i++){
//         result[i] = f(arr[i])
//     }
//     return result;
// }    

// const f = function(x){
//     return x * x * x;
// }

// const numbers = [2,3,5,8,9,10,4]
// const cube = map(f,numbers);
// console.log(cube);

// function myfun(myObject) {
//     myObject.favDrink = "Milo";
// }

// const me = {
//     job : "web development",
//     favFood : "ice cream",
//     favDrink : "water",
// }

// console.log(me.favDrink);
// myfun (me)
// console.log(me.favDrink);

// function myfun (myarr){
//     myarr[0] = 12;
// }

// const arr = [1]
// console.log(arr[0])
// myfun (arr);
// console.log(arr[0]);

// function foo (i) {
//     if(i < 0) {
//         return;
//     }
//     console.log(`begin ${i}`);
//     foo(i-1)
// }
// foo(3);

// function addSquare() {
    
//     function square () {
//         let c = 10;
//     }
//     square();
//     console.log(c);
//     // return square(a) + square(b)
// }

// console.log(addSquare());

// function three(x){
//     function two(y){
//         function one(z){
//             console.log(x+y+z);
//         }
//         one(1);
//     }
//     two(2)
// }
// three(3);

// function resolveAfter2seconds () {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve("resolved")
//         }, 2000);
//     })
// }

// async function asyncCall() {
//     console.log("calling1");
//     const result = await resolveAfter2seconds();
//     console.log(result);
//     console.log("calling2")
// }
// asyncCall();


// const p = new Promise ( (res,rej) => {
//     res (1);
// })

// async function asyncReturn(){
//     return p;
// }

// function basicReturn () {
//     return Promise.resolve(p);
// }

// function resolveAfter2Seconds() {
//     console.log("starting slow promise")
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//            resolve("slow") 
//            console.log("slow promise is done");
//         }, 2000);
//     })
// }


// function resolveAfter1second(){
//     console.log("starting fast promise");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("fast")
//             console.log("fast promise is done");
//         }, 1000)
        
//     })
// }


// async function sequentialStart (){
//     console.log("==SEQUENTIAL START ==");

//     //1 Execution gets here almost instantly
//     const slow =  resolveAfter2Seconds();

//     const fast =  resolveAfter1second();


//     console.log(await slow);
//     console.log(await fast);
// }

//sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

