(()=>{const e=document.getElementById("main"),t=(document.getElementById("new-task"),document.getElementById("inbox"),document.getElementById("add-pro"),document.getElementById("add"));var n,d,c=document.getElementsByClassName("close"),l=document.getElementsByClassName("item");function a(){for(n=0;n<c.length;n++)c[n].addEventListener("click",(function(){this.parentElement.style.display="none"}))}function i(){for(d=0;d<l.length;d++)l[d].addEventListener("click",(function(){this.classList.toggle("checked")}))}a(),i();var m=document.getElementById("task");t.addEventListener("click",(function(){!function(){if(""===m.value)alert("You must write something!");else{var t=document.createElement("div"),n=document.createElement("li"),d=document.createElement("span");d.classList="close";var c=document.createTextNode(m.value);n.appendChild(c);var l=document.createTextNode("×");d.appendChild(l),n.appendChild(d),t.appendChild(n),t.classList="item",e.appendChild(t),a(),i()}}()}))})();