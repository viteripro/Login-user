const NAME=document.querySelector("#name");
const PASSWORD=document.querySelector("#password");
const MESSAGE=document.querySelector(".message_container");
const AGE=document.querySelector("#age");
const EMPTYMESSAGENAME=document.querySelector(".empty_container-name");
const EMPTYMESSAGEPASSWORD=document.querySelector(".empty_container-password");
const EMPTYMESSAGEAGE=document.querySelector(".empty_container-age");

document.querySelector(".send").addEventListener("click",readInformation);

function readInformation(){
    const NAMEVALUE=NAME.value.trim();
    const PASSWORDVALUE=PASSWORD.value.trim();
    const AGEVALUE=Number(AGE.value);
  (NAMEVALUE && PASSWORDVALUE && AGEVALUE) 
   ? readValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE)
   : emptyValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE);
   deleteInformation(); 
}

function readValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE){
      (MESSAGE) && deleteInformation();
 if (NAMEVALUE==="JORGE" && PASSWORDVALUE==="123" && AGEVALUE>=18){
    MESSAGE.innerHTML=`<p class="correct-message">Nombres, contraseñas y
         edad correctas, BIENVENIDO</p>`;
        EMPTYMESSAGENAME.innerHTML="";
        EMPTYMESSAGEPASSWORD.innerHTML="";
        EMPTYMESSAGEAGE.innerHTML=""; 
 } else{
     MESSAGE.innerHTML=`<p class="error-message">Error: La informacion, contraseña o 
        la edad son incorrectas </p>`; 
 }
     deleteAnswer();
     answer();
}

function emptyValue(NAMEVALUE,PASSWORDVALUE,AGEVALUE){
     if(NAMEVALUE==="" && PASSWORDVALUE==="" && AGEVALUE===0){
        EMPTYMESSAGENAME.innerHTML=`<p class="empty_message">Debes colocar un nombre</p>`;
        EMPTYMESSAGEPASSWORD.innerHTML=`<p class="empty_message">Debes colocar una contraseña</p>`;
        EMPTYMESSAGEAGE.innerHTML=`<p class="empty_message">Debes colocar una edad</p>`;
        MESSAGE.innerHTML="";
         deleteAnswer();
        answer();
    }else if(NAMEVALUE===""){
        EMPTYMESSAGENAME.innerHTML=`<p class="empty_message">Debes colocar un nombre</p> `;
        deleteAnswer();
        answer();
    }else if(PASSWORDVALUE===""){
        EMPTYMESSAGEPASSWORD.innerHTML=`<p class="empty_message">Debes colocar una contraseña</p>`;
        deleteAnswer();
        answer()
    }else if(AGEVALUE===0){
        EMPTYMESSAGEAGE.innerHTML=`<p class="empty_message">Debes colocar una edad</p> `;
        deleteAnswer();
        answer();
    } else {
        EMPTYMESSAGENAME.innerHTML=`<p>DebesSSSSSSSSSSSS llenar el campo</p>`;
    }
}


function deleteInformation(){
    NAME.value="";
    PASSWORD.value="";
    AGE.value="";
}
