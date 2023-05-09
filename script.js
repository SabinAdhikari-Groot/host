document.getElementById("parent").innerHTML = ("Something Else");

document.getElementById("parent").style.cssText("background-color:red; color:black; text-align:center;");

document.getElementsByClassName("exercise")[0].innerHTML = ("I am class selector");

document.getElementById("parent1").style.cssText = ("background-color:aqua; color:brown");

document.getElementsbyClassName("exercise")[2].innerHTML = ("I am index 3");

document.getElementsbyTagName("h1")[1].style.cssText = ("background-color:red; color:white;");

document.querySelector("h2").style.cssText = ("text-align:center; text-transform:lowercase;");\

constcahnge = document.querySelectorAll("h3");
for (i = 0; i <= change.length; i++) {
    change[i].innerHTML = ("I am Iron Man.");
}

function myFunction() {
    document.open();
    document.write("<h1>Hello world!</h1>");
    document.close();
}