var root;
var currentCorrectAns;
var numOfTry = 0;
var isOpen = false;

function getRoot(exportRoot)
{
    root = exportRoot;
}

function startAddListeners()
{   
    root.window.dropDownList.addEventListener("click", openDropDown);
    currentCorrectAns = 3;
}

function goNextFrame(e)
{
    Next();
}

function openDropDown(e)
{
    root.window.dropDownList.gotoAndStop(1);
    for(var i = 1; i<=4; i++)
    {
        root.window.dropDownList["option" + i].addEventListener("click", checkDropDownList)
    }
}

function checkDropDownList(e)
{
    isOpen = false;
    var currentAnsChoosen = e.currentTarget.name.charAt(6);
    var currentFrameNum = Number(currentAnsChoosen) + 1;    
    
    if((currentAnsChoosen == currentCorrectAns))
    {
        isOpen = true;
        root.window.dropDownList.gotoAndStop(currentFrameNum);
        root.window.feedback.gotoAndStop(2); 
        root.window.feedback.innerFB.countinue.addEventListener("click", goNextFrame);
        root.window.dropDownList.mouseEnabled = false;
    }
    else if(numOfTry == 0)
    {
        numOfTry++;
        isOpen = true;
        root.window.dropDownList.gotoAndStop(currentFrameNum);
        root.window.feedback.gotoAndStop(1); 
    }
    else if(numOfTry == 1)
    {
        numOfTry++;
        isOpen = true;
        root.window.dropDownList.mouseEnabled = false;
        root.window.dropDownList.gotoAndStop(currentAnsChoosen + 1);
        root.window.feedback.gotoAndStop(3); 
        root.window.feedback.innerFb2.countinue.addEventListener("click", goNextFrame);
    }
}


















