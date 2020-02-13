let dragEl = null;
    // this는 li
    // e.target은 이벤트가 발생한 div, h3
function handleDragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.outerHTML);
}
function handleDragOver(e) {
    e.preventDefault();
    this.style.backgroundColor = "rgb(120, 245, 130)";
    e.dataTransfer.dropEffect = "move";
}

function handleDragLeave(e) {
    this.style.backgroundColor = "rgb(255, 255, 255)";
}

function handleDrop(e) {
    this.style.backgroundColor = "rgb(255, 255, 255)";
    if (dragEl != this) {
        this.parentNode.removeChild(dragEl);
        let dropHTML = e.dataTransfer.getData("text/html");
        this.insertAdjacentHTML("beforebegin", dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);
    }
}

function handleDragEnd(e) {
    this.style.backgroundColor = "rgb(255, 255, 255)";
}

function addDnDHandlers(elem) {
    elem.addEventListener("dragstart", handleDragStart, false);
    elem.addEventListener("dragover", handleDragOver, false);
    elem.addEventListener("dragleave", handleDragLeave, false);
    elem.addEventListener("drop", handleDrop, false);
    elem.addEventListener("dragend", handleDragEnd, false);
}

let cols = document.querySelectorAll("#columns .column");
[].forEach.call(cols, addDnDHandlers);
