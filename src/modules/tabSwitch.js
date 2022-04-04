import {closeItem, checkItem, newItem } from './inbox.js';


const inbox = document.getElementById("inbox");
var main = document.getElementById("main");


function inboxF() {   
    inbox.addEventListener("click" , function() {
        main.innerHTML = `<h2 class="title">Inbox</h2>
      <div id="add-task"><input type="text" id="task" placeholder="new tasks...">
        <button id="add" type="button">Add</button></div>
    <div class="item"><li>Hit the gym</li><span class="close">&times;</span></div>
    <div class="item checked"><li>Pay bills</li><span class="close">&times;</span></div>`   
    closeItem();
    checkItem();
    newItem();
});
}

export {inboxF}