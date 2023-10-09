let inputText = document.querySelector('.inputText');
let submitForm = document.querySelector('.submitForm');
let information = document.querySelectorAll('.search-element');

function go_scroll(block) {
    block.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
}

const searchFunction=(text)=> {
        information.forEach((element)=> {
            if(element.textContent == text) {
                element.style = 'animation:animationText 2s;';
                element.parentElement.style = 'animation:animationCard 2s;'
                console.log(element);
                go_scroll(element);
            }
        });
    }

    submitForm.addEventListener('click', (e)=> {
        searchFunction(inputText.value);
    });