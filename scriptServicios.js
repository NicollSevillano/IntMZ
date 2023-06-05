let sendButton = document.getElementById("contact-btn");
let nameInput = document.getElementById("input-name");
let emailInput = document.getElementById("input-email");
let telInput = document.getElementById("input-tel");
let consultInput = document.getElementById("text-area");
sendButton.addEventListener("click", () => {
    let nameValue = nameInput.value;
    let mailValue = emailInput.value;
    let telValue = telInput.value;
    let consultValue = consultInput.value;
    if (nameValue != "" && mailValue != "" && telValue != "")
        window.open(`mailto:mzinternational@internationalmz.com?subject=Solicitud de contacto de ${nameValue} &body=Buenas tardes!. 
        Mi nombre es ${nameValue} con telÃ©fono de contacto ${telValue}.
        Mi consulta es ${consultValue}.`);
})

function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}
let anchors = document.querySelectorAll(".our-services-card-text-container a");
let contact = document.getElementsByClassName("contact-btn");
contact[0].addEventListener("click", () => {
    scrollToSmoothly(8000, 500);
})
anchors[0].addEventListener("click", () => {
    if(document.body.clientWidth < 750){
        scrollToSmoothly(3000, 500);
    }
    else{
        scrollToSmoothly(1300, 500);
    }
})
anchors[1].addEventListener("click", () => {
    if(document.body.clientWidth < 750){
        scrollToSmoothly(4000, 500);
    }
    else{
        scrollToSmoothly(2500, 500);
    }
})
anchors[2].addEventListener("click", () => {
    if(document.body.clientWidth < 750){
        scrollToSmoothly(4800, 500);
    }
    else if(document.body.clientWidth < 992){
        scrollToSmoothly(3400, 500);
    }
    else if(document.body.clientWidth < 750){
        scrollToSmoothly(4500, 500);
    }
})
