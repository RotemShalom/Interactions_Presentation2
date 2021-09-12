var Root;

function Init(exportRoot)
{
    Root = exportRoot;
    addListeners();
}

function addListeners()
{
    var index;
    
    for(index = 1; index <=4; index++)
    {
        Root.window4["option" + index].addEventListener("click" , checkAnswer4);
    }
}

function checkAnswer4(e)
{
    var index;
     e.currentTarget.gotoAndStop(1);
    
    if(e.currentTarget.name == "option1")
    {
        Root.window4.feedback4.gotoAndStop(1);
    }
    
    Root.window4.option1.gotoAndStop(1);
        
    for(index = 1; index <=4; index++)
    {
        Root.window4["option" + index].removeEventListener("click" , checkAnswer4);
        Root.window4["option" + index].mouseEnabled = false;
    }
}




































