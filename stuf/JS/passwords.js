const passwordfile = import("./passwords.json");
const button = document.getElementById('pass')
const box = document.getElementById('box')


button.onclick = function() {
    if (box.textContent == "FHGDev") {
        console.log("hi")
    } else {
        console.log('nope')
        return;
    }
}