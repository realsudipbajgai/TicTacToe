let circleTurn = true;
let circleSelections = [];
let crossSelections = [];
let gameOver = false;
let totalClicks = 0;
window.onload = function () {
    var boxes = document.querySelectorAll('.boxes');
    boxes.forEach(e => {
        e.addEventListener('click', createCircleCross) //if we write createCircleCross(e) here, the function will get executed here without click event
    })
}
function createCircleCross(e) {
    if (totalClicks == 9) {
        document.getElementById('result').innerHTML="<p>Game Over</p>"
    }
    //allow to draw on the boxes class only,
    //not within the circle or cross class
    //do not allow to draw again, count children of boxes, if any, do not draw
    if (e.target.className == 'boxes' && e.target.children.length == 0 && gameOver == false) {
        let box_id = e.target.getAttribute('data-id');
        if (circleTurn == true) {
            circleSelections.push(parseInt(box_id));
            createCircle(e);
        } else {
            crossSelections.push(parseInt(box_id));
            createCross(e);
        }    
    }
}
function createCircle(e) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('circle');
    e.target.appendChild(newDiv);
    circleTurn = false;
    checkResult();
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
    circleTurn = true;
    checkResult();
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

/*to calculate winner
0 1 2
3 4 5
6 7 8
Winner combinations: 
0,1,2
3 4 5
6 7 8
0 3 6
1 4 7 
2 5 8
0 4 8
2 4 6
*/
let win_results = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2 ,5, 8],
    [0, 4 ,8],
    [2 ,4 ,6]
]
function checkResult() {
    circleSelections = circleSelections.sort();
    crossSelections = crossSelections.sort();
    let circleWon = false;
    let crossWon = false;
    for (let i = 0; i < win_results.length; i++){
        //it should be other way around, otherwise, on first click, it will be true
        // let circleWon = circleSelections.every(value => win_results[i].includes(value));
        // let crossWon = crossSelections.every(value => win_results[i].includes(value));
        console.log(win_results[i], circleSelections);
        if (win_results[i].every(value => circleSelections.includes(value))) {
            circleWonMessage();
            return;
        }
        if (win_results[i].every(value => crossSelections.includes(value))) {
            crossWonMessage();
            return;
        }
    }
}
function circleWonMessage() {
    gameOver = true;
    document.getElementById("result").innerHTML = "<p> Circle Won</p>";
}
function crossWonMessage() {
    gameOver = true;
    document.getElementById("result").innerHTML = "<p> Cross Won</p>";
}