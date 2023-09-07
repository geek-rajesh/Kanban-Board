const plusBtnElem = document.querySelector(".add-btn");
const modalElem = document.querySelector(".modal");
const modalColorAll = document.querySelectorAll(".modal-color");
const textareaElem = document.querySelector(".textarea");
const ticketContaiinerElem = document.querySelector(".ticket-container");
const uid = new ShortUniqueId({ length: 5 });

plusBtnElem.addEventListener("click", () => {
  modalElem.style.display = "flex";
});

for (let i = 0; i < modalColorAll.length; i++) {
  const currModalColorElem = modalColorAll[i];
  currModalColorElem.addEventListener("click", (event) => {
    for (let j = 0; j < modalColorAll.length; j++) {
      modalColorAll[j].classList.remove("selected");
    }
    const targetElem = event.target;
    targetElem.classList.add("selected");
  });
}

modalElem.addEventListener("keypress", (event) => {
  if (event.key == "Enter" && event.shiftKey == false) {
    modalElem.style.display = "none";
    const task = textareaElem.value;
    const currColorElem = modalElem.querySelector(".selected");
    const taskColor = currColorElem.getAttribute("curCol");
    textareaElem.value = "";
    modalElem.querySelector(".selected").classList.remove("selected");
    modalElem.querySelector(".red").classList.add("selected");
    const newTicket = document.createElement("div");
    newTicket.setAttribute("class", "ticket");
    newTicket.innerHTML = ` <div class="ticket-color ${taskColor}">#${uid.rnd()}</div>
                            <div class="ticket-text">${task}</div>
                            <i class="fa-solid fa-lock lock_icon"></i>
                            `;
    ticketContaiinerElem.append(newTicket);
    const lockBtn = ticketContaiinerElem.querySelector(".lock_icon");
    handleLockIcon(lockBtn);
  }
});

const handleLockIcon = (element) => {
  element.addEventListener("click", () => {
    const isLocked = element.classList.contains("fa-lock");
    if (isLocked) {
      element.classList.remove("fa-lock");
      element.classList.add("fa-lock-open");
    } else {
      element.classList.remove("fa-lock-open");
      element.classList.add("fa-lock");
    }
  });
};
