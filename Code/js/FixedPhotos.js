var root;
var currentPic;

function getRoot(exportRoot)
{
    root = exportRoot;
    addListeners();
}

function addListeners()
{
    for(var i = 1; i<=6; i++)
    {
        root.photosRoll["pic" + i].addEventListener("click", showPic);
    }
}

function showPic(e)
{
    currentPic = e.currentTarget.name.charAt(3);
    root.allPhotos.gotoAndStop(currentPic);
    if((root.allPhotos.currentFrame >1 ) && (root.allPhotos.currentFrame <6))
    {
        root.allPhotos.btnPrev.addEventListener("click", goBackPhoto);
        root.allPhotos.btnNext.addEventListener("click", goNextPhoto);
    }
    else if(root.allPhotos.currentFrame ==1)
    {
        root.allPhotos.btnNext.addEventListener("click", goNextPhoto);
    }
    else
    {
        root.allPhotos.btnPrev.addEventListener("click", goBackPhoto);
    }
}

function goNextPhoto(e)
{
    root.allPhotos.gotoAndStop(root.allPhotos.currentFrame - 1);
}

function goBackPhoto(e)
{
    root.allPhotos.gotoAndStop(root.allPhotos.currentFrame + 1); 
}