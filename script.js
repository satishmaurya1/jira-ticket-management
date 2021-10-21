let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-container");

addbtn.addEventListener("click",()=>{
    modal.classList.toggle("active");
})