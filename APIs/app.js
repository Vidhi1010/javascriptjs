//const URL = "google.com";

/* let promise = fetch(URL);
console.log(promise); */

/* setTimeout(() => {
    console.log("hello")
}, 2000);  */

//callback- don't pass function with paranthesis as an argument

/* function sum (a, b) {
    console.log(a + b);
}
function calculator(a, b , sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum); */

//The fetch api provides an interface for fetching sending/receiving resources. It is use to request and response objects. The fetch() method is used to fetch a resourse(data)

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


/* const getFacts = async () => {
  console.log("getting data ...");
  let response = await fetch(URL);
  console.log(response); //json format
  let data = await response.json();
  //console.log(data[0].text);
  //factPara.innerText = data[0].text;
  factPara.innerText = data[1].text;
}; */

function getFacts() { 
    fetch(URL)
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[0].text;
    })
}

btn.addEventListener("click", getFacts);

//json() method: returns a second promise that revolves with the result of parsing the response body text as json, input is json,output is js object)
