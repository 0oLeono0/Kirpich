document.addEventListener('DOMContentLoaded', () => {
    // Заказать рекламу
    const requestBtn = document.querySelector('.header_nav_btn');
    const requestOver = document.querySelector('.request_overflow');
    const requestOver2 = document.querySelector('.request_overflow2');
    const requestModal = document.querySelector('.request');
    const checkbox = document.querySelector('.request_checkbox');
    const checkboxBtn = document.querySelector('.request_btn');
    const requestClose = document.querySelector('.request_close');
    const block = document.querySelector('.request_block');
    const send = document.querySelector('.request_btn');
    const exit = document.querySelector('.submit_exit');
    const portfolioBtn = document.querySelector('.portfolio_btn');
    const servicesBtn = document.querySelector('.services_btn');

    requestBtn.addEventListener('click', openModal);
    portfolioBtn.addEventListener('click', openModal);
    servicesBtn.addEventListener('click', openModal);

    checkbox.addEventListener('click', () => {
        if (checkbox.classList.contains('active')) {
            checkbox.classList.remove('active');
            checkboxBtn.classList.remove('active');
            requestClose.classList.add('active');
        } else {
            checkbox.classList.add('active');
            checkboxBtn.classList.add('active');
            requestClose.classList.remove('active');
            send.addEventListener('click', () => {
                block.classList.remove('active');
                requestOver2.classList.add('active');

                exit.addEventListener('click', () => {
                    closeModal();
                });
            });
        }
    });

    function openModal() {
        requestModal.classList.add('active');
        requestOver.classList.add('active');
        document.body.classList.add('modal-open');
        if (block.classList.contains('active')) {
            requestClose.addEventListener('click', () => {
                closeModal();
            });
        } else {
            requestOver2.classList.add('active');
        }
    }

    function closeModal() {
        requestModal.classList.remove('active');
        requestOver.classList.remove('active');
        checkbox.classList.remove('active');
        checkboxBtn.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    // Команда
    const comandBtn = document.querySelector('.about_btn');
    const comandOverflow = document.querySelector('.comand_overflow');
    const comandClose = document.querySelector('.comand_close');

    comandBtn.addEventListener('click', () => {
        comandOverflow.classList.add('active');
        document.body.classList.add('modal-open');
    });

    comandClose.addEventListener('click', () => {
        comandOverflow.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
});