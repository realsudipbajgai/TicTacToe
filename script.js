window.onload=function () {
    var boxes = document.querySelectorAll('.boxes');
    boxes.forEach(e => {
        e.addEventListener('click', createCircleCross) //if we write createCircleCross(e) here, the function will get executed here without click event
    })
}
function createCircleCross(e) {
    createCircle(e);
    // createCross(e);
}
function createCircle(e) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('circle');
    e.target.appendChild(newDiv);
}

function createCross(e)
{
    var cross_one=createCrossOne();
    var cross_two = createCrossTwo();
 
    /*
    Structure of cross div
    <div clsas="cross">
        <div class="cross-one">\</div>
        <div class="cross-two">/</div>
    </div>
    */
    const mainCross = document.createElement("div");
    mainCross.classList.add('cross');
    mainCross.appendChild(cross_one);
    mainCross.appendChild(cross_two);
    e.target.appendChild(mainCross);
}

function createCrossOne() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('cross-one');
    return newDiv;
}

function createCrossTwo() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('cross-two');
    return newDiv;
}
