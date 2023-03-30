function Add() {
    var node1 = document.createElement("div");
    var ul = document.createElement("p");
    ul.innerHTML = "test para";
    var node3 = document.createElement("h2");
    node3.innerHTML = "Uus registreerija";
    
    node3.classList.add("test2");
    node1.appendChild(node3);
    node1.appendChild(ul);
    document.getElementById('reg').appendChild(node1);
    
    
    console.log(imageName);
}

function GetImage(value) {
    return value.substring((value.lastIndexOf("\\") + 1));
}