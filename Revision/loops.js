//for loop

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(i + ' * ' + j + ' = ' + i*j);
  }
}

 
let myArr = ["flash", "batman", "superman"];

for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  // console.log(element);
}

//break and continue

for(let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log(`Detcted 5`);
        //break;
        continue;
    }
    //console.log(`Value of i is ${i}`);
}


//while loop

let i = 0;
while (i <= 10) {
    console.log(` Value of i is ${i}`);
   // i++;
   i = i + 2; 
}

//do while

let score = 1;
do {
    console.log(`Score is ${score} `);
    score++;
} while (score <= 10);
