function add() {
  var button = document.createElement("div");
  var input = document.createElement("p");
  input.innerHTML = "Uus kaart";
  var list = document.createElement("h2");
  list.innerHTML = "Uus kaart";
  
  list.classList.add("input");
  button.appendChild(list);
  button.appendChild(input);
  document.getElementById("input").appendChild(button);
  
  
  console.log(imageName);
}


 
  