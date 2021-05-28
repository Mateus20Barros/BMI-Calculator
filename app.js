const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const btnCalc = document.querySelector('.calc');
const btnClear = document.querySelector('.clear');
const local = document.querySelector('.show');

const paragraph = document.createElement('p');

const Message = (type, comment) => {
    paragraph.setAttribute('class', type)
    paragraph.textContent = comment
    local.append(paragraph)
}

const calcBMI = () => {

    const BMI_Result = (weight.value / (height.value * height.value)).toFixed(2);
    
    const verryUnderWeight = BMI_Result < 17;
    const underWeight = BMI_Result > 17 && BMI_Result <= 18.49;
    const idealWeight = BMI_Result >= 18.50 && BMI_Result <= 24.99;
    const overWeight = BMI_Result >= 25.00 && BMI_Result <= 29.99;
    const obese_I = BMI_Result >= 30 && BMI_Result <= 34.99;
    const obese_II = BMI_Result > 34.99;
    
    if (verryUnderWeight){
        Message("dangerusWeight", `"${BMI_Result}" - You are verry under weight`);
    }
    else if (underWeight){
        Message("warningWeight", `"${BMI_Result}" - You are under weight`);
    }
    else if (idealWeight){
        Message("idealWeight", `"${BMI_Result}" - You are ideal weight`);
    }
    else if (overWeight){
        Message("warningWeight", `"${BMI_Result}" - You are over weight`);
    }
    else if (obese_I){
        Message("dangerusWeight", `"${BMI_Result}" - You are obese I`);
    }
    else if (obese_II){
        Message("dangerusWeight", `"${BMI_Result}" - You are obese II`);
    }
    else {
        Message("please", 'Please! Enter your Height and Weight');
    }
}

const reset = () => {
    paragraph.remove()
    height.value = '';
    weight.value = '';
}

btnCalc.addEventListener('click', calcBMI);
btnClear.addEventListener('click', reset);