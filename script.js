window.onload=function () {
    var boxes = document.querySelectorAll('.boxes');
    boxes.forEach(e => {
        e.addEventListener('click', createCircleCross) //if we write createCircleCross(e) here, the function will get executed here without click event
    })
}
function createCircleCross(e) {
    createCircle(e);
}
function createCircle(e) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('circle');
    e.target.appendChild(newDiv);

}

