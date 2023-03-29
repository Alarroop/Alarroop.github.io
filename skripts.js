function Add() {
    var nimi = document.getElementById('bootstrapform').value;
    var email = document.getElementById('bootstrapform').value;
    var kuupäev = document.getElementById('bootstrapform').value;
    var reg =document.getElementById('regList');
    var osalejad = document.getElementsByClassName("osalejad");
    var found = false;
    if(nimi,email,kuupäev!= "") {
        console.log("Start Loop");
        for(var i = 0; i < osalejad.length; i++) { // i - index; loogika tehe kui kaua me seda teeme. Array pikkus selleks on .length; i++ suurendame indexit
            // Tsüklli algus
            console.log("In Loop");
            if(osalejad[i].innerHTML == nimi, email,kuupäev) {
                found = true;
                break; // Lõpeta tsükell
            }
            // Tsüklli lõpp
        }
    }
    if(item == "" || found) { // is-invalid
        document.getElementById('bootstrapform').classList.add("is-invalid");
    } else {
        document.getElementById('bootstrapform').classList.remove("is-invalid");
        document.getElementById('bootstrapform').value = "";
        var node = document.createElement('li'); // <li></li>
        node.innerHTML = nimi, email, kuupäev;
        node.classList.add("osalejad");
        todoList.appendChild(node);
    }
}