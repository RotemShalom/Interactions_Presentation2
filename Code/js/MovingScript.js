var keyCodeArr = [40,39,38,39,40,39,38];
var keySaveArr = ["down", "right", "up", "right", "down", "right", "up"];
var currentMove = -1; 
var countMistakes = 0;
var currentWindow;
var root;

function getExportRoot(exportRoot)
{
    root = exportRoot;
}
function KeyboardListeners(windownum)
{
	currentWindow = windownum;
    currentMove ++;
    window.addEventListener("keydown", moveTheScreen);
}

function moveTheScreen (e) {
if(event.keyCode == 40 || event.keyCode == 39 || event.keyCode == 38 || event.keyCode == 37){
    if(event.keyCode == keyCodeArr[currentMove])
            {
                removeKeyboardListeners();
                countMistakes = 0;
                if(currentMove == 0) {
                    root[currentWindow].finalAmin.gotoAndStop(1);
                } else if (currentMove < 7) {
                root[currentWindow].finalAmin.innerAnim.play();
                }
                root[currentWindow].movingFB.gotoAndStop(0);
            } else {
                countMistakes++;
                if(countMistakes == 1) {
                root[currentWindow].movingFB.gotoAndStop(1);
                } else {
                root[currentWindow].movingFB.gotoAndStop(String(keySaveArr[currentMove]));
                }
            }
    }
}

function showFeedback () {
    if(currentMove == 1 ) {
        root[currentWindow].feedback.gotoAndStop(1);
        root[currentWindow].feedback.fb1.close_mc.addEventListener("click" , closeFB);
    } else if ( currentMove == 2) {
        root[currentWindow].feedback.gotoAndStop(2);
        root[currentWindow].feedback.fb2.close_mc.addEventListener("click" , closeFB);
    } else if ( currentMove == 4) {
        root[currentWindow].feedback.gotoAndStop(3);
        root[currentWindow].feedback.fb3.close_mc.addEventListener("click" , closeFB);
    }
}

function closeFB (e) {
e.currentTarget.removeEventListener("click" , closeFB);
root[currentWindow].feedback.gotoAndStop(0);
KeyboardListeners(currentWindow);
}

function removeKeyboardListeners () {
window.removeEventListener("keydown", moveTheScreen);
}