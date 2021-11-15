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
            Body: `<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="content-type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0;"> <meta name="format-detection" content="telephone=no"/><!-- Responsive Mobile-First Email Template by Konstantin Savchenko, 2015. https://github.com/konsav/email-templates/ --> <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'); /* Reset styles */ body{margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important; font-family: 'Poppins', sans-serif;}body, table, td, div, p, a{-webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;}table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0;}img{border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}#outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;}/* Rounded corners for advanced mail clients only */ @media all and (min-width: 560px){.container{border-radius: 8px; -webkit-border-radius: 8px; -moz-border-radius: 8px; -khtml-border-radius: 8px;}}/* Set color for auto links (addresses, dates, etc.) */ a, a:hover{color: #FFFFFF;}.footer a, .footer a:hover{color: #828999;}</style> <title>Responsive HTML email templates</title> </head> <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; background-color: #2D3445; color: #FFFFFF;" bgcolor="#2D3445" text="#FFFFFF"> <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background"> <tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#2D3445"> <table border="0" cellpadding="0" cellspacing="0" align="center" width="500" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 500px;" class="wrapper"> <tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; padding-top: 20px; padding-bottom: 20px;"> <div style="display: none; visibility: hidden; overflow: hidden; opacity: 0; font-size: 1px; line-height: 1px; height: 0; max-height: 0; max-width: 0; color: #2D3445;" class="preheader"> New Message from eliascerne.com Juhhuu </div><!-- <a target="_blank" style="text-decoration: none;" href="https://github.com/konsav/email-templates/"><img border="0" vspace="0" hspace="0" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/logo-white.png" width="100" height="30" alt="Logo" title="Logo" style=" color: #FFFFFF; font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;"/></a> --> <a href="https://eliascerne.com" target="_blank" style="text-decoration: none; font-size: 1.5rem; font-weight: 500; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;">eliascerne.com</a> </td></tr><tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 0px;" class="hero"><img border="0" vspace="0" hspace="0" src="https://raw.githubusercontent.com/eliascerne/website/main/assets/img/thumbs_up.gif" alt="Please enable images to view this content" title="Hero Image" width="340" style=" width: 87.5%; max-width: 340px; color: #FFFFFF; font-size: 13px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; border-radius: 2rem; display: block;"/></a></td></tr><tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 2rem; font-weight: bold; line-height: 130%; padding-top: 1.5rem; color: #FFFFFF;" class="header"> New Message </td></tr><tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 1rem; font-weight: 500; line-height: 130%; color: #FFFFFF;"> by <a href="https://eliascerne.com" target="_blank" style="text-decoration: none;">eliascerne.com</a> </td></tr><tr> <td> <div class="client_container" style="padding-left: 1rem; padding-top: 2rem; padding-right: 1rem; display: flex; gap: 2rem; font-weight: 500; font-size: 1.25rem;"> <div class="form_description"> <p class="form_text" style="padding-bottom: .5rem;">Name:</p><p class="form_text" style="padding-bottom: .5rem;">Email:</p><p class="form_text" style="padding-bottom: .5rem;">Company:</p><p class="form_text" style="padding-bottom: .5rem;">Message:</p></div><div class="client_input"> <p class="client_text" style="padding-bottom: .5rem;">${inputName}</p><p class="client_text" style="padding-bottom: .5rem;">${inputEmail}</p><p class="client_text" style="padding-bottom: .5rem;">${inputCompany}</p><p class="client_text" style="padding-bottom: .5rem;">${inputMessage}</p></div></div></td></tr><!-- <tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; padding-top: 25px; padding-bottom: 5px;" class="button"><a href="https://github.com/konsav/email-templates/" target="_blank" style="text-decoration: underline;"> <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;"> <tr> <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: underline; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;" bgcolor="#E9703E"><a target="_blank" style="text-decoration: underline; color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href="https://github.com/konsav/email-templates/"> View on GitHub </a> </td></tr></table> </a> </td></tr>--> <tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; padding-top: 30px;" class="line"> <hr color="#565F73" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;"/> </td></tr><tr> <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%; padding-top: 10px; padding-bottom: 20px; color: #828999; font-family: sans-serif;" class="footer"> You are receiving this email because you submitted the form on eliascerne.com. <a href="eliascerne.com" target="_blank" style="text-decoration: underline; color: #828999; font-family: sans-serif; font-size: 13px; font-weight: 400; line-height: 150%;">Unsubscribe</a>. </td></tr></table> </td></tr></table> </body> </html>`
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