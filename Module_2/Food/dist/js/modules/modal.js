//DRY don't repeat yourself, code was written 2, so copied, because of this we created fucntion
function openModal(modalSelector, modalTimerID) {
    const modal = document.querySelector(modalSelector);//  '.modal'

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerID);
    if (modalTimerID) {
        clearInterval(modalTimerID); //Deletes an interval if user is already opened a modal
    }   
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);//  '.modal'

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; //browser automatically knows what to do
}

function modal(triggerSelector, modalSelector, modalTimerID) { //Adding args, to make our module reusable: to use open and close Modal funcs
    // Modal
// All variables are taken
    const modalTrigger = document.querySelectorAll(triggerSelector), // [data-modal]'
          modal = document.querySelector(modalSelector);//  '.modal'


    modalTrigger.forEach( btn =>
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerID)) // if we write like these: openModal(modalSelector), it will call after func immideatly after adding ev.listener so we have to wrap func like this: () => openModal(modalSelector), then func will be called when user will "click" on btn 
    );
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector, modalTimerID);    
        }
    });

    // Event when key (esc) is pressed, modal is closed

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')){ //If modal is open
            closeModal(modalSelector, modalTimerID);
        }
    });
    // With toggle function
    // modalTrigger.forEach((item) => { // adding events to all triggers to open modal
    //     item.addEventListener('click', () => {
    //         modal.classList.toggle('show');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });
    
    // modalCloseBtn.addEventListener('click', () => { // adding events to all triggers to close modal
    //     modal.classList.toggle('show');
    //     document.body.style.overflow = ''; //browser automatically knows what to do
    // });

    // Task is when user scrolls till some point modal pops up
    //If user scrolls till end, then modal appears
    function showModalByScroll() {
        // user-scrolled-part      height-that-is-visible-to-client        whole-height-of-doc
        if(window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalByScroll); // after event is used it is removed but modal is still shown only event is removed
        }
    }
    window.addEventListener('scroll', showModalByScroll); // We cannot put here , {once: true} as 3RD arg because we added event to window so scroll changes in window
    // much time so when usemodalSelectorr starts scrolling and ends it event is triggered once and deleted

}

export default modal;
export {closeModal}; //Exported funcs, to use them in another script
export {openModal};