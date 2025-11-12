//Sometimes we don’t want to use callbacks — we want to use Promises or async/await. That’s where promisify comes in: we wrap a callback-style function in a Promise.


/////////////////////////////       Promisify SetTimeout         ///////////////////////////////////////


/* function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`waited for ${ms / 1000} seconds`);
    }, ms);
  });
}

async function run() {
    const msg = await wait(2000);
    console.log(msg)
}

run(); */

//Callback hell
/* setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
        console.log("3");
    }, 1000);
  }, 1000);
}, 1000); */

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* async function run() {
  console.log("Wait 1...");
  await wait(1000);

  console.log("Wait 2...");
  await wait(1000);

  console.log("Wait 3...");
  await wait(1000);

  console.log("All done ");
}

run(); */

//Reason: Works perfectly in larger async flows

async function getData() {
    console.log("fetching data 1...");
    await fetch("https://jsonplaceholder.typicode.com/todos/1");

    await wait(2000);//pause for 2 sec

    console.log("fetching data 2...");
    await fetch("https://jsonplaceholder.typicode.com/todos/2");

    await wait(2000);

    console.log("Done!");
    
}

getData();