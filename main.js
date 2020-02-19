'use strict'; 


class feedbackForm{

    constructor(){
        this.name = document.getElementById("name")
        this.email = document.getElementById('email'); 
        this.phone = document.getElementById('phone'); 
        this.message = document.getElementById('message'); 

        this._init();
    }

    showSuccess(field){
        let formGroup = field.parentNode; 
        if (field.id != 'message'){
            formGroup = formGroup.parentNode; 
            let glyphicon = formGroup.querySelector('.form-control-feedback');
            glyphicon.classList.remove('glyphicon-remove');
            glyphicon.classList.add('glyphicon-ok');
        }
            formGroup.classList.remove('has-error');
            formGroup.classList.add('has-success');
            formGroup.querySelector('.error-message').innerHTML = ''; 
    }

    showError(field, error_message){
        let formGroup = field.parentNode; 
        if (field.id != 'message'){
            formGroup = formGroup.parentNode; 
            let glyphicon = formGroup.querySelector('.form-control-feedback');
            glyphicon.classList.remove('glyphicon-ok');
            glyphicon.classList.add('glyphicon-remove');
        }

        formGroup.classList.remove('has-success');
        formGroup.classList.add('has-error');
        formGroup.querySelector('.error-message').innerHTML = error_message; 
    }

    validationMessage(){
        let str_message = this.message.value; 
        if (str_message == ''){
            let error_message ='Поле должно быть заполнено';
            this.showError(this.message, error_message); 
        }
        else
        { this.showSuccess(this.message); }
    }

    validationEmail(){
        let str_email = this.email.value; 
        if (str_email == ''){
            let error_message ='Поле должно быть заполнено';
            this.showError(this.email, error_message); 
        }
        else{
            this.showSuccess(this.email); 
        }
    }

    validationPhone(){
        let str_phone = this.phone.value; 
        let regexp  = /^(\+7)(\()([\d]{3})(\))([\d]{3})(\-)([\d]{4})$/
        if (!regexp.test(str_phone))
        {
            let error_message ='Поле может cодержать только цифры и должно соответствовать шаблону +7(000)000-0000';
            if (str_phone == ''){
                error_message ='Поле должно быть заполнено';
            }
            this.showError(this.phone, error_message); 
        }
        else {
            this.showSuccess(this.phone); 
        }

    }

    validationName(){
        let str_name = this.name.value; 
        let regexp = /[a-zA-Z]/;
        if (!regexp.test(str_name))
        {
            let error_message ='Поле может cодержать только буквы';
            if (str_name == ''){
                error_message ='Поле должно быть заполнено';
            }
            this.showError(this.name, error_message); 
        }
        else{
            this.showSuccess(this.name); 
        }
    }


    validationForm(){
        this.validationName();
        //this.validationEmail();  
        this.validationPhone();
        this.validationMessage(); 
    }

    _init(){
        let btn_send = document.querySelector('.btn-send');

        btn_send.addEventListener('click', (event) => {
            event.preventDefault(); 
            this.validationForm(); 

        });
    }


}

let obj = new feedbackForm(); 