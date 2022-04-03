

const main = document.getElementById("main");
const newTask = document.getElementById("new-task");
const inbox = document.getElementById("inbox");
const addPro = document.getElementById("add-pro");
const addB = document.getElementById("add");

var closebtns = document.getElementsByClassName("close");
var items = document.getElementsByClassName("item");
var i;
var j;

function closeItem() { for (i=0 ; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}};

function checkItem() {for (j=0; j< items.length; j++) {
    items[j].addEventListener("click", function() {
        this.classList.toggle('checked');
        });
}};

closeItem();
checkItem();

var input = document.getElementById("task");

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
        li.appendChild(span);
        div.appendChild(li);
        div.classList = "item";
        main.appendChild(div);




    // main.innerHTML += `<div class="item"><li>${input.value}</li><span class="close">&times;</span></div>`;
        closeItem();
        checkItem();
}};

addB.addEventListener("click", function() {
    newItem();
    });
