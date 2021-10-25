let addbtn=document.querySelector(".add-btn");
let removebtn=document.querySelector(".remove-btn");


let modal=document.querySelector(".modal-container");

let maincontainer= document.querySelector(".main-container");
let textareacontainer= document.querySelector(".text-area-container");

let colors = ["red","green","blue","black"];
let modalprioritycolor=colors[colors.length-1];

let prioritycolors=document.querySelectorAll(".priority-color");

let toolBoxColors = document.querySelectorAll(".color");


let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketArray = [];

for(let i=0; i< toolBoxColors.length; i++){
    toolBoxColors[i].addEventListener("click",()=>{
        let currentToolBoxColor = toolBoxColors[i].classList[0];
        let filteredTickets =  ticketArray.filter((ticketobj, index)=>{
                return currentToolBoxColor === ticketobj.ticketColor;

        })

        let allTicketContainer = document.querySelectorAll(".ticket-container");
        for (let i = 0; i < allTicketContainer.length; i++) {
            allTicketContainer[i].remove();
        }

        filteredTickets.forEach((ticketobj, index) =>{
                createTicket(ticketobj.ticketColor, ticketobj.ticketTask, ticketobj.ticketid);
        })
    })
}


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


removebtn.addEventListener("click",()=>{
    removeFlag = !removeFlag;
})


modal.addEventListener("keydown",(e)=>{
    let key = e.key;
   
    if(key === 'Shift'){
        createTicket(modalprioritycolor,textareacontainer.value);
        modal.classList.remove("active");
        textareacontainer.value= " ";
    }
});



function createTicket(ticketColor,ticketTask,ticketid){

    let id = ticketid || shortid();

   
    let ticketContainer=document.createElement("div");
    ticketContainer.setAttribute("class","ticket-container");
    ticketContainer.innerHTML= `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id"> # ${id}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
    <i class="fas fa-lock"></i>
</div> `;

    maincontainer.appendChild(ticketContainer);
  

    if (!ticketid) {
        ticketArray.push({ticketColor, ticketTask, ticketid : id});

    }



    handleRemoval(ticketContainer);

    handleLock(ticketContainer);

     handleColor(ticketContainer);
   
};


function handleRemoval(ticket){
 
 if(removeFlag) ticket.remove();
}



function handleLock(ticket){
  let ticketlockElem=ticket.querySelector(".ticket-lock");
  let taskarea=ticket.querySelector(".task-area");
  let  ticketlock = ticketlockElem.children[0];
  ticketlock.addEventListener("click",()=>{
      if(ticketlock.classList.contains(lockClass)){

        ticketlock.classList.remove(lockClass);
        ticketlock.classList.add(unlockClass);
        taskarea.setAttribute("contenteditable","true");


      }else{
        
        
        ticketlock.classList.remove(unlockClass);
        ticketlock.classList.add(lockClass);
        taskarea.setAttribute("contenteditable","false");

      }
  })
}



function handleColor(ticket){
    let ticketColor = ticket.querySelector(".ticket-color");

    ticketColor.addEventListener("click",()=>{

        let currentTicketColor = ticketColor.classList[1];
        let currentTicketColorIndex = colors.findIndex((color)=>{
                  return currentTicketColor === color;
          })
      
          currentTicketColorIndex++;
      
          let newTicketColorIndex = currentTicketColorIndex%colors.length;
          let newTicketColor = colors[newTicketColorIndex];
          ticketColor.classList.remove(currentTicketColor);
          ticketColor.classList.add(newTicketColor);

    })

  
}