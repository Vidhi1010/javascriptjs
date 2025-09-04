function click(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function() {
        console.log("Button clicked " + ++count + " times");
    })
}

click();