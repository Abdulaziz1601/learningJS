import {closeModal, openModal} from './modal';
import {postData} from '../services/services';
function forms(formSelector, modalTimerId) {
    //Forms  

    const forms =  document.querySelectorAll(formSelector); //We are getting all forms

    const message = {
        loading: 'img/forms/spinner.svg',
        success: 'Thank you! We will contact you soon!',
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item); 
    });


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading; // We could set src with setAttribute
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;// Adding styled classes like .show is the best way
            form.insertAdjacentElement('afterend', statusMessage);
             
            const formData = new FormData(form); // looks like JSON but It is object FormData
            //Most important thing is:
            //There has to be attribute name, js can't find form, so you've to check it

            //!!If we need to send data as json file, we need headers!!
            // request.setRequestHeader('Content-type', 'multipart/form-data'); //json
            // FormData object is specific object, so we cannot just turn it to JSON, as simple objects //json

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // starting debug from deepest bracket: turned formdata to arr -> turned arr to classic (simple) obj -> turned obj to JSON.


            // fetch('server.php', {
            //     method: "POST",
            //     headers:{ 
            //         "Content-type": "multipart/form-data"
            //     },
            //     body: JSON.stringify(object) //Converts an object to JSON //json //JSON object is sent not formData
            // })
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);  
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset(); //Deletes text after sending it to server or We can clear their values incrementally, It is same 
            });
        });
    }
    // Styling ater post of message, with JS
    // We wanna took just wraper (.modal__dialog) of the previous modal, and just replace it with 
    // texts such as succesc fail or etc
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        //We are hiding this element, before showing modal 
        prevModalDialog.classList.add('hide');// content is hidden, not deleted - in case user wants to access IT
        openModal('.modal', modalTimerId); //opens modal

        // Creating new THANKS content
        const thanksModal = document.createElement('div');// Wrapper is created inside main .modal class
        thanksModal.classList.add('modal__dialog'); //Remember, previous .modal__dialog class is hidden
        // and we are creating another new  .modal__dialog class inside main modal class
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;