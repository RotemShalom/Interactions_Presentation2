var root;
var numOfHar;
var currentHar;
var currentWindow;
var arrIsDone = [];
var bIsDone = true;
var numOfOption;
var bIsSign = false;
var bIsMultiHar = false;
var currentHarPage = 1;
var numOfPages;
var bIsEnabled;
var bIsEnabledBack;
var BenableNext = false;

function getRoot(exportRoot)
{
    root = exportRoot;
}


// פעולה שמוסיפה מאזינים להרחבות
function addListenerHar(window)
{
    arrIsDone = [];
    bIsDone = true;
    currentWindow = window;
    for(var i = 1; i<= numOfHar; i++)
    {
        root[currentWindow]["har" + i].addEventListener("click", openHar);
        arrIsDone.push(false);
    }
}

// פעולה שפותחת את ההרחבות
function openHar(e)
{
    bIsDone = true;
    bIsEnabledBack = true;
    bIsEnabled = true;
    currentHar = e.currentTarget.name.charAt(3);  
    root[currentWindow]["openHar" + currentHar].gotoAndPlay(1);
    root[currentWindow]["openHar" + currentHar].close_mc.addEventListener("click", closeHar);
    
    for(var i = 1; i<= numOfHar; i++)
    {
        root[currentWindow]["har" + i].mouseEnabled = false;
    }
    
     arrIsDone[currentHar - 1] = true;
    
    // במידה ויש להרחבה מספר עמודים
    if(bIsMultiHar)
    {
        // מטפל במאזינים ובחיווי של כפתורי החיצים
        root[currentWindow]["openHar" + currentHar].NextHar.addEventListener("click", nextHarPage); 
        root[currentWindow]["openHar" + currentHar].backHar.addEventListener("click", backHarPage); 
        root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = false;
        root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = true;
        currentHarPage = 1;
        root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(0);
        root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(1);
        
        // הולך לעמוד הרלוונטי בהרחבה
        root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(currentHarPage);
    }
}

// פונקציה שמוסיפה מאזינים לכפתורי מספרי העמודים שבהרחבה
function addListenersPages()
{
    for(var i = 1; i<= numOfPages; i++)
    {
       root[currentWindow]["openHar" + currentHar]["page" + i].addEventListener("click", skipPageHar);
    }
}

// במקרה והמשתמש לחץ על מספרי העמודים
function skipPageHar(e)
{
    bIsEnabled= false;
    bIsEnabledBack = false;
    currentHarPage = e.currentTarget.name.substring(4 , e.currentTarget.name.length);
    root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = true;    
    root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(0);
    root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = true;    
    root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(0);
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(0); 
  
    var currentNumFrame = 13 + Number(currentHarPage);
    root[currentWindow]["openHar" + currentHar].gotoAndStop(currentNumFrame);
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(currentHarPage); 
    
    // במידה והמשתמש נמצא בעמוד האחרון של ההרחבה
    if(currentHarPage == numOfPages)
    {
      root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = false;  
      root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(1);
    }
    else
    {
        root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = true;  
        root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(0);
    }
    
     // במידה והמשתמש נמצא בעמוד הראשון של ההרחבה
    if(currentHarPage == 1)
    {
       root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = false;  
       root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(1);
    }
    else
    {
       root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = true;  
       root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(0);
    }
}

// במידה ולחצו על כפתור הבא שבתוך ההרחבה
function nextHarPage(e)
{
    bIsEnabled= false;
    bIsEnabledBack = false;
    currentHarPage++;
    root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = true;    
    root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(0);
    
   
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(0); 
  
    
    root[currentWindow]["openHar" + currentHar].gotoAndStop((root[currentWindow]["openHar" + currentHar].currentFrame) + 1);
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(currentHarPage); 
    
    if(currentHarPage == numOfPages)
    {
      root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = false;  
      root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(1);
    }
    
    if(currentHarPage == 1)
    {
       root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = false;  
       root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(1);
    }
}

// במידה ולחצו על כפתור חזור שבתוך ההרחבה
function backHarPage(e)
{
    bIsEnabled= false;
    bIsEnabledBack= false;
    currentHarPage--;
    root[currentWindow]["openHar" + currentHar].NextHar.mouseEnabled = true; 
    root[currentWindow]["openHar" + currentHar].NextHar.gotoAndStop(0);
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(0); 
   
    
    root[currentWindow]["openHar" + currentHar].gotoAndStop((root[currentWindow]["openHar" + currentHar].currentFrame) - 1);
    root[currentWindow]["openHar" + currentHar].numbers.gotoAndStop(currentHarPage); 
    
    if(currentHarPage == 1)
    {
        root[currentWindow]["openHar" + currentHar].backHar.mouseEnabled = false;   
        root[currentWindow]["openHar" + currentHar].backHar.gotoAndStop(1);
    }
    
}


// פעולה שסוגרת את ההרחבה
function closeHar(e)
{
    bIsEnabled= true;
    checkIfDone();
    root[currentWindow]["openHar" + currentHar].gotoAndStop(0);
   
    for(var i = 1; i<= numOfHar; i++)
    {
        root[currentWindow]["har" + i].mouseEnabled = true;
    }
    
    if(bIsSign)
    {
        root[currentWindow]["har" + currentHar].gotoAndStop(1);
    }
}

// פונקציה שבודקת האם המשתמש עבר על כל ההרחבות הנמצאות בדף
function checkIfDone()
{
   for(var i = 1; i<=numOfHar; i++)
   {
     if(arrIsDone[i - 1] == false)
     {
         bIsDone = false;
     }
   }
    
    if(bIsDone == true)
    {
        BenableNext = true;
    }
}

























