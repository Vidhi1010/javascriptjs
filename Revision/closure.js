function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
z(); // This will log 7 to the console


function a() {
    var x = 10;
    function b() {
        var y = 20;
        function c() {
            console.log(x, y);
        }
        c();
    }
    b();
}

a();