const main = document.querySelector("main");
main.remove();
const newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")

newHeader.innerHTML = "Sid is the champion"

document.body.append(newHeader)