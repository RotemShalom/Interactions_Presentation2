var root;
var dropArr = [-1,-1,-1,-1,-1,-1,-1,-1];
var currentDrag;
var windowNum;
function getRoot(Root) {
root = Root; 
}

function addListenersToDragDrop () {
    for (var i = 0; i < 6; i++ ) {
        root.window2["drag" + i].originalX = root.window2["drag" + i].x;
        root.window2["drag" + i].originalY = root.window2["drag" + i].y;
        root.window2["drag" + i].addEventListener("mousedown" , mouseDown);
        root.window2["drag" + i].addEventListener("pressmove" , pressDown);
        root.window2["drag" + i].addEventListener("pressup" , mouseUp);
        root.window2["drag" + i].cursor = "pointer";
     }
    root.window2.submit.mouseEnabled = false;
    root.window2.submit.cursor = "auto";
}

function mouseDown (e) {
    root.window2.setChildIndex(e.currentTarget, root.window2.numChildren - 1);
    var pt = root.window2.globalToLocal(e.stageX, e.stageY);
    currentDrag = e.currentTarget;
    currentDrag.x = pt.x;
    currentDrag.y = pt.y;
	currentDrag.scaleX = 1;
	currentDrag.scaleY = 1;
    var i = 0;
    while ( i < 6 ){
        var point = root.window2.localToLocal(currentDrag.x, currentDrag.y,root.window2["drop" + i]);
        if(root.window2["drop" + i].hitTest(point.x, point.y)){
            dropArr[i] = -1;
            root.window2.submit_cover.gotoAndStop(0);
            root.window2.submit.mouseEnabled = false;
            root.window2.submit.cursor = "auto";
       } 
        i++; 
    }
}

function pressDown(e){
    var pt = root.window2.globalToLocal(e.stageX, e.stageY);
    currentDrag.x = pt.x;
    currentDrag.y = pt.y;
}

function mouseUp(e) {
    var isOnDrop = false;
    var i = 0;
    while ( i < 6 &&  !isOnDrop){
        var pt = root.window2.localToLocal(currentDrag.x, currentDrag.y,root.window2["drop" + i]);
        if(root.window2["drop" + i].hitTest(pt.x,pt.y)){
            isOnDrop = true;
            if(dropArr[i] != -1){
                root.window2["drag" + dropArr[i]].x = root.window2["drag" + dropArr[i]].originalX;
                root.window2["drag" + dropArr[i]].y = root.window2["drag" + dropArr[i]].originalY;
				root.window2["drag" + dropArr[i]].scaleX = 0.5;
				root.window2["drag" + dropArr[i]].scaleY = 0.5;
            }
            currentDrag.x = root.window2["drop" + i].x;
            currentDrag.y = root.window2["drop" + i].y;
            dropArr[i] = currentDrag.name.charAt(4);
    }
        i++; 
    }
        if(!isOnDrop) {
           currentDrag.x = currentDrag.originalX;
           currentDrag.y = currentDrag.originalY;
			currentDrag.scaleX = 0.5;
			currentDrag.scaleY = 0.5;
       }
        var isAllDrop = true;
        for(var i = 0; i < 6; i ++ ) {
            if (dropArr[i] == -1) {
                isAllDrop = false;
            }
        }
    if(isAllDrop)
    {
        root.window2.submit_cover.gotoAndStop(1);
        root.window2.submit.addEventListener("click" , submitDragDrop);
        root.window2.submit.mouseEnabled = true;
        root.window2.submit.cursor = "pointer";
    }
}

function submitDragDrop (e) {
    e.currentTarget.mouseEnabled = false;
    root.window2.submit_cover.gotoAndStop(0);
    e.currentTarget.removeEventListener(submitDragDrop);
 var isAllTrue = true;
 for(var i = 0; i < 6; i++) {
      root.window2["drag" + i].cursor = "auto";
        root.window2["drag" + i].removeEventListener("mousedown" , mouseDown);
        root.window2["drag" + i].removeEventListener("pressmove" , pressDown);
        root.window2["drag" + i].removeEventListener("pressup" , mouseUp);
        root.window2["check" +i].gotoAndStop(1);
     if(dropArr[i] != i) {
         isAllTrue = false;
         root.window2["check" +i].gotoAndStop(2);
     }
 }
    if(isAllTrue) {
        root.window2.feedback4.gotoAndStop(1);
        root.next.mouseEnabled = true;
        root.next.gotoAndStop(0);
    } else {
       root.window2.feedback4.gotoAndStop(2);
       root.window2.feedback4.pit_btn.addEventListener("click", showAnsDrag);
        }
}

function showAnsDrag (e) {
    root.window2.feedback4.gotoAndStop(0);
    root.window2.show_pit.gotoAndStop(1);
    root.window2.feedback4.pit_btn.removeEventListener("click", showAnsDrag);
    root.window2.feedback4.pit_btn.mouseEnabled = false;
    root.next.mouseEnabled = true;
    root.next.gotoAndStop(0);
}

function addListenerToBtn (window) {
    windowNum = window;
    root["window" + windowNum].btn.addEventListener("click", showQuestion);
}

function showQuestion(e) {
    root["window" + windowNum].btn.mouseEnabled = false;
    root["window" + windowNum].btn.removeEventListener("click", showQuestion);
    root["window" + windowNum].instructions1.gotoAndStop(1);
    root["window" + windowNum].instructions2.gotoAndStop(1);
    root["window" + windowNum].menu.gotoAndStop(1);
    for( var i = 2; i < 7; i++) {
        root["window" + windowNum].menu.openMenu["step" + i].addEventListener("click", wrongAnswer);
    }
     root["window" + windowNum].menu.openMenu.step1.addEventListener("click", rightAnswer);
}

function wrongAnswer (e) {
    root["window" + windowNum].clue.gotoAndPlay(1);
}

function rightAnswer (e) {
    root["window" + windowNum].clue.gotoAndStop(0);
    root["window" + windowNum].menu.openMenu.gotoAndStop(1);
    for( var i = 2; i < 7; i++ ) {
        root["window" + windowNum].menu.openMenu["step" + i].removeEventListener("click", wrongAnswer);
        root["window" + windowNum].menu.openMenu["step" + i].mouseEnabled = false;
    }
    root["window" + windowNum].menu.openMenu.step.removeEventListener("click", rightAnswer);
    root["window" + windowNum].menu.openMenu.step.mouseEnabled = false;
    root["window" + windowNum].menu.openMenu.step.cursor = "auto";
    root["window" + windowNum].feedback.gotoAndStop(1);
    root.next.mouseEnabled = true;
    root.next.gotoAndStop(0);
}


































































