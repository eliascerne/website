sessionStorage.removeItem('validEmail');

// localStorage.setItem('emailHardReload', 0);


if (localStorage.getItem('emailHardReload') == true && localStorage.getItem('counterActive') == true) {
    console.log('counter is active and hard reload detacted');
    localStorage.setItem('counterHardReload', 1);

    const notificationCounter = document.getElementById('notification_counter_error');
    const emailActiveTime = document.getElementById('email_active_time');
    notificationCounter.classList.add('notification_show');
    emailActiveTime.innerHTML = localStorage.getItem('counterNumber');

    var i = localStorage.getItem('counterNumber');

    function myLoop() {
        setTimeout(function () {
            const emailActiveTime = document.getElementById('email_active_time');
            const notificationCounter = document.getElementById('notification_counter_error');

            emailActiveTime.innerHTML = i;
            localStorage.setItem('counterNumber', i);

            i--;
            if (i >= 0) {
                myLoop();
            } else {
                notificationCounter.classList.remove('notification_show');
                notificationCounter.classList.add('notification_hide');
                localStorage.setItem('emailActive', 1);
                localStorage.setItem('counterActive', 0);
                // sessionStorage.removeItem('emailActiveTime');
            }
        }, 1000)
    }

    myLoop();


    console.log('counter is active');
} 

else if (localStorage.getItem('emailHardReload') == true && localStorage.getItem('counterActive') == false && localStorage.getItem('initialCounterReady') == true) {
    localStorage.setItem('emailActive', 0);
}

else {
    localStorage.setItem('emailActive', 1);
    localStorage.setItem('emailHardReload', 1);
    localStorage.setItem('counterHardReload', 0);
}

if (localStorage.getItem('emailHardReload') == true && localStorage.getItem('counterActive') == false && localStorage.getItem('initialCounterReady') == true) {
    var i = localStorage.getItem('initialCounterNumber');

    function myLoop() {
        setTimeout(function () {
            localStorage.setItem('counterNumber', i);

            i--;
            if (i >= 0) {
                myLoop();
            } else {
                localStorage.setItem('emailActive', 1);
                localStorage.setItem('counterActive', 0);
                localStorage.setItem('counterHardReloadReady', 0);
                // sessionStorage.removeItem('emailActiveTime');
            }
        }, 1000)
    }

    myLoop();
    localStorage.setItem('counterHardReloadReady', 1);
}



/* CONTACT ME EMAIL SENDER */
function buttonPressed() {
    var inputName = document.getElementById('input_name').value;
    var inputEmail = document.getElementById('input_email').value;
    var inputCompany = document.getElementById('input_company').value;
    var inputMessage = document.getElementById('input_message').value;

    console.log('Name: ' + inputName);
    console.log('Email: ' + inputEmail);
    console.log('Company: ' + inputCompany);
    console.log('Message: ' + inputMessage);

    if (inputName && sessionStorage.getItem('validEmail') == true && inputCompany && inputMessage && localStorage.getItem('emailActive') == true) {
        Email.send({
            SecureToken: "92255cd6-f4f4-482e-bf1e-1a6040acfd91",
            To: 'elias.cerne@icloud.com',
            From: 'elias@eliascerne.com',
            Subject: 'eliascerne.com: New Message',
            Body: `You have got a new message from ${inputName}. </br>
                    Email Address: ${inputEmail} </br>
                    Company: ${inputCompany} </br>
                The Message: ${inputMessage}`
        }).then(
            showNotificationEmailSuccess()
            //message => alert(message)
        );
    }

    else if (inputName && sessionStorage.getItem('validEmail') == true && inputCompany && inputMessage && localStorage.getItem('emailActive') == false && localStorage.getItem('counterActive') == false) {

        const emailActiveTime = document.getElementById('email_active_time');
        const notificationCounter = document.getElementById('notification_counter_error');

        notificationCounter.classList.remove('notification_hide');

        localStorage.setItem('counterActive', 1);
        console.log('counter is active')
        
        notificationCounter.classList.add('notification_show');
        if (localStorage.getItem('counterHardReloadReady') == true) {
            var i = localStorage.getItem('counterNumber');
        }
        else {
            var i = localStorage.getItem('initialCounterNumber');
        }
        
        function myLoop() {
            setTimeout(function () {
                emailActiveTime.innerHTML = i;
                localStorage.setItem('counterNumber', i);

                i--;
                if (i >= 0) {
                    myLoop();
                } else {
                    notificationCounter.classList.remove('notification_show');
                    notificationCounter.classList.add('notification_hide');
                    localStorage.setItem('emailActive', 1);
                    localStorage.setItem('counterActive', 0);
                    // sessionStorage.removeItem('emailActiveTime');
                }
            }, 1000)
        }

        myLoop();
    }

    // else if (localStorage.getItem('emailActive') == false && localStorage.getItem('counterActive') == true && localStorage.getItem('counterHardReload') == true) {

    //     const notificationCounter = document.getElementById('notification_counter_error');
    //     const emailActiveTime = document.getElementById('email_active_time');
    //     notificationCounter.classList.add('notification_show');
    //     emailActiveTime.innerHTML = localStorage.getItem('counterNumber');

    //     var i = localStorage.getItem('counterNumber');
        
    //     function myLoop() {
    //         setTimeout(function () {
    //             emailActiveTime.innerHTML = i;
    //             localStorage.setItem('counterNumber', i);

    //             i--;
    //             if (i >= 0) {
    //                 myLoop();
    //             } else {
    //                 notificationCounter.classList.remove('notification_show');
    //                 notificationCounter.classList.add('notification_hide');
    //                 localStorage.setItem('emailActive', 1);
    //                 localStorage.setItem('counterActive', 0);
    //                 // sessionStorage.removeItem('emailActiveTime');
    //             }
    //         }, 1000)
    //     }

    //     myLoop();


    //     console.log('counter is active');
    // }

    else if (localStorage.getItem('emailActive') == false && localStorage.getItem('counterActive') == true) {
        
    }

    else if (localStorage.getItem('emailActive') == false && localStorage.getItem('counterActive') == false) {
        const emailActiveTime = document.getElementById('email_active_time');
        const notificationCounter = document.getElementById('notification_counter_error');

        notificationCounter.classList.remove('notification_hide');

        localStorage.setItem('counterActive', 1);
        console.log('counter is active')
        
        notificationCounter.classList.add('notification_show');

        if (localStorage.getItem('counterHardReloadReady') == true) {
            var i = localStorage.getItem('counterNumber');
        }
        else {
            var i = localStorage.getItem('initialCounterNumber');
        }
        console.log(i);
        function myLoop() {
            setTimeout(function () {
                emailActiveTime.innerHTML = i;
                localStorage.setItem('counterNumber', i);

                i--;
                if (i >= 0) {
                    myLoop();
                } else {
                    notificationCounter.classList.remove('notification_show');
                    notificationCounter.classList.add('notification_hide');
                    localStorage.setItem('emailActive', 1);
                    localStorage.setItem('counterActive', 0);
                    // sessionStorage.removeItem('emailActiveTime');
                }
            }, 1000)
        }

        myLoop();
    }

    else {
        console.log('Parameters are not correct filled in');
        showNotificationEmailError();
    }
}

