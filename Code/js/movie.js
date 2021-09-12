var Root; 

function Init(exportRoot)
{
    Root=exportRoot;
    AddListeners();
}

function AddListeners () 
{
    Root.playBtn.addEventListener("click", playMovie);
}

function playMovie (e)
{
    $("#innerMovie")[0].currentTime = 50; 
	$("#innerMovie")[0].play(); 
}


