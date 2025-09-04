
function getPromiseTimeout(cb, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve("done");
        }, time);
    });
}


promise.then(() => {
    console.log("Promise Resolved");    
})

async function myFun() {
    await getPromiseTimeout(() => {}, 5000);
}

//promisify setTimeout


function vidhi() {
    console.log("Vidhi Function");
    
}


const vidhiPromisified = new Promise((res, rej) => {
    vidhi();
    res("done");
});

vidhiPromisified.then((d) => {
    console.log("Vidhi Promisified");
});