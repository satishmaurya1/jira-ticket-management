let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-container");

let maincontainer= document.querySelector(".main-container");
let textareacontainer= document.querySelector(".text-area-container");

let colors = ["red","green","blue","black"];
let modalprioritycolor=colors[colors.length-1];

let prioritycolors=document.querySelectorAll(".priority-color");




prioritycolors.forEach((colorelem ,index) => {

    colorelem.addEventListener("click",() => {

        prioritycolors.forEach((prioritycolorelem ,index) => {
                prioritycolorelem.classList.remove("border");
        
        });

        colorelem.classList.add("border");
        modalprioritycolor=colors[index];
    });
    
      
});



addbtn.addEventListener("click",()=>{
    modal.classList.toggle("active");
});




modal.addEventListener("keydown",(e)=>{
    let key = e.key;
   
    if(key === 'Shift'){
        createTicket(modalprioritycolor,textareacontainer.value, shortid());
        modal.classList.remove("active");
        textareacontainer.value= " ";
    }
});



function createTicket(ticketColor,ticketTask,ticketid){
    let ticketContainer=document.createElement("div");
    ticketContainer.setAttribute("class","ticket-container");
    ticketContainer.innerHTML= `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id"> # ${ticketid}</div>
    <div class="task-area">${ticketTask}</div>`;

    maincontainer.appendChild(ticketContainer);
};

