
let PaymentForm = document.getElementById('PaymentForm');

PaymentForm.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let errors = {}

    let rgxValidCard = /^\d{16}$/;
    let rgxValidCVC = /^\d{3}$/;
    let rgxValidAmount = /[1-9][0-9]*$/;;
    let rgxValidFirstName = /[a-zA-Z]+/;
    let rgxValidLastName = /[a-zA-Z]+/;
    let rgxValidCity = /[a-zA-Z]+/;
    let rgxValidPostalCode = /(^\d{7}$)/;
    let rgxValidMessage = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;

    let cardFeedback = document.querySelector('#cardFeedback');
    let cvcFeedback = document.querySelector('#cvcFeedback');
    let amountFeedback = document.querySelector('#amountFeedback');
    let firstnameFeedback = document.querySelector('#firstnameFeedback');
    let lastnameFeedback = document.querySelector('#lastnameFeedback');
    let cityFeedback = document.querySelector('#cityFeedback');
    let stateFeedback = document.querySelector('#stateFeedback');
    let postalcodeFeedback = document.querySelector('#postalcodeFeedback');
    let messageFeedback = document.querySelector('#messageFeedback');


    let { card, cvc, amount, firstname, lastname, city, state, postalcode, message} = evento.target;

    if (card.value === '') {
        errors['card'] = 'Card no puede estar vacio';
        card.classList.add('is-invalid');
        
    }
    else if (!rgxValidCard.test(card.value)) {
        errors['card'] = 'Card debe contener 16 números';
        card.classList.add('is-invalid');
        
    }
    else {
        card.classList.remove('is-invalid');
        delete errors['card'];
        
    }

    if (cvc.value === '') {
        errors['cvc'] = 'CVC no puede estar vacio';
        cvc.classList.add('is-invalid');
        
    }
    else if (!rgxValidCVC.test(cvc.value)) {
        errors['cvc'] = 'CVC debe contener 3 números';
        cvc.classList.add('is-invalid');
        

    } else {
        cvc.classList.remove('is-invalid');
        delete errors['cvc'];
        
    }

    if (amount.value === '') {
        errors['amount'] = 'Amount no puede estar vacio';
        amount.classList.add('is-invalid');
        
    }
    else if (!rgxValidAmount.test(amount.value)) {
        errors['amount'] = 'Amount debe ser un valor sobre 0';
        amount.classList.add('is-invalid');
        
    }
    else {
        amount.classList.remove('is-invalid');
        delete errors['amount'];
        
    }

    if (firstname.value === '') {
        errors['firstname'] = 'First name no puede estar vacio';
        firstname.classList.add('is-invalid');
        
    }
    else if (!rgxValidFirstName.test(firstname.value)) {
        errors['firstname'] = 'First name debe ser válido (sin números ni carécteres especiales)';
        firstname.classList.add('is-invalid');
        
    }
    else {
        firstname.classList.remove('is-invalid');
        delete errors['firstname'];
        
    }

    if (lastname.value === '') {
        errors['lastname'] = 'Last name no puede estar vacio';
        lastname.classList.add('is-invalid');
        
    }
    else if (!rgxValidLastName.test(lastname.value)) {
        errors['lastname'] = 'Last name debe ser válido (sin números ni carácteres especiales)';
        lastname.classList.add('is-invalid');
        
    }
    else {
        lastname.classList.remove('is-invalid');
        delete errors['lastname'];
        
    }

    if (city.value === '') {
        errors['city'] = 'City no puede estar vacio';
        city.classList.add('is-invalid');
        
    }
    else if (!rgxValidCity.test(city.value)) {
        errors['city'] = 'City debe ser un válido (sin números ni carácteres especiales)';
        city.classList.add('is-invalid');
        
    }
    else {
        city.classList.remove('is-invalid');
        delete errors['city'];
        
    }

    if (state.value === 'Pick a State') {
    errors['state'] = 'Escoge un State';
        state.classList.add('is-invalid');
        
    }
    else {
        state.classList.remove('is-invalid');
        delete errors['state'];
        
    }

    if (postalcode.value === '') {
        errors['postalcode'] = 'Postal code no puede estar vacio';
        postalcode.classList.add('is-invalid');
        
    }
    else if (!rgxValidPostalCode.test(postalcode.value)) {
        errors['postalcode'] = 'Postal code debe contener 7 dígitos';
        postalcode.classList.add('is-invalid');
        
    }
    else {
        postalcode.classList.remove('is-invalid');
        delete errors['postalcode'];
        
    }

    if (message.value === '') {
        errors['message'] = 'Message no puede estar vacio';
        message.classList.add('is-invalid');
        
    }
    else if (!rgxValidMessage.test(message.value)) {
        errors['message'] = 'Debe escribir un mensaje válido';
        message.classList.add('is-invalid');
        
    }
    else {
        message.classList.remove('is-invalid');
        delete errors['message'];
        
    }


    if (errors['card'] || errors['cvc'] || errors['amount'] || errors['firstname'] || errors['lastname'] || errors['city'] || errors['state'] || errors['postalcode'] || errors['message']) {
        console.log(errors);
        const alertPlaceholder = document.getElementById('form')

        if (card.value === '' || cvc.value === '' || amount.value === '' || firstname.value === '' || lastname.value === '' || city.value === '' || state.value === 'Pick a State' || postalcode.value === ''|| message.value === ''  ) {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-danger" role="alert">`,
                `Some fields are missing`,
                '</div>'
            ].join('')
            if (alertPlaceholder.childElementCount === 0) {
                alertPlaceholder.append(wrapper)
            }
        }
        else {
                alertPlaceholder.remove(wrapper)
            }

        if (errors['card']) cardFeedback.innerHTML = errors['card'];
        if (errors['cvc']) cvcFeedback.innerHTML = errors['cvc'];
        if (errors['amount']) amountFeedback.innerHTML = errors['amount'];
        if (errors['firstname']) firstnameFeedback.innerHTML = errors['firstname'];
        if (errors['lastname']) lastnameFeedback.innerHTML = errors['lastname'];
        if (errors['city']) cityFeedback.innerHTML = errors['city'];
        if (errors['state']) stateFeedback.innerHTML = errors['state'];
        if (errors['postalcode']) postalcodeFeedback.innerHTML = errors['postalcode'];
        if (errors['message']) messageFeedback.innerHTML = errors['message'];

    } else {
        evento.target.submit();
    }
})
