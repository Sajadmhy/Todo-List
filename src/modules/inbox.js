

const main = document.getElementById("main");
const addB = document.getElementById("add");
var closebtns = document.getElementsByClassName("close");
// var items = document.getElementsByClassName("item");
var items = ['hit the gym' , 'pay bills'];
function closeItem() { for (let i=0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}};

function checkItem() { 
    for (let j=0; j < items.length; j++) {
    items[j].addEventListener("click", function(e) {
        if (e.target.classList.contains("checked")== true) {
            this.classList.remove("checked");
        } else {
            this.classList.add("checked");
        };
    })}
};

    // for (let j=0; j < items.length; j++) {
    // items[j].addEventListener("click", function() {
    //     this.classList.toggle("checked");
    //     });
// }};




function newItem() {
    var input = document.getElementById("task");
    if (input.value === "") {
        alert("You must write something!");
    } else {
        // var div = document.createElement("div");
        // var li = document.createElement("li");
        // var span = document.createElement("span");
        // span.classList = "close";
        // var itemT = document.createTextNode(input.value);
        // li.appendChild(itemT);

        // var icon = document.createTextNode("\u00D7");
        // span.appendChild(icon);
        // div.appendChild(li);
        // div.appendChild(span);
        // div.classList = "item";
        // main.appendChild(div);
        items.push(input.value);
        populateItems();
    };

};

function addNew() {
    addB.addEventListener("click", function() {
    clearDiv(); 
    newItem();
    closeItem();
    });
};

    // items[items.length-1].addEventListener("click", function() {
    //     this.classList.toggle("checked");
    //     });

    // })};

function clearDiv() {
    document.getElementById("items").innerHTML="";
}
    


function populateItems() {
    for (let k=0; k< items.length; k++) {
        var div = document.createElement("div");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.classList = "close";
        var itemT = document.createTextNode(items[k]);
        li.appendChild(itemT);

        var icon = document.createTextNode("\u00D7");
        span.appendChild(icon);
        div.appendChild(li);
        div.appendChild(span);
        div.classList = "item";
        main.appendChild(div);  
    }
};



    export {closeItem, checkItem, addNew, populateItems };