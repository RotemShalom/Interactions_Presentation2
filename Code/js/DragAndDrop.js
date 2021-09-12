var root;
var dropArr = [-1,-1,-1,-1,-1,-1,-1,-1, -1, -1];
var currentDrag;

function getRoot (Root) {
root = Root; 
addListenersToDragDrop();
}

function addListenersToDragDrop () {
    for (var i = 0; i < 8; i++ ) {
        root["drag" + i].originalX = root["drag" + i].x;
        root["drag" + i].originalY = root["drag" + i].y;
		
        root["drag" + i].addEventListener("mousedown" , mouseDown);
        root["drag" + i].addEventListener("pressmove" , pressDown);
        root["drag" + i].addEventListener("pressup" , mouseUp);
		
        root["drag" + i].cursor = "pointer";
     }
    root.check_btn.mouseEnabled = false;
    root.check_btn.cursor = "auto";
}

function mouseDown (e) {
    root.setChildIndex(e.currentTarget, root.numChildren - 1);
    var pt = root.globalToLocal(e.stageX, e.stageY);
    currentDrag = e.currentTarget;
    currentDrag.x = pt.x;
    currentDrag.y = pt.y;
    var i = 0;
    while ( i < 8 ){
        var point = root.localToLocal(currentDrag.x, currentDrag.y,root["target" + i]);
        if(root["target" + i].hitTest(point.x, point.y)){
            dropArr[i] = -1;
            root.check_btn.mouseEnabled = false;
            root.check_btn.cursor = "auto";
       } 
        i++; 
    }
}

function pressDown(e){
    var pt = root.globalToLocal(e.stageX, e.stageY);
    currentDrag.x = pt.x;
    currentDrag.y = pt.y;
}

function mouseUp(e) {
    var isOnDrop = false;
    var i = 0;
    while ( i < 8 &&  !isOnDrop){
        var pt = root.localToLocal(currentDrag.x, currentDrag.y,root["target" + i]);
        if(root["target" + i].hitTest(pt.x,pt.y)){
            isOnDrop = true;
            if(dropArr[i] != -1){
                root["drag" + dropArr[i]].x = root["drag" + dropArr[i]].originalX;
                root["drag" + dropArr[i]].y = root["drag" + dropArr[i]].originalY;
            }
            currentDrag.x = root["target" + i].x;
            currentDrag.y = root["target" + i].y;
            dropArr[i] = currentDrag.name.charAt(4);
    }
        i++; 
    }
        if(!isOnDrop) {
           currentDrag.x = currentDrag.originalX;
           currentDrag.y = currentDrag.originalY;
       }
        var isAllDrop = true;
        for(var i = 0; i < 8; i ++ ) {
            if (dropArr[i] == -1) {
                isAllDrop = false;
            }
        }
    if(isAllDrop)
    {
        root.check_btn.addEventListener("click" , SubmitDragDrop);
        root.check_btn.mouseEnabled = true;
        root.check_btn.cursor = "pointer";
    }
}

function SubmitDragDrop (e) {
    e.currentTarget.mouseEnabled = false;
    e.currentTarget.removeEventListener(SubmitDragDrop);
 var isAllTrue = true;
 for(var i = 0; i < 8; i++) {
      root["drag" + i].cursor = "auto";
        root["drag" + i].removeEventListener("mousedown" , mouseDown);
        root["drag" + i].removeEventListener("pressmove" , pressDown);
        root["drag" + i].removeEventListener("pressup" , mouseUp);
        root["check" +i].gotoAndStop(1);
     if(dropArr[i] != i) {
         isAllTrue = false;
         root["check" +i].gotoAndStop(2);
     }
 }
    if(isAllTrue) {
        root.feedback4.gotoAndStop(1);
    } else {
       root.feedback4.gotoAndStop(2);
       root.feedback4.pit_btn.addEventListener("click", showAnsDrag);
        }
}

function showAnsDrag (e) {
    root.feedback4.gotoAndStop(0);
    root.show_pit.gotoAndStop(1);
    root.feedback4.pit_btn.removeEventListener("click", showAnsDrag);
    root.feedback4.pit_btn.mouseEnabled = false;
}

































































