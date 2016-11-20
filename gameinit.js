var message = [];
var gameForm =  'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="yourMove()" value = "Entrar">';	    

function init(){

    var output = document.getElementById("container");
    var input = document.getElementById("dados");
    
    narrativa();
    output.innerHTML = message[1];
    input.innerHTML = gameForm;
 
}  

function yourMove(){
    output = document.getElementById("container");
    input = document.getElementById("dados"); 
    
    resp = document.getElementById("resp").value;

    switch (resp) {
        case "1":
            output.innerHTML = message[2];
            gameForm = 'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="stage2()" value = "Entrar">';
            input.innerHTML= gameForm;
            break;
        case "2":
            output.innerHTML = message[2];
            gameForm = 'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="stage2()" value = "Entrar">';
            input.innerHTML= gameForm;
            break;
        case "3":
            output.innerHTML = message[2];
            gameForm = 'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="stage2()" value = "Entrar">';
            input.innerHTML= gameForm;
            break;
        case "4":
            output.innerHTML = message[7];
            input.innerHTML= null;
            break;
        default: 
            output.innerHTML = message[8];
            input.innerHTML= null;
    }
} 


function stage2(){
    output = document.getElementById("container");  
    input = document.getElementById("dados"); 
    
    resp = document.getElementById("resp").value;

    switch (resp) {
        case "1":
            output.innerHTML = message[3];
            gameForm = 'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="stage3()" value = "Entrar">';
            input.innerHTML= gameForm;
            break;
        case "2":
            output.innerHTML = message[4];
            gameForm = 'Digite sua opção:<input type="text" id="resp"> <input type ="button" id ="enter" onclick="stage4()" value = "Entrar">';
            input.innerHTML= gameForm;
            break;
        case "3":
            output.innerHTML = message[7];
            input.innerHTML= null;
            break;
        default: 
            output.innerHTML = message[8];
            input.innerHTML= null;
    }
} 

function stage3(){
    output = document.getElementById("container"); 
    input = document.getElementById("dados"); 
    
    resp = document.getElementById("resp").value;

    switch (resp) {
        case "1":
            output.innerHTML = message[6];
            input.innerHTML= null;
            break;
        case "2":
            output.innerHTML = message[5];
            input.innerHTML= null;
            break;
        case "3":
            output.innerHTML = message[6];
            input.innerHTML= null;
            break;
        default: 
            output.innerHTML = message[8];
            input.innerHTML= null;
    }
        
} 

function stage4(){
    output = document.getElementById("container"); 
    input = document.getElementById("dados"); 
    
    resp = document.getElementById("resp").value;


    switch (resp) {
        case "1":
            output.innerHTML = message[6];
            input.innerHTML= null;
            break;
        case "2":
            output.innerHTML = message[5];
            input.innerHTML= null;
            break;
        case "3":
            output.innerHTML = message[6];
            input.innerHTML= null;
            break;
        default: 
            output.innerHTML = message[8];
            input.innerHTML= null;
    }
        
}