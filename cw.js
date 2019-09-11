elementCheckBox=document.getElementById("cb");
elementLabel=document.getElementById("label");
elementCheckBox.addEventListener('click',preventCheck);

function preventCheck(e)

{

    e.preventDefault();
    elementLabel.innerText="I TOLD YOU NOT TO CLICK!!!";

}



// e.preventDefault();