/* SHOW NOTIFICATION FOR SUCCESSFULLY EMAIL DELIVER */
const notificationSuccess = document.getElementById('notification_email_success');
const progressBarEmailSuccess = document.getElementById('progress_bar_email_success');
var inputName = document.getElementById('input_name');
var inputEmail = document.getElementById('input_email');
var inputCompany = document.getElementById('input_company');
var inputMessage = document.getElementById('input_message');

function showNotificationEmailSuccess() {

    localStorage.setItem('emailActive', 0);
    localStorage.setItem('counterActive', 0);

    inputName.value = '';
    inputEmail.value = '';
    inputCompany.value = '';
    inputMessage.value = '';
    notificationSuccess.classList.remove('notification_hide');
    notificationSuccess.classList.add('notification_show');
    progressBarEmailSuccess.classList.add('notification_show');
    setTimeout(() => {
        progressBarEmailSuccess.classList.remove('notification_show');
        // notificationSuccess.classList.remove('notification_show');
        notificationSuccess.classList.add('notification_hide');
    }, 6000);

    var i = 50;

    function myLoop() {
        setTimeout(function () {
            localStorage.setItem('initialCounterNumber', i);

            i--;
            if (i >= 0) {
                myLoop();
            } else {
                localStorage.setItem('emailActive', 1);
            }
        }, 1000)
    }
    myLoop();
    localStorage.setItem('initialCounterReady', 1);
}

/* SHOW NOTIFICATION FOR AN EMAIL DELIVER ERROR */
const notificationError = document.getElementById('notification_email_error');
const progressBarEmailError = document.getElementById('progress_bar_email_error');

function showNotificationEmailError() {

    notificationError.classList.remove('notification_hide');
    notificationError.classList.add('notification_show');
    progressBarEmailError.classList.add('notification_show');

    setTimeout(() => {
        progressBarEmailError.classList.remove('notification_show');
        // notificationSuccess.classList.remove('notification_show');
        notificationError.classList.add('notification_hide');
    }, 6000);
    
}

/* CONTACT ME EMAIL VALIDATOR */
var inputEmail = document.getElementById('input_email');
const contactEmail = document.getElementById('contact_email');

inputEmail.addEventListener('change', function () {
        var Email = inputEmail.value;
        var validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|at)\b/;

        if(validEmail.test(Email)) {
            console.log('Email is valid');
            contactEmail.classList.remove('email_not_valid');
            sessionStorage.setItem('validEmail', 1);
        } else {
            console.log('Email is not valid');
            contactEmail.classList.add('email_not_valid');
            sessionStorage.setItem('validEmail', 0);
        }
        // Debugging
        // return validEmail.test(Email);
});