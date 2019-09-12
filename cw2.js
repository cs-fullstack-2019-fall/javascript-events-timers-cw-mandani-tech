
//### Exercise 2:
// Create a simple form with a textarea, a hidden message with the text ```Start typing```,
// and a button that says ```Allow Typing```. When the page initially displays,

elementTextArea=document.getElementById('textArea');
elementstartButton=document.getElementById('startButton');
elementstartp=document.getElementById('p');


// !! : toggle this behaviour 
function enableTyping(e)
{

    e.preventDefault();
    console.log(elementTextArea);
    elementstartp.innerText="Start Typing!!!!!!";
    if (can_type == false){
        elementTextArea.removeAttribute("disabled");
        can_type=true;
    }
    else{
        // !! : setAttribute requires two parameters READ CONSOLE ERRORS
        elementTextArea.setAttribute("disabled", false);
        can_type=false;
    }

}

elementstartButton.addEventListener('click',enableTyping);
console.log(elementTextArea);
let can_type= false;

// elementstartButton2.addEventListener('click',disableTyping);
// console.log(elementTextArea);

// function disableTyping(e)
// {
//     e.preventDefault();
//     console.log(elementTextArea);
//     elementstartp.innerText="Start Typing!!!!!!";
//     elementTextArea.setAttribute("disabled");
// }