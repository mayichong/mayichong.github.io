function myFunction() {
    var believe = "BELIEVE";
    var believebold = believe.bold();
    var colorbold = believebold.fontcolor("red");
    var phrase = "I never " + colorbold + " in luck without effort, so I create luck by myself, day by day.";
    document.getElementById("displayinfo").innerHTML =phrase;
}

