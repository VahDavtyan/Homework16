//HomeWork 16

// 1.
// 1.Declare two variables: admin and name.
// 2.Assign the value "John" to name.
// 3.Copy the value from name to admin.
// 4.Show the value of admin using alert (must output “John”).


let admin;
let name;
name = "John"
admin = name;
alert (admin);

//2.Create a variable to store the name of a current visitor to a website, after declaring it change
//the name to 'John'

let NewUserName = "John";


//3.What's the difference between using “let” and “var”

/* Երբ որ մենք փոփոխական ենք հայտարարում var ով, այն գտնում է global scope -ում, 
իսկ let ով հայտատարելու ժամանակ այն գործում է local սկզբունքով։ 
Կարող ենք օրինակ բերել funcion - ը․ կամ loop - ը, որոնք ունեն իրենց սեփական տարածքաը (body), 
որի մեջ և կան ինչ-որ լուծումներ */



//4.Declare array with constant and try to change array's values.

const arr = [9, 6, 7, 2, 9, 3];

arr.push(1, 5,)

arr.reverse();

console.log(arr);


//5.Write for loop with var and let variables. describe the difference as much as possible.


for (let j = 0; j < 10; j++) {
    console.log(j);                 // ReferenceError: i is not defined, որովհետև let -ը local է։
};
    console.log("anasun", j)


for (var i = 0; i < 10; i++) {
    console.log(i);                 // current code, իսկ var -ը գլոբալ, դրա համար դուրս գտնվող consol.log -ը
};                                  // տեսնում է;
    console.log("anasun", i)


"use strict";

function x() {
    for (i = 0; i <= 10; i++) {  
        console.log(i);
    };
};
    console.log(i)




    //6.Is var and let the same on the global scope?

    //NO! Էս հարցի մանրամասն պատասխանը 3 հարցի body - ի մեջ ա Սենսեյ։  


    
//7.Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.
    

function strJoin(str) {
    if ( str === "Py") 
    {
      return str;
    }
    return "Py" + str;
  }
  
  console.log(strJoin('cnogenol'));


  //8.Write a JavaScript program to capitalize the first letter of each word of a given string.

  
  function capital(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital("զարթուցիչը ջեռուցիչից հեռու դիր."));



  //9.Write function with default parameters.


let user = function(a, b ) {
  return a * b
};

console.log(user(5, 6))


function sum (c, d) {
  return c + d
};

console.log(sum(5, 5 ));



(function(e, f) {
  console.log( 20 / 5 );
})();




