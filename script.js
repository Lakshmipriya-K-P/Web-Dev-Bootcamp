function changecontent()
{
    let x=document.getElementById("know-more").style;
    if(x.display=="block"){
        x.display="none";
    }
    else{
        x.display="block";
    }
}

function formvalidation()
{
    let x=document.getElementById("name-i");
    let y=document.getElementById("email-i");
    let z=document.getElementById("batch-i");

    if(x.value=="")
    {
        document.getElementById("name-val").style.display="block";
    }
    ////////////////////////////////////////////////////////
    if(y.value=="")
    {
        document.getElementById("email-val").style.display="block";
    }
    ////////////////////////////////////////////////////////
    if(z.value=="--none--")
    {
        document.getElementById("batch-val").style.display="block";
    }

    if(x||y =="" || z=="--none--")
    {
        return false;
    }
}