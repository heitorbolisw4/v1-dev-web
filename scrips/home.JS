/* config menu responsivo */

const menuHamburger = document.getElementById("menu-hamburger")
const menu = document.getElementById("menu")
const nav = document.querySelector('.nav')

const menuResponsive = () =>{
      nav.classList.toggle('active');
}

menuHamburger.addEventListener('click', () => menuResponsive())

document.addEventListener('click', (event) =>{
    const clickInMenu = nav.contains(event.target);
    const clickoutMenu = menuHamburger.contains(event.target)
    if(!clickInMenu && !clickoutMenu){
        nav.classList.remove("active")
    } 

});


/* form interativo */

let formdata = {
    nome: "",
    sobre: "",
    email: "",
    msg: "",
}
// função para nextstep 
const nextStep = (stepnumber) =>{
    const currentStep = document.querySelector('.form-step.active')
    const nextStep = document.getElementById(`step${stepnumber}`)

    if (!validateCurrentStep(currentStep)) {
        return;
    }

    setTimeout(() =>{
        currentStep.classList.remove('active')
        nextStep.classList.add('active')
        nextStepElement.style.animation = 'fadeIn 0.5 ease-in-out';
    }, 300)
}
// function para validar o step atual

const validateCurrentStep = (currentStep) =>{
    const stepId = currentStep.id;
    
    switch(stepId){
        case 'step1':
            const inputName = document.getElementById('iname')
            if(!inputName.value.trim()){
                window.alert('Digite seu nome')
                showError(nameInput, 'Por favor, digite seu nome');
                return false;
                
            }
            break;
            case 'step2':
                const sobreTech = document.getElementById('sobreTech')
                if(!sobreTech.value.trim()){
                    window.alert('Digite algo ai bro')
                    showError(sobreTech, 'Digitealgo ai bro');
                    return false;                    
                }
                break;
                case 'step3':
                    const inputEmail = document.getElementById('iemail')
                    const contactInput = inputEmail.value.trim()
                    if(!contactInput.includes("@")){
                        window.alert('Digite algo ai bro')
                        showError(inputEmail, 'Digitealgo ai bro');
                        return false;             
                    }
                    break;
                    
                }
                return true
}

// Função para salvar o state atual
const saveCurrentStep = (currentStep) => {
    const stepId = currentStep.id;
    switch (stepId){
        case 'step1':
        formdata.nome = document.getElementById('iname').value.trim();
        break;
        case 'step2':
        formdata.sobre = document.getElementById('sobreTech').value.trim();
        break;
        case 'step1':
        formdata.email = document.getElementById('iemail').value.trim();
        break;                
        
    }
}

const nextBtn = document.querySelectorAll(".next-btn")
nextBtn.forEach(button =>{
    button.addEventListener('click', () =>{
        const nextStepNumber = button.dataset.nextStep;
        nextStep(nextStepNumber)
    })
})
            
            
            
            
            
            
            
            
            
            
            