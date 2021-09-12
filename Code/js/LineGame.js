var Root;
//saves the elements that were clicked from 2 diffrenet types
var typeButtonA=[];
var typeButtonB=[];
var buttonsClicked=[];
var numOfLines=0;
var flag = false;
var ArrLine = [];
var Current_Dot1;
var Current_Dot2;
var ClickedLines=0;
var s;
//enter the num of attempts you would like to give the user
var numOfchance = 3;

var ArrLineCorrect=[];
var ArrLineWrong=[];
var ArrCorrect1=[];
var ArrCorrect2=[];
var ArrWrong1=[];
var ArrWrong2=[];


function Init(exportRoot)
{
    Root=exportRoot;
    AddListeners();
}

//function that adds listener, initializes state of clicked to be 0 (===unclicked) and determines the type of the objects
function AddListeners()
{
    for(i in Root)
    {
        i.name=i;
        if(i.charAt(0) == "A" || i.charAt(0) == "Q")
        {
            Root[i].addEventListener("click", OnClickDot);
            Root[i].mouseEnabled = true;
            Root[i].cursor="pointer";
            Root[i].HasLine=false;
            Root[i].Clicked = 0;
            Root[i].Type=i.charAt(0);
            Root[i].alpha = 1;
        }
    }
}

//function that removes listenners
function RemoveListeners ()
{
    for(i in Root)
    {
        i.name=i;
        if(i.charAt(0) == "A" || i.charAt(0) == "Q")
        {
            Root[i].removeEventListener("click", OnClickDot);
            Root[i].mouseEnabled = false;
            Root[i].cursor="auto";
            Root[i].HasLine=false;
        }
    }
}


function OnClickDot(e)
{
    e.currentTarget.alpha=0.5;
   // e.currentTarget.Clicked = +1;
    e.currentTarget.Clicked = 1;
   //when clicked on button
    if(e.currentTarget.Clicked == 1)
    {
        //counter the amount of points that clicked at the current time
         ClickedLines++;
         e.currentTarget.cursor="auto";
        //if 2 points from differnet type were clicked
        if(ClickedLines == 2 && e.currentTarget.name.charAt(0) != Current_Dot1.name.charAt(0))
        {
            //push to the correct arrays those who clicked
            typeButtonA.push(e.currentTarget);
            typeButtonB.push(Current_Dot1);
            buttonsClicked.push(e.currentTarget);   
            buttonsClicked.push(Current_Dot1); 
            if(e.currentTarget.name.charAt(1) === Current_Dot1.name.charAt(1)) {
                ArrCorrect1.push(e.currentTarget); 
                ArrCorrect2.push(Current_Dot1);
            } else {
                ArrWrong1.push(e.currentTarget); 
                ArrWrong2.push(Current_Dot1);
            }

            //push to array in order to "remember" what to clear from the screen 
            Current_Dot2=e.currentTarget;
            RemoveListeners();
            //creates the line
            playAnimation();
        }
        //if 2 points were clicked
        else if (ClickedLines == 2)
        {
            e.currentTarget.Clicked=0;
            e.currentTarget.alpha=1;
            e.currentTarget.cursor="pointer";
            Current_Dot1.Clicked=0;
            Current_Dot1.alpha=1;
            Current_Dot1.cursor="pointer";
            Current_Dot1=null;
            ClickedLines=0;
        }
        //if 1 point was clicked
        else if(ClickedLines == 1)
        {
            Current_Dot1=e.currentTarget;
        }
    }
}

function removeListenerFromBtn() {
     for(var i =0; i < buttonsClicked.length; i++) {
         buttonsClicked[i].mouseEnabled = false;
         buttonsClicked[i].alpha = 0.5;
     }
    removeListenerCorrect();
}

//function that draws the lines

/*the graphics class exposes an easy to use API(application programming interface) for generating vector drawing 
instruction and drawing them to specificed context. */

function playAnimation()
{
   // RemoveListeners();
 
    ClickedLines=0;
    var vpoint1 = new createjs.Point(Current_Dot1.x,Current_Dot1.y);
    var line1 = new createjs.Graphics();
    var line2 = new createjs.Graphics();
    var line3 = new createjs.Graphics();
    var line4 = new createjs.Graphics();

    for(var i =1 ;i <=4 ; i++)
    {
       eval("line"+i).beginStroke('black');    
    }
    
    eval("line"+Current_Dot1.name.charAt(1)).moveTo(vpoint1.x,vpoint1.y);
    s= new createjs.Shape(eval("line"+Current_Dot1.name.charAt(1)));
    if(Current_Dot2.name.charAt(1) === Current_Dot1.name.charAt(1)) {
        ArrLineCorrect.push(s);
    } else {
        ArrLineWrong.push(s);
    }
    stage.addChild(s);
    numOfLines++;
    //creates line from point to point in 1200 seconds
    createjs.Tween.get(vpoint1).to({x:Current_Dot2.x,y:Current_Dot2.y},1000, createjs.Ease.sineInOut);
    setTimeout(function() {
        AddListeners();
        removeListenerFromBtn();
    }, 1200);

    createjs.Ticker.addEventListener("tick", tick);

    function tick(e)
    {
        eval("line"+Current_Dot1.name.charAt(1)).lineTo(vpoint1.x, vpoint1.y);
        stage.update();
    }
}

