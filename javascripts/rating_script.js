const form2 = document.querySelector('#feedbackform');
const nameInput = document.querySelector('#name');

document.getElementById("submitt").onclick = function (e) {
  
  validateForm2();
    if(isFormValid2()==true){
        sendData();
     }else {
         e.preventDefault();
     }
  e.preventDefault();
};

function isFormValid2(){
    const inputContainer = form2.querySelectorAll('.form-control');
    let result = true;
    inputContainer.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm2() {
    //USERNAME
    if(nameInput.value.trim()==''){
        setError(nameInput, 'Name can not be empty');
    }else if(nameInput.value.trim().length <3 || nameInput.value.trim().length > 20){
        setError(nameInput, 'Name must be min 3 and max 20 charecters');
    }else {
        setSuccess(nameInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('h6');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}