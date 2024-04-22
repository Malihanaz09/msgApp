let sendMsg = document.getElementById("sendMsg");
function writeMsg(){
    let typeBox = document.getElementById("typeBox");
    let li = document.createElement("li");
    let msgBox = document.getElementById("msgBox");
    let liText = document.createTextNode(typeBox.value);
    li.appendChild(liText);
    msgBox.appendChild(li);

    typeBox.value = ""
}

//OPEN KEYBOARD
function openKeyboard(){
     let openKeyboard = document.getElementById("keyboard");
     let moveOutBox = document.getElementById("outBox")
     let moveInBox =document.getElementById("inBox")

     openKeyboard.setAttribute("class", "openKeyboard")
     moveInBox.setAttribute("class", "moveInBox")
     moveOutBox.setAttribute("class", "moveOutBox")  
}
//WRITE KEYBOARD VALUE
function getNumber(num){
    let typeBox = document.getElementById("typeBox")
    typeBox.value += num
}