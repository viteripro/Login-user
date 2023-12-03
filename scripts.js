const NAME=document.querySelector("#name");
const PASSWORD=document.querySelector("#password");
const MESSAGE=document.querySelector(".message_container");
const AGE=document.querySelector("#age");


document.querySelector(".send").addEventListener("click",readInformation);

function readInformation(){
    const NAMEVALUE=NAME.value;
    const PASSWORDVALUE=PASSWORD.value;
    const AGEVALUE=AGE.value;
  (NAMEVALUE && PASSWORDVALUE && AGEVALUE) 
   ? readValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE)
   : emptyValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE);
   deleteInformation(); 
}

function readValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE){
 if (NAMEVALUE==="JORGE" && PASSWORDVALUE==="123" && AGEVALUE>=18){
     MESSAGE.insertAdjacentHTML("beforeend",`
     <p class="correct-message">Nombres, contraseñas y edad correctas, BIENVENIDO</p>`);
 } else{
    MESSAGE.insertAdjacentHTML("beforeend",`
    <p class="error-message">Error: </p>`);
 }
}

function emptyValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE){
    
    

}


function deleteInformation(){
    NAME.value="";
    PASSWORD.value="";
    AGE.value="";
}