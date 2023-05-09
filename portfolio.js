function myfunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector('button');
    if (element.textContent.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}
const textchange = document.querySelector("#class");
const values = ["Gamer", "GYM", "Coding", "Web Designing"];
let counter = 0;
setInterval(() => {
    textchange.textContent = values[counter];
    counter = (counter + 1) % values.lenght;
}, 3000);
