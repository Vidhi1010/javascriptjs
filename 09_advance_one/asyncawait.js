//async function always returns a promise
//await pauses the execution of its surrounding async function until the promise is settled

/* function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
} */

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve(200);
    }, 2000);
  });
}

async function getAllData() {
    console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
}

//IIFE
/* 
-avoid polluting the global namespace- sometimes while creating functions unecessary get created that is not required, so when we use those function as iife the will execute for one time and the get deleted

-execute an async function - don't need to create unnecessary function like in above case getAllData()

*/
(async function () {
    console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
})();