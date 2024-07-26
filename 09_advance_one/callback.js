function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(1, 2, sum);

//Callback hell: Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)

/* let age = 19;
if(age >= 18) {
    if(age>= 60) {
        console.log("middle");
    } else {
        console.log("middle");
    }
}else {
    console.log("child");
} */

/* function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}

getData(1);
getData(2);
getData(3); */

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//callback hell- pyramid of doom
/* getData(1, () => {
  console.log("getting data2 ...");
  getData(2, () => {
    console.log("getting data3 ...");
    getData(3);
  });
}); */

//promise chaining
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(res);
  });