//checks if the user succedded
function CheckGame(event) {
    flag = false;
    //fills everthing
    //depends on how many buttons
    if(numOfLines === 4) { 
        numOfchance--;
        for(var i =0; i < typeButtonA.length && flag === false; i++ ) {
            if(typeButtonA[i].name.charAt(1) !== typeButtonB[i].name.charAt(1)) {
                flag = true;   
            }
        }
        if(flag) {
            //wrong
            Root.feedback3.gotoAndStop(2);
            if(numOfchance === 0) {
                for(var i =0; i < ArrLineCorrect.length; i++) {
                    stage.removeChild(ArrLineCorrect[i]);
                } 
                for(var i =0; i < ArrLineWrong.length; i++) {
                    stage.removeChild(ArrLineWrong[i]);
                }
                //Root.feedback3.feedback5.gotoAndStop(2); 
                Root.instructions_btn.removeEventListener("click", InstructionsGame);
                Root.instructions_btn.cursor = "auto";
                Root.instructions_btn.mouseEnabled = false;
            } else {
                /*console.log("in");
                Root.feedback3.feedback5.gotoAndStop(1); 
                Root.feedback3.feedback5.tryAgain.addEventListener("click", tryAgain);*/
            }
            Root.check_btn.removeEventListener("click", CheckGame);
            Root.check_btn.mouseEnabled = false;
            Root.check_btn.cursor = "auto";
            Root.restart_btn.removeEventListener("click", RestartGame);
            Root.restart_btn.mouseEnabled = false;
            Root.restart_btn.cursor = "auto";
            
        } else {
            Root.feedback3.gotoAndStop(1);
            Root.check_btn.removeEventListener("click", CheckGame);
            Root.check_btn.mouseEnabled = false;
            Root.check_btn.cursor = "auto";
            Root.restart_btn.removeEventListener("click", RestartGame);
            Root.restart_btn.mouseEnabled = false;
            Root.restart_btn.cursor = "auto";
        }
//        setTimeout(function() {
//            Root.feedback3.gotoAndStop(0);
//            clearScreen(); 
//        }, 3000);
    } else {
        Root.feedback4.gotoAndStop(1);
        setTimeout(function() {
            Root.feedback4.gotoAndStop(0);
        }, 1000); 
    }
}

function tryAgain(event) {
    Root.check_btn.addEventListener("click", CheckGame);
    Root.check_btn.mouseEnabled = true;
    Root.check_btn.cursor = "pointer";
    Root.restart_btn.addEventListener("click", RestartGame);
    Root.restart_btn.mouseEnabled = true;
    Root.restart_btn.cursor = "pointer";
    Root.feedback3.gotoAndStop(0);
    clearScreen();
}

//clears all screen
function RestartGame(event) {
    Root.feedback3.gotoAndStop(0);
    clearScreen();
}

function addListenersToWrongBtn(arr1) {
    console.log(arr1);
    for(var i =0; i < arr1.length; i++) {
        arr1[i].addEventListener("click", OnClickDot);
        arr1[i].mouseEnabled = true;
        arr1[i].cursor="pointer";
        arr1[i].Clicked = 0;
        arr1[i].alpha = 1;  
    }
}

function removeListenerCorrect() {
     for(var i =0; i < ArrCorrect1.length; i++) {
         ArrCorrect1[i].mouseEnabled = false;
         ArrCorrect1[i].alpha = 0.5;
         ArrCorrect2[i].mouseEnabled = false;
         ArrCorrect2[i].alpha = 0.5;
     }  
}

function clearScreen(event) {
    buttonsClicked=[];
    for(var i =0; i < ArrLineCorrect.length; i++) {
        stage.removeChild(ArrLineCorrect[i]);
    } 
    for(var i =0; i < ArrLineWrong.length; i++) {
        stage.removeChild(ArrLineWrong[i]);
    }
    AddListeners();
    typeButtonA=[];
    typeButtonB=[];
    numOfLines=0;
    ArrLineCorrect=[];
    ArrLineWrong=[];
    ArrCorrect1=[];
    ArrCorrect2=[];
    ArrWrong1=[];
    ArrWrong2=[];
    console.log("numOfLines:   " +numOfLines);
}

function InstructionsGame(event) {
    Root.gotoAndStop(1);  
    Root.exit.addEventListener("click", goBack);
}

function goBack(event) {
   Root.gotoAndStop(0);     
}

