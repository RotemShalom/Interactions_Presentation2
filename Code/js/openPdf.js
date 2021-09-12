var Root;
function InitHarhava(exportRoot)
{
    Root = exportRoot;
    addListener();
}

function addListener()
{    
    Root.openPage.addEventListener("click", OpenHar);
}

function OpenHar(e)
{
    window.open("../others/הסבר על גרירה.docx");
}