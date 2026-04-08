
function showMessage() {
    let name = document.getElementById("name").value;
    
    if(name === "") {
        document.getElementById("msg").innerText = "Please enter your name!";
    } else {
        document.getElementById("msg").innerText = "Thank you, " + name + "!";
    }
}
