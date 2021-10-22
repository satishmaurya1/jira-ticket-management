let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-container");

let maincontainer= document.querySelector(".main-container");
let textareacontainer= document.querySelector(".text-area-container");

addbtn.addEventListener("click",()=>{
    modal.classList.toggle("active");
})


modal.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key === "m"){
        createTicket();
        modal.classList.remove("active");
        textareacontainer.innerText= "";
    }
})

function createTicket(){
    let ticketContainer=document.createElement("div");
    ticketContainer.setAttribute("class","ticket-container");
    ticketContainer.innerHTML= `<div class="ticket-color"></div>
    <div class="ticket-id">sample-id</div>
    <div class="task-area">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>`;

    maincontainer.appendChild(ticketContainer);
}

