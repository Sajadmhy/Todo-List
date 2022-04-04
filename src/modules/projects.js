

const sidebar = document.getElementById("sidebar");
var closeBtns = document.getElementsByClassName("close-pro");
const addP = document.getElementById("add-pro-btn");



function closePro() { for (let i=0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}};



var inputP = document.getElementById("project");

function newItemP() {
    if (inputP.value === "") {
        alert("You must write something!");
    } else {
        var div = document.createElement("div");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.classList = "close-pro";
        var itemP = document.createTextNode(inputP.value);
        li.appendChild(itemP);

        var icon = document.createTextNode("\u00D7");
        span.appendChild(icon);
        div.appendChild(li);
        div.appendChild(span);
        div.classList = "item-pro";
        sidebar.appendChild(div);
    };

};

function addNewP() {
    addP.addEventListener("click", function() {
    newItemP();
    closePro();
    })};


    export {closePro, addNewP};