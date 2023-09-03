let inputText = document.querySelector('.inputText');
let submitForm = document.querySelector('.submitForm');
let information = document.querySelectorAll('.searchh3');

const searchFunction=(text)=> {
        information.forEach((element)=> {
            if(element.textContent == text) {
                element.style = 'animation:animationText 2s;';
                element.parentElement.style = 'animation:animationCard 2s;'
                console.log(element);
            }
        });
    }

    submitForm.addEventListener('click', (e)=> {
        searchFunction(inputText.value);
    });