sessionStorage.removeItem('validEmail');



/* NAV HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () =>[
        navMenu.classList.add('show-menu')
    ])
}

/* MENU HIDE */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SKILLS */
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/* SERVICES */
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/* SCROLL SECTIONS ACTIVE LINK (needs to be fixed / some weird errors)
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
*/

/* SHOW SCROLL TOP */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* CHANGE BACKGROUND HEADER */
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* DARK/LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

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

    if (inputName && sessionStorage.getItem('validEmail') == true && inputCompany && inputMessage) {
        Email.send({
            SecureToken: "92255cd6-f4f4-482e-bf1e-1a6040acfd91",
            To: 'elias.cerne@icloud.com',
            From: 'elias@eliascerne.com',
            Subject: 'eliascerne.com: New Message',
            Body: `You have got a new message from ${inputName}. </br>
                The Message: ${inputMessage}`
        }).then(
            showNotification()
            //message => alert(message)
        );
    } else {
        console.log('Parameters are not correct filled in');
    }
}

/* SHOW NOTIFICATION */
const notification = document.getElementById('notification_email');
const progress_bar_email = document.getElementById('progress_bar_email');

function showNotification() {
    notification.classList.remove('notification_hide');
    notification.classList.add('notification_show');
    progress_bar_email.classList.add('notification_show');
    setTimeout(() => {
        progress_bar_email.classList.remove('notification_show');
        // notification.classList.remove('notification_show');
        notification.classList.add('notification_hide');
    }, 6000);
}

/* CONTACT ME EMAIL VALIDATOR */
var inputEmail = document.getElementById('input_email');
const contactEmail = document.getElementById('contact_email');

inputEmail.addEventListener('change', function () {
        var Email = inputEmail.value;
        var validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

        if(validEmail.test(Email)) {
            console.log('Email is valid');
            contactEmail.classList.remove('contact_not_valid');
            sessionStorage.setItem('validEmail', 1);
        } else {
            console.log('Email is not valid');
            contactEmail.classList.add('contact_not_valid');
            sessionStorage.setItem('validEmail', 0);
        }
        // Debugging
        // return validEmail.test(Email);
});