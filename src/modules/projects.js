

const sidebar = document.getElementById("sidebar");

const newTask = document.getElementById("new-task");
const inbox = document.getElementById("inbox");
const addPro = document.getElementById("add-pro");
const addB = document.getElementById("add");
var closeBtns = document.getElementsByClassName("close-pro");
var items = document.getElementsByClassName("item");

function closePro() { for (let i=0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}};



var input = document.getElementById("project");

function newItem() {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        var div = document.createElement("div");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.classList = "close";
        var itemT = document.createTextNode(input.value);
        li.appendChild(itemT);

        var icon = document.createTextNode("\u00D7");
        span.appendChild(icon);
        div.appendChild(li);
        div.appendChild(span);
        div.classList = "item";
        main.appendChild(div);
    };

    // main.innerHTML += `<div class="item"><li>${input.value}</li><span class="close">&times;</span></div>`;

};

function addNew() {
    addB.addEventListener("click", function() {
    newItem();
    // checkItem();    
    closePro();
    })};


    export {closePro, addNew };