const startBtn = document.querySelector('.start_button');
const popUp = document.querySelector('.pop_up');
const exitBtn = document.querySelector('.exitBtn ');
const body = document.querySelector('.exitBtn ');


startBtn.onclick = () =>{
    popUp.classList.add("active");
    // popUp.classList.add("active");
};

exitBtn.onclick = () =>{
    popUp.classList.remove("active");
};