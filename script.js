let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-container");

let maincontainer= document.querySelector(".main-container");
let textareacontainer= document.querySelector(".text-area-container");
let colors = ["rgb(247, 140, 140)","rgb(152, 250, 152)","rgb(163, 163, 255)","rgb(70, 69, 69)"];
let modalprioritycolor=colors[colors.length-1];

let prioritycolors=document.querySelectorAll(".priority-color");

prioritycolors.forEach((colorelem ,index) => {

    colorelem.addEventListener("click",() => {

        prioritycolors.forEach((prioritycolorelem ,index) => {
                prioritycolorelem.classList.remove("border");
        
        });
    });
    
        colorelem.classList.add("border");
});



addbtn.addEventListener("click",()=>{
    modal.classList.toggle("active");
});




modal.addEventListener("keydown",(e)=>{
    let key = e.key;
   
    if(key === 'Shift'){
        createTicket();
        modal.classList.remove("active");
        textareacontainer.innerText= "";
    }
});



function createTicket(){
    let ticketContainer=document.createElement("div");
    ticketContainer.setAttribute("class","ticket-container");
    ticketContainer.innerHTML= `<div class="ticket-color"></div>
    <div class="ticket-id">sample-id</div>
    <div class="task-area">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>`;

    maincontainer.appendChild(ticketContainer);
};

