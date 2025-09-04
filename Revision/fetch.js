//fetch is a built-in function used to make HTTP requests (like GET, POST, PUT, DELETE) to servers — often to retrieve or send data. It’s a modern replacement for the older XMLHttpRequest (XHR).


//fetch takes two parameters:
//url → The endpoint you’re calling (string).
//options (optional) → An object where you specify method, headers, body, etc.

//Example 1: Simple GET Request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())  // response converted to JSON
  .then(data => console.log(data))    // handle the data
  .catch(error => console.error("Error:", error));

//Example 2: POST Request with JSON Data

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello World",
    body: "This is my first post!",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Post created:", data))
  .catch(error => console.error("Error:", error));
