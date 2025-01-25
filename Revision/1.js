function myFun() {
  //hositing, x = undefined
  console.log("Fun: Hello World", x);

  {
    console.log("Block: Hello World", x);
    var x = 10;
  }

  // if(true) {

  //   console.log("If: Hello World", x);

  //   switch(true) {
  //     case true:
  //       console.log("Switch: Hello World", x);
  //       break;
  //   }
  // }
}

myFun();

// local: let, const
// functional: var
// Hositing

// local, functional, global
function outer() {
  function inner() {
    // var x = undefined;

    var x = 10;
    console.log(x);
  }

  inner();
  console.log(x); //error
}

outer();

/* 
    function myFun() { //hositing, x = undefined
  let x = 10;

  console.log("Fun: Hello World");

  function inner() {
    var x= 10;
    console.log("Inner: Hello World",x);
  }

  // if(true) {

  //   console.log("If: Hello World", x);

  //   switch(true) {
  //     case true:
  //       console.log("Switch: Hello World", x);
  //       break;
  //   }
  // }
}

myFun();

// local, functional, global

// local: let, const
// functional: var

// Hositing

function outer() {
  
  function inner() {// var x = undefined;
    var x = 10;
    console.log(x);
  }

  inner();
  console.log(x);
}

outer(); */
