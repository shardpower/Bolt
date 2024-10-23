var ftabtxt = document.getElementById("ftabtxt");
var uvframe = document.getElementById("uvFrame");

if (ftabtxt && uvframe) {
    uvframe.onload = function () {
        ftabtxt.textContent = uvframe.contentWindow.document.title;
    }

